import { isObject } from "../types";

/**
 * Checks if a value is an error-like object (has name and message).
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is error-like, false otherwise.
 */
export default function isError(value: any): value is { name: string; message: string; stack?: string } {
  return (
    isObject(value) &&
    typeof value['name'] === 'string' &&
    typeof value['message'] === 'string'
  );
}