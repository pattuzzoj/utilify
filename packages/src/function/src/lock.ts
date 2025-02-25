export default function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void {
  let isLocked = false;

  return async (...args: any[]): Promise<void> => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}