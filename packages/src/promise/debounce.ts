type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
};

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
