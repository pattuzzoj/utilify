import { isFunction, isObject, isRegExp } from "../types";
import interpolate from "./interpolate";

interface TemplateOptions {
  pattern?: RegExp;
  escape?: (value: string, key: string) => string;
}

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