import isFunction from "./isFunction";

export default function isAsyncFunction(value: any): value is (...args: any[]) => Promise<any> {
  return isFunction(value) && value.constructor.name === "AsyncFunction";
}