export default function isNode(): boolean {
  return typeof global !== "undefined" && typeof process !== "undefined";
}