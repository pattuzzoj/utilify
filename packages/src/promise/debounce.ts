type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

/**
 * @callback DebounceCallback
 * @template T
 * @param {...any} args - Arguments to pass to the debounced function.
 * @returns {void}
 */

/**
 * @typedef {Object} DebounceOptions
 * @property {boolean} [leading]
 * @property {boolean} [trailing]
 * @property {number} [maxWait]
 */

/**
 * Creates a debounced version of a function.
 * @template T
 * @param {DebounceCallback} callback - The function to debounce.
 * @param {number} [wait=300] - The debounce wait time in milliseconds.
 * @param {DebounceOptions} [options] - Debounce configuration.
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void; flush: () => void }} The debounced function.
 * @throws {Error} If both leading and trailing are false.
 */
export default function debounce<T extends (...args: any[]) => void>(
  callback: T,
  wait = 300,
  options: DebounceOptions = {}
): ((...args: Parameters<T>) => void) & {
  cancel: () => void;
  flush: () => void;
} {
  const { leading = false, trailing = true, maxWait } = options;

  if (!leading && !trailing) {
    throw new Error("debounce: 'leading' and 'trailing' cannot both be false.");
  }

  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastInvokeTime: number | null = null;

  function invoke(now: number) {
    lastInvokeTime = now;
    callback(...(lastArgs as Parameters<T>));
    lastArgs = null;
  }

  function debounced(...args: Parameters<T>) {
    const now = performance.now();
    lastArgs = args;

    const timeSinceLastInvoke = lastInvokeTime === null ? Infinity : now - lastInvokeTime;

    const shouldInvokeLeading = leading && !timerId;
    const shouldInvokeMaxWait = maxWait != null && timeSinceLastInvoke >= maxWait;

    if (shouldInvokeLeading || shouldInvokeMaxWait) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      invoke(now);
    }

    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      timerId = null;

      if (trailing && lastArgs) {
        invoke(performance.now());
      }
    }, wait);
  }

  debounced.cancel = () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
    lastArgs = null;
  };

  debounced.flush = () => {
    if (timerId && lastArgs) {
      clearTimeout(timerId);
      timerId = null;
      invoke(performance.now());
    }
  };

  return debounced;
}
