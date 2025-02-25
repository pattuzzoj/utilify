import sum from "./sum";

export default function average(values: number[]): number {
  return values.length ? (sum(values) / values.length) : 0;
}