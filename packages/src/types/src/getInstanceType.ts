export default function getInstanceType(value: object): string | undefined {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}