import { isObject } from "../types";

export default function isError(value: any): value is { name: string; message: string; stack?: string } {
  return (
    isObject(value) &&
    typeof value['name'] === 'string' &&
    typeof value['message'] === 'string'
  );
}