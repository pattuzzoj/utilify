export default function isBigint(value: any): value is bigint {
  return typeof value === "bigint";
}