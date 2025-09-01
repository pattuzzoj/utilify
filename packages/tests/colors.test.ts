import { test, describe, assert } from 'vitest';
import {
	hexToHsl,
	hexToRgb,
	hslToHex,
	hslToRgb,
	isHexColor,
	isHslColor,
	isRgbColor,
	parseColor,
	randomColor,
	rgbToHex,
	rgbToHsl,
} from "../src/colors";

describe("Color", () => {
	describe.concurrent('isHexColor', () => {
		test.concurrent.for([
			{
				name: "validates valid hex color fff",
				input: "#fff",
				expected: true
			},
			{
				name: "validates valid hex color ffffff",
				input: "#ffffff",
				expected: true
			},
			{
				name: "invalidates incorrect hex color ggg",
				input: "#ggg",
				expected: false
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isHexColor(input)).toBe(expected);
		});
	});

	describe.concurrent('isHslColor', () => {
		test.concurrent.for([
			{
				name: "validates valid HSL color",
				input: "hsl(360, 100%, 50%)",
				expected: true
			},
			{
				name: "validates valid HSL color with alpha",
				input: "hsla(360, 100%, 50%, 0.5)",
				expected: true
			},
			{
				name: "invalidates incorrect HSL color",
				input: "hsl(360, 100, 50)",
				expected: false
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isHslColor(input)).toBe(expected);
		});
	});

	describe.concurrent('isRgbColor', () => {
		test.concurrent.for([
			{
				name: "validates valid RGB color",
				input: "rgb(255, 255, 255)",
				expected: true
			},
			{
				name: "validates valid RGB color with alpha",
				input: "rgba(255, 255, 255, 0.05)",
				expected: true
			},
			{
				name: "invalidates incorrect RGB color with invalid alpha",
				input: "rgba(255, 255, 255, 1.5)",
				expected: false
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isRgbColor(input)).toBe(expected);
		});
	});

	describe.concurrent('rgbToHex', () => {
		test.concurrent.for([
			{
				name: "converts valid RGB to hex",
				input: "rgb(255, 255, 255)",
				expected: "#ffffff"
			},
			{
				name: "converts valid RGB with alpha to hex", 
				input: "rgba(255, 255, 255, 0.5)",
				expected: "#ffffff80"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(rgbToHex(input)).toBe(expected);
		});

		test("returns null for invalid RGB", async ({ expect }) => {
			expect(() => rgbToHex("rgb(255, 255)")).toThrow(Error);
		});
	});

	describe.concurrent('rgbToHsl', () => {
		test.concurrent.for([
			{
				name: "converts white RGB to HSL",
				input: "rgb(255, 255, 255)", 
				expected: "hsl(0, 0%, 100%)"
			},
			{
				name: "converts red RGB to HSL",
				input: "rgb(255, 0, 0)",
				expected: "hsl(0, 100%, 50%)"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(rgbToHsl(input)).toBe(expected);
		});

		test("returns null for invalid RGB", async ({ expect }) => {
			expect(() => rgbToHsl("rgb(255, 255)")).toThrow(Error);
		});
	});

	describe.concurrent('hexToRgb', () => {
		test.concurrent.for([
			{
				name: "converts valid 6-digit hex to RGB",
				input: "#ffffff",
				expected: "rgb(255, 255, 255)"
			},
			{
				name: "converts valid 3-digit hex to RGB",
				input: "#fff",
				expected: "rgb(255, 255, 255)"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(hexToRgb(input)).toBe(expected);
		});

		test("returns null for invalid hex", async ({ expect }) => {
			expect(() => hexToRgb("#ggg")).toThrow(Error);
		});
	});

	describe.concurrent('hexToHsl', () => {
		test.concurrent.for([
			{
				name: "converts white hex to HSL",
				input: "#ffffff",
				expected: "hsl(0, 0%, 100%)"
			},
			{
				name: "converts red hex to HSL",
				input: "#ff0000",
				expected: "hsl(0, 100%, 50%)"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(hexToHsl(input)).toBe(expected);
		});

		test("returns null for invalid hex", async ({ expect }) => {
			expect(() =>hexToHsl("#ggg")).toThrow(Error);
		});
	});

	describe.concurrent('hslToRgb', () => {
		test.concurrent.for([
			{
				name: "converts red HSL to RGB",
				input: "hsl(0, 100%, 50%)",
				expected: "rgb(255, 0, 0)"
			},
			{
				name: "converts 360 degrees HSL to RGB",
				input: "hsl(360, 100%, 50%)",
				expected: "rgb(255, 0, 0)"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(hslToRgb(input)).toBe(expected);
		});

		test("throws error for invalid HSL", async ({ expect }) => {
			expect(() => hslToRgb("hsl(360, 100, 50)")).toThrow(Error);
		});
	});

	describe.concurrent('hslToHex', () => {
		test.concurrent.for([
			{
				name: "converts red HSL to hex",
				input: "hsl(0, 100%, 50%)",
				expected: "#ff0000"
			},
			{
				name: "converts 360 degrees HSL to hex",
				input: "hsl(360, 100%, 50%)",
				expected: "#ff0000"
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(hslToHex(input)).toBe(expected);
		});

		test("throws error for invalid HSL", async ({ expect }) => {
			expect(() => hslToHex("hsl(360, 100, 50)")).toThrow(Error);
		});
	});

	describe.concurrent('parseColor', () => {
		test.concurrent.for([
			{
				input: 'rgb(255, 100, 50)',
				expected: { model: 'rgb', values: [255, 100, 50], alpha: 1 },
				name: 'RGB simple'
			},
			{
				input: 'rgba(255, 100, 50, 0.5)',
				expected: { model: 'rgb', values: [255, 100, 50], alpha: 0.5 },
				name: 'RGBA with aplha channel'
			},
			{
				input: 'hsl(120, 100%, 50%)',
				expected: { model: 'hsl', values: [120, 100, 50], alpha: 1 },
				name: 'HSL simple'
			},
			{
				input: 'hsla(240, 60%, 50%, 1)',
				expected: { model: 'hsl', values: [240, 60, 50], alpha: 1 },
				name: 'HSLA with aplha channel'
			},
			{
				input: '#ff6432',
				expected: { model: 'rgb', values: [255, 100, 50], alpha: 1 },
				name: 'HEX simple'
			},
			{
				input: '#ff643280',
				expected: { model: 'rgb', values: [255, 100, 50], alpha: 0.5 },
				name: 'HEX with alpha channel'
			},
			{
				input: 'not a color',
				expected: null,
				name: 'Invalid color'
			}
		])('$name', async ({ input, expected }) => {
			assert.deepEqual(parseColor(input), expected as any);
		});
	});

	describe.concurrent('randomColor', () => {
		test.concurrent.for([
			{
				format: "rgb",
				alpha: false,
				name: "RGB sem alpha",
				expected: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
			},
			{
				format: "rgb",
				alpha: true,
				name: "RGBA com alpha",
				expected: /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i,
			},
			{
				format: "hsl",
				alpha: false,
				name: "HSL sem alpha",
				expected: /^hsl\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*\)$/,
			},
			{
				format: "hsl",
				alpha: true,
				name: "HSLA com alpha",
				expected: /^hsla\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(\d{1,3}(?:\.\d+)?)%\s*,\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s*\)$/i,
			},
			{
				format: "hex",
				alpha: false,
				name: "HEX sem alpha",
				expected: /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6})$/,
			},
			{
				format: "hex",
				alpha: true,
				name: "HEX com alpha",
				expected: /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/,
			},
		])('$name', ({ format, alpha, expected }, { expect }) => {
			expect(randomColor(format as any, alpha)).toMatch(expected);
		});
	});
});
  