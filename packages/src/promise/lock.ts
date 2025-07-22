export default function lock<T extends (...args: any[]) => Promise<any>>(
  callback: T,
  options: { 
    queue?: boolean;
    onLocked?: () => void | Promise<void>;
    onError?: (error: unknown) => void | Promise<void>;
  } = { queue: true }
): (...args: Parameters<T>) => Promise<ReturnType<T> | void> {
  let isLocked = false;
  const queue: Array<() => Promise<void>> = [];

  const processQueue = async () => {
    if (queue.length === 0) {
      isLocked = false;
      return;
    }

    const next = queue.shift()!;
    
    try {
      await next();
    } catch (error) {
      options.onError?.(error);
      throw error;
    }

    await processQueue();
  };

  return async (...args: Parameters<T>): Promise<ReturnType<T> | void> => {
    if (isLocked) {
      if (options.onLocked) await options.onLocked();
      if (!options.queue) return;

      return new Promise((resolve, reject) => {
        queue.push(async () => {
          try {
            resolve(await callback(...args));
          } catch (error) {
            reject(error);
          }
        });
      });
    }

    isLocked = true;

    try {
      return await callback(...args);
    } catch (error) {
      options.onError?.(error)
      throw error;
    } finally {
      await processQueue();
    }
  };
}