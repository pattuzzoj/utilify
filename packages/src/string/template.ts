import { isFunction, isObject, isRegExp } from "../types";
import interpolate from "./interpolate";

/**
 * Options for the template function.
 * @property {RegExp} [pattern] - The pattern to match template variables.
 * @property {(value: string, key: string) => string} [escape] - Function to escape values.
 */
interface TemplateOptions {
  pattern?: RegExp;
  escape?: (value: string, key: string) => string;
}

/**
 * Creates a template function that interpolates values into a string.
 * @param {string} str - The template string.
 * @param {TemplateOptions} options - Options for interpolation.
 * @returns {(data: Record<string, any>) => string} The template function.
 * @throws {TypeError} If str is not a string, pattern is not a RegExp, or escape is not a function.
 */
export default function template(str: string, options: TemplateOptions): (data: Record<string, any>) => string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  const { pattern, escape } = { pattern: /{{(.*?)}}/g, ...options};

  if (!isRegExp(pattern)) {
    throw new TypeError(`Expected a RegExp for 'pattern'`);
  }

  if (escape && !isFunction(escape)) {
    throw new TypeError(`Expected a function for 'escape'`);
  }

  return (data: Record<string, any>) => {
    if (!isObject(data)) {
      throw new TypeError(`Expected a plain object for 'data'`);
    }

    let escapedData = {...data};

    if (escape) {
      for (const [key, value] of Object.entries(data)) {
        escapedData[key] = escape(String(value), key);
      }
    }

    return interpolate(str, escapedData, pattern);
  }
}