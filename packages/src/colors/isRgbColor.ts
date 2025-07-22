export default function isRgbColor(rgb: string): boolean {
  return typeof rgb === 'string' && /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$|^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i.test(rgb);
}