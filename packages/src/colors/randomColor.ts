import { random } from "../math";
import rgbToHex from "./rgbToHex";
import rgbToHsl from "./rgbToHsl";

type Format = "hex" | "rgb" | "hsl";

export default function randomColor(format: Format = "rgb", alpha: boolean): string {
  if (typeof format !== 'string' || !["hex", "rgb", "hsl"].includes(format)) {
    throw new Error(`Expected "hex", "rgb", or "hsl" for 'format'`);
  }

  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  const a = alpha ? random(0, 10) / 10 : undefined;

  const rgbString = `rgb${alpha ? 'a' : ''}(${r}, ${g}, ${b}${alpha ? `,${a}` : ''})`;

  if (format === "hsl") {
    return rgbToHsl(rgbString);
  } else if (format === "hex") {
    return rgbToHex(rgbString);
  } else {
    return rgbString;
  }
}