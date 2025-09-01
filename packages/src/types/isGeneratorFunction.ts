import isFunction from "./isFunction";

/**
 * Check if a value is a generator function.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is a generator function, false otherwise.
 */
export default function isGeneratorFunction(value: any): value is GeneratorFunction {
  return isFunction(value) && value.constructor.name === 'GeneratorFunction';
}