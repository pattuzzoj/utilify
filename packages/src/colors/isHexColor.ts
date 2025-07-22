export default function isHexColor(hex: string): boolean {
  return typeof hex === 'string' && /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex);
}