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