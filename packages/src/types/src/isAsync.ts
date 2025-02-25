export default function isAsync(callback: Function): boolean {
  if (typeof callback !== "function") {
    return false;
  }

  return callback.constructor.name === "AsyncFunction";
}