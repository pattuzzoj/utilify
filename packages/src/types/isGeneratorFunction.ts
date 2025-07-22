import isFunction from "./isFunction";

export default function isGeneratorFunction(value: any): value is GeneratorFunction {
  return isFunction(value) && value.constructor.name === 'GeneratorFunction';
}