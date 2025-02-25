import {
  capitalize,
  invertCase,
  maskString,
  removeAccents,
  slugify,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  truncate,
  wordCount,
  isLowerCase,
  isUpperCase
} from "./src";

describe("String Utility Functions", () => {
  test("capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("invertCase", () => {
    expect(invertCase("Hello")).toBe("hELLO");
    expect(invertCase("hElLO")).toBe("HeLlo");
  });

  test("maskString", () => {
    expect(maskString("1234567890", "*", 2, 4)).toBe("12****7890");
    expect(maskString("1234567890", "#", 2, 4)).toBe("12####7890");
    expect(maskString("1234567890", "#", 2, 100)).toBe("12########");
  });

  test("removeAccents", () => {
    expect(removeAccents("éèêë")).toBe("eeee");
    expect(removeAccents("çà")).toBe("ca");
  });

  test("slugify", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  test("toCamelCase", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
    expect(toCamelCase("Hello World")).toBe("helloWorld");
  });

  test("toKebabCase", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("Hello World")).toBe("hello-world");
  });

  test("toPascalCase", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
    expect(toPascalCase("Hello World")).toBe("HelloWorld");
  });

  test("toSnakeCase", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
    expect(toSnakeCase("Hello World")).toBe("hello_world");
  });

  test('isLowerCase', () => {
		expect(isLowerCase('abc')).toBe(true);
		expect(isLowerCase('Abc')).toBe(false);
	});

	test('isUpperCase', () => {
		expect(isUpperCase('ABC')).toBe(true);
		expect(isUpperCase('Abc')).toBe(false);
	});

  test("truncate", () => {
    expect(truncate("Hello World", 5)).toBe("Hello...");
    expect(truncate("Hello", 10)).toBe("Hello...");
  });

  test("wordCount", () => {
    expect(wordCount("Hello World")).toBe(2);
    expect(wordCount("Hello")).toBe(1);
  });
});
