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

const DEFAULT_OPTIONS: Required<Omit<BackoffOptions, 'onRetry'>> = {
  backoffMode: 'exponential',
  initialDelay: 500,
  jitterMode: 'full',
  maxAttempts: 5,
  maxDelay: 60000
};

export default async function backoff<T>(
  action: () => Promise<T>,
  {
    initialDelay = DEFAULT_OPTIONS.initialDelay,
    backoffMode = DEFAULT_OPTIONS.backoffMode,
    jitterMode = DEFAULT_OPTIONS.jitterMode,
    maxAttempts = DEFAULT_OPTIONS.maxAttempts,
    maxDelay = DEFAULT_OPTIONS.maxDelay,
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