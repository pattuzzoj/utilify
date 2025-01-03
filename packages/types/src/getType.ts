export default function getType(value: any): string {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}