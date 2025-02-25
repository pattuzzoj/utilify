import {
	hexToHsl,
	hexToRgb,
	hslToHex,
	hslToRgb,
	isHex,
	isHsl,
	isRgb,
	rgbToHex,
	rgbToHsl,
  } from "./src";
  
  describe("Color Utility Functions", () => {
	beforeAll(() => {
	  jest.spyOn(console, "error").mockImplementation(() => {});
	});
  
	afterAll(() => {
	  jest.restoreAllMocks();
	});
  
	test("isHex", () => {
	  expect(isHex("fff")).toBe(true);
	  expect(isHex("ffffff")).toBe(true);
	  expect(isHex("ggg")).toBe(false);
	});
  
	test("isHsl", () => {
	  expect(isHsl("360, 100%, 50%")).toBe(true);
	  expect(isHsl("360, 100%, 50%, 0.5")).toBe(true);
	  expect(isHsl("360, 100, 50")).toBe(false);
	});
  
	test("isRgb", () => {
	  expect(isRgb("255, 255, 255")).toBe(true);
	  expect(isRgb("255, 255, 255, 0.5")).toBe(true);
	  expect(isRgb("255, 255, 255, 1.5")).toBe(false);
	});
  
	test("rgbToHex", () => {
	  expect(rgbToHex("255, 255, 255")).toBe("ffffff");
	  expect(rgbToHex("255, 255, 255, 0.5")).toBe("ffffff80");
	  expect(rgbToHex("255, 255")).toBe(null);
	});
  
	test("rgbToHsl", () => {
	  expect(rgbToHsl("255, 255, 255")).toBe("0, 0%, 100%");
	  expect(rgbToHsl("255, 0, 0")).toBe("0, 100%, 50%");
	  expect(rgbToHsl("255, 255")).toBe(null);
	});
  
	test("hexToRgb", () => {
	  expect(hexToRgb("ffffff")).toBe("255, 255, 255");
	  expect(hexToRgb("fff")).toBe("255, 255, 255");
	  expect(hexToRgb("ggg")).toBe(null);
	});
  
	test("hexToHsl", () => {
	  expect(hexToHsl("ffffff")).toBe("0, 0%, 100%");
	  expect(hexToHsl("ff0000")).toBe("0, 100%, 50%");
	  expect(hexToHsl("ggg")).toBe(null);
	});
  
	test("hslToRgb", () => {
	  expect(hslToRgb("0, 100%, 50%")).toBe("255, 0, 0");
	  expect(hslToRgb("360, 100%, 50%")).toBe("255, 0, 0");
	  expect(hslToRgb("360, 100, 50")).toBe(null);
	});
  
	test("hslToHex", () => {
	  expect(hslToHex("0, 100%, 50%")).toBe("ff0000");
	  expect(hslToHex("360, 100%, 50%")).toBe("ff0000");
	  expect(hslToHex("360, 100, 50")).toBe(null);
	});
  });
  