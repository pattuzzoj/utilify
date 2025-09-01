// @ts-nocheck
import sleep from './sleep';

type BackoffMode = 'fixed' | 'linear' | 'exponential';
type JitterMode = 'none' | 'full' | 'equal' | 'decorrelated';

interface BackoffOptions {
  backoffMode?: BackoffMode;
  initialDelay?: number;
  jitterMode?: JitterMode;
  maxDelay?: number;
  maxAttempts?: number;
  onRetry?: (attempt: number, currentDelay: number) => void;
}

/**
 * @callback BackoffAction
 * @returns {Promise<any>} The promise to execute.
 */

/**
 * @callback BackoffOnRetry
 * @param {number} attempt - The current attempt number.
 * @param {number} currentDelay - The current delay before retry.
 * @returns {void}
 */

/**
 * Options for backoff.
 * @typedef {Object} BackoffOptions
 * @property {'fixed'|'linear'|'exponential'} [backoffMode="exponential"]
 * @property {number} [initialDelay=500]
 * @property {'none'|'full'|'equal'|'decorrelated'} [jitterMode="full"]
 * @property {number} [maxDelay=60000]
 * @property {number} [maxAttempts=5]
 * @property {BackoffOnRetry} [onRetry]
 */

/**
 * Executes an async action with retry and backoff strategies.
 * @template T
 * @param {BackoffAction} action - The async function to execute.
 * @param {BackoffOptions} [options] - Backoff configuration.
 * @returns {Promise<T>} The result of the action.
 * @throws {Error} If parameters are invalid or retries exhausted.
 */
export default async function backoff<T>(
  action: () => Promise<T>,
  {
    initialDelay = 500,
    backoffMode = 'exponential',
    jitterMode = 'full',
    maxAttempts = 5,
    maxDelay = 60000,
    onRetry,
  }: BackoffOptions = {}
): Promise<T>  {
  if (typeof action !== 'function') {
    throw new Error(`Expected a function for 'action'`);
  }

  if (initialDelay <= 0) {
    throw new Error(`Expected a positive number for 'initialDelay'`);
  }

  if (maxAttempts <= 0) {
    throw new Error(`Expected a positive number for 'maxAttempts'`);
  }

  if (maxDelay <= 0) {
    throw new Error(`Expected a positive number for 'maxDelay'`);
  }

  let currentDelay = initialDelay;

  function getBackoffStrategy(mode: BackoffMode): (attempt: number) => number {
    switch (mode) {
      case 'fixed':
        return () => initialDelay;
      case 'linear':
        return (attempt) => initialDelay * attempt;
      case 'exponential':
        return (attempt) => initialDelay * 2 ** (attempt - 1);
      default:
        throw new Error(`Invalid backoff mode: ${mode}`);
    }
  }

  function getJitterStrategy(mode: JitterMode, initialDelay: number, maxDelay: number): (backoffDelay: number, previousDelay: number) => number {
    switch (mode) {
      case 'none':
        return (backoffDelay) => Math.min(backoffDelay, maxDelay);
      case 'full':
        return (backoffDelay) => Math.random() * Math.min(backoffDelay, maxDelay);
      case 'equal':
        return (backoffDelay) => {
          const minDelay = Math.min(backoffDelay, maxDelay);
          return (minDelay / 2) + (Math.random() * minDelay / 2);
        };
      case 'decorrelated':
        return (_backoffDelay: number, previousDelay) => Math.min(initialDelay + Math.random() * (previousDelay * 3 - initialDelay), maxDelay);
      default:
        throw new Error(`Invalid jitter mode: ${mode}`);
    }
  }

  const computeBackoff = getBackoffStrategy(backoffMode);
  const computeJitter = getJitterStrategy(jitterMode, initialDelay, maxDelay);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await action();
    } catch(error) {
      if (attempt === maxAttempts) {
        throw error;
      }

      let backoffDelay = computeBackoff(attempt);
      let finalDelay = computeJitter(backoffDelay, currentDelay);

      currentDelay = finalDelay;
      onRetry?.(attempt, currentDelay);
      await sleep(currentDelay);
    }
  }
}