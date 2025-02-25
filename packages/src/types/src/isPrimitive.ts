export default function isPrimitive(value: any): boolean {
  return value === null || typeof value !== "object" && typeof value !== "function";
}