export default function freeze(obj: Record<string, any>): Record<string, any> {
  return Object.freeze(obj);
}
