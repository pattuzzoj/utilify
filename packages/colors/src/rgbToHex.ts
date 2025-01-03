import { isRgb } from ".";

export default function rgbToHex(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels.slice(0, 3).map((channel) =>
    Number(channel).toString(16).padStart(2, "0")
  );

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}