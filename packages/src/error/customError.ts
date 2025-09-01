/**
 * Creates a custom error class with a specified name.
 * @param {string} name - The name of the custom error.
 * @returns {new (message?: string, options?: ErrorOptions) => Error} The custom error class.
 */
export default function customError(name: string): new (message?: string, options?: ErrorOptions) => Error {
  return class CustomError extends Error {
    constructor(message?: string, options?: ErrorOptions) {
      super(message, options);
      this.name = name;

      if ("captureStackTrace" in Error) {
        // Avoid CustomError itself in the stack trace
        Error.captureStackTrace(this, CustomError);
      }
    }
  }
}