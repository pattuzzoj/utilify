type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

interface ThrottledFunction<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void;
  cancel(): void;
  flush(): void;
}

/**
 * @callback ThrottleCallback
 * @template T
 * @param {...any} args - Arguments to pass to the throttled function.
 * @returns {void}
 */

/**
 * @typedef {Object} ThrottleOptions
 * @property {boolean} [leading]
 * @property {boolean} [trailing]
 * @property {number} [maxWait]
 */

/**
 * @template T
 * @typedef {Object} ThrottledFunction
 * @property {function(...args: Parameters<T>): void} [call]
 * @property {function(): void} cancel
 * @property {function(): void} flush
 */

/**
 * Creates a throttled version of a function.
 * @template T
 * @param {ThrottleCallback} callback - The function to throttle.
 * @param {number} wait - The wait time in milliseconds.
 * @param {ThrottleOptions} [options] - Throttle configuration.
 * @returns {ThrottledFunction<T>} The throttled function.
 * @throws {TypeError} If callback is not a function.
 */
export default function throttle<T extends (...args: any[]) => void>(
  callback: T,
  wait: number,
  {
    leading = true,
    trailing = true,
    maxWait,
  }: ThrottleOptions = {}
): ThrottledFunction<T> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastCallTime: number | null = null;
  let lastInvokeTime = 0;

  const now = () => performance.now();

  function invoke(time: number) {
    lastInvokeTime = time;
    callback(...(lastArgs as Parameters<T>));
    lastArgs = null;
  }

  function shouldInvoke(time: number): boolean {
    if (lastCallTime === null) return true;

    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      timeSinceLastCall >= wait ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }

  function startTimer(pendingFunc: () => void, delay: number): ReturnType<typeof setTimeout> {
    return setTimeout(pendingFunc, delay);
  }

  function remainingWait(time: number): number {
    const sinceLastCall = time - (lastCallTime ?? 0);
    const sinceLastInvoke = time - lastInvokeTime;

    const timeUntilNextInvoke = wait - sinceLastCall;
    const maxWaitTimeRemaining = maxWait !== undefined
      ? maxWait - sinceLastInvoke
      : Infinity;

    return Math.min(timeUntilNextInvoke, maxWaitTimeRemaining);
  }

  function trailingEdge(time: number) {
    timerId = null;

    if (trailing && lastArgs) {
      invoke(time);
    }
  }

  function throttled(...args: Parameters<T>) {
    const currentTime = now();

    if (lastCallTime === null) {
      lastCallTime = currentTime;
    }

    lastArgs = args;

    if (shouldInvoke(currentTime)) {
      if (timerId === null) {
        if (leading) {
          invoke(currentTime);
        } else if (trailing) {
          timerId = startTimer(() => trailingEdge(now()), wait);
        }
      } else if (maxWait !== undefined && currentTime - lastInvokeTime >= maxWait) {
        invoke(currentTime);
      }
    } else if (timerId === null && trailing) {
      timerId = startTimer(() => trailingEdge(now()), remainingWait(currentTime));
    }

    lastCallTime = currentTime;
  }

  throttled.cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }
    
    lastArgs = null;
    lastCallTime = null;
  };

  throttled.flush = () => {
    if (timerId !== null && lastArgs) {
      clearTimeout(timerId);
      timerId = null;
      trailingEdge(now());
    }
  };

  return throttled;
}