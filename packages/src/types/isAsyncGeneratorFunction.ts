import isFunction from "./isFunction";

export default function isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction {
  return isFunction(value) && value.constructor.name === 'AsyncGeneratorFunction';
}