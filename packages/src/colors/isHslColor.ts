export default function isHslColor(hsl: string): boolean {
  return typeof hsl === 'string' && /^hsl\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*\)$|^hsla\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i.test(hsl);
}