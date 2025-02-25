export interface BackOffOptions {
  limit: number;
  baseDelay: number;
  maxDelay: number;
}

export default async function backOff<T>(callback: () => Promise<T>, backOptions: BackOffOptions): Promise<T> {
  const { limit, baseDelay = 100, maxDelay = 3000 } = backOptions;

  async function retry(attempt: number) {
    if (attempt >= limit) {
      return;
    }

    const delay = Math.min(baseDelay * (2 ** attempt), maxDelay);
    return new Promise((resolve) => {
      setTimeout(async () => {
        try {
          resolve(await callback());
        } catch {
          resolve(await retry(attempt + 1));
        }
      }, delay);
    });
  }

  return await retry(0) as Promise<T>;
}
