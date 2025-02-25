export default function fallback<T, U = T>(callback: () => T, fallback: () => U): T | U {
  try {
    return callback();
  } catch {
    return fallback();
  }
} 