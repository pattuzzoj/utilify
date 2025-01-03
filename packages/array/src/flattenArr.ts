export default function flattenArr<T>(arr: T[], depth: number = Infinity): FlatArray<T[], number>[] {
  return (arr as T[]).flat(depth) as FlatArray<T[], number>[];
}