import { test, describe, beforeAll, afterAll, vi } from 'vitest';
import {
  capitalize,
  charCount,
  escapeHtml,
  interpolate,
  invertCase,
  isLowerCase,
  isUpperCase,
  maskString,
  removeAccents,
  slugify,
  stripHtml,
  template,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  truncate,
  wordCount
} from '../src/string';

describe('String', () => {
  beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe('capitalize', () => {
    test.concurrent.for([
      {
        name: 'capitalizes lowercase word',
        input: 'hello',
        expected: 'Hello'
      },
      {
        name: 'converts uppercase word to capitalized',
        input: 'HELLO',
        expected: 'Hello'
      },
      {
        name: 'converts mixed case word to capitalized',
        input: 'hElLo',
        expected: 'Hello'
      },
      {
        name: 'handles empty string',
        input: '',
        expected: ''
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(capitalize(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => capitalize(123)).toThrow(TypeError);
    });
  });

  describe('charCount', () => {
    test.concurrent.for([
      {
        name: 'counts occurrences of a character in a string',
        input: { str: 'hello world', char: 'o' },
        expected: 2
      },
      {
        name: 'returns 0 if character is not found',
        input: { str: 'hello world', char: 'z' },
        expected: 0
      },
      {
        name: 'handles empty string',
        input: { str: '', char: 'a' },
        expected: 0
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(charCount(input.str, input.char)).toBe(expected);
    });

    test.concurrent('throws error for invalid input types', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => charCount(123, 'a')).toThrow(TypeError);
    });
  });

describe('escapeHtml', () => {
  test.concurrent.for([
    {
      name: 'escapes HTML special characters',
      input: '<div class="test">Hello & World</div>',
      expected: '&lt;div class=&quot;test&quot;&gt;Hello &amp; World&lt;/div&gt;'
    },
    {
      name: 'escapes single quotes',
      input: "It's a test",
      expected: 'It&#39;s a test'
    },
    {
      name: 'handles empty string',
      input: '',
      expected: ''
    },
    {
      name: 'handles string with no special characters',
      input: 'Hello World',
      expected: 'Hello World'
    }
  ])("$name", async ({ input, expected }, { expect }) => {
    expect(escapeHtml(input)).toBe(expected);
  });

  test.concurrent('throws error for invalid input type', async ({ expect }) => {
    // @ts-expect-error Testing invalid type
    expect(() => escapeHtml(123)).toThrow(TypeError);
  });
});

  describe.concurrent('interpolate', () => {
    test.concurrent.for([
      {
        name: 'interpolates string with single placeholder',
        input: {
          str: 'Hello, {{name}}!',
          data: { name: 'John' }
        },
        expected: 'Hello, John!'
      },
      {
        name: 'interpolates string with multiple placeholders',
        input: {
          str: '{{greeting}}, {{name}}!',
          data: { greeting: 'Hi', name: 'John' }
        },
        expected: 'Hi, John!'
      },
      {
        name: 'preserves unmatched placeholders',
        input: {
          str: 'Hello {{name}}! Age: {{age}}',
          data: { name: 'John' }
        },
        expected: 'Hello John! Age: {{age}}'
      },
      {
        name: 'handles empty string',
        input: {
          str: '',
          data: { name: 'John' }
        },
        expected: ''
      },
      {
        name: 'handles custom pattern',
        input: {
          str: 'Hello <%name%>!',
          data: { name: 'John' },
          pattern: /<%(.+?)%>/g
        },
        expected: 'Hello John!'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      const result = input.pattern 
        ? interpolate(input.str, input.data, input.pattern)
        : interpolate(input.str, input.data);
      expect(result).toBe(expected);
    });
	});

  describe('invertCase', () => {
    test.concurrent.for([
      {
        name: 'inverts case of mixed case string',
        input: 'Hello',
        expected: 'hELLO'
      },
      {
        name: 'inverts case of alternating case string',
        input: 'hElLO',
        expected: 'HeLlo'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(invertCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => invertCase(123)).toThrow(TypeError);
    });
  });

  describe('isLowerCase', () => {
    test.concurrent.for([
      {
        name: 'returns true for lowercase string',
        input: 'abc',
        expected: true
      },
      {
        name: 'returns false for string with uppercase letters',
        input: 'Abc',
        expected: false
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(isLowerCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => isLowerCase(123)).toThrow(TypeError);
    });
  });

  describe('isUpperCase', () => {
    test.concurrent.for([
      {
        name: 'returns true for uppercase string',
        input: 'ABC',
        expected: true
      },
      {
        name: 'returns false for string with lowercase letters',
        input: 'Abc',
        expected: false
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(isUpperCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => isUpperCase(123)).toThrow(TypeError);
    });
  });

  describe('maskString', () => {
    test.concurrent.for([
      {
        name: 'masks middle of string with asterisks',
        input: { str: '1234567890', maskChar: '*', start: 2, length: 4 },
        expected: '12****7890'
      },
      {
        name: 'masks middle of string with hash symbols',
        input: { str: '1234567890', maskChar: '#', start: 2, length: 4 },
        expected: '12####7890'
      },
      {
        name: 'masks to end of string when length exceeds remaining characters',
        input: { str: '1234567890', maskChar: '#', start: 2, length: 100 },
        expected: '12########'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(maskString(input.str, input.maskChar, input.start, input.length)).toBe(expected);
    });

    test.concurrent('throws error for invalid input types', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => maskString(123, '*', 2, 4)).toThrow(TypeError);
    });
  });

  describe('removeAccents', () => {
    test.concurrent.for([
      {
        name: 'removes accents from vowels',
        input: 'éèêë',
        expected: 'eeee'
      },
      {
        name: 'removes accents from consonants',
        input: 'çà',
        expected: 'ca'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(removeAccents(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => removeAccents(123)).toThrow(TypeError);
    });
  });

  describe('slugify', () => {
    test.concurrent.for([
      {
        name: 'converts string with spaces to slug',
        input: 'Hello World!',
        expected: 'hello-world'
      },
      {
        name: 'converts string with special characters to slug',
        input: 'Hello, World!',
        expected: 'hello-world'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(slugify(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => slugify(123)).toThrow(TypeError);
    });
  });

  describe('stripHTML', () => {
    test.concurrent.for([
      {
        name: 'removes HTML tags from a string',
        input: '<h1>Hello</h1> <p>World</p>',
        expected: 'Hello World'
      },
      {
        name: 'handles string with no HTML tags',
        input: 'Hello World',
        expected: 'Hello World'
      },
      {
        name: 'handles empty string',
        input: '',
        expected: ''
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(stripHtml(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => stripHtml(123)).toThrow(TypeError);
    });
  });

  describe('template', () => {
    test.concurrent.for([
      {
        name: 'creates template function that replaces placeholders',
        input: { str: 'Hello {{name}}!', options: {}, data: { name: 'World' } },
        expected: 'Hello World!'
      },
      {
        name: 'handles multiple placeholders in template',
        input: { str: '{{greeting}}, {{name}}!', options: {}, data: { greeting: 'Hi', name: 'There' } },
        expected: 'Hi, There!'
      },
      {
        name: 'preserves unmatched placeholders',
        input: { str: 'Hello {{name}}! You are {{age}}.', options: {}, data: { name: 'World' } },
        expected: 'Hello World! You are {{age}}.'
      },
      {
        name: 'handles empty template string',
        input: { str: '', options: {}, data: { name: 'World' } },
        expected: ''
      },
      {
        name: 'uses custom pattern for placeholders',
        input: { 
          str: 'Hello <%name%>!', 
          options: { pattern: /<%(.+?)%>/g },
          data: { name: 'World' }
        },
        expected: 'Hello World!'
      },
      {
        name: 'applies escape function to values',
        input: {
          str: 'Hello {{name}}!',
          options: { 
            escape: (value: string) => value.toUpperCase()
          },
          data: { name: 'World' }
        },
        expected: 'Hello WORLD!'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      const templateFn = template(input.str, input.options);
      expect(templateFn(input.data)).toBe(expected);
    });

    test.concurrent('throws error for invalid input types', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => template(123, {})).toThrow(TypeError);
      // @ts-ignore
      expect(() => template('test', { pattern: 'invalid' })).toThrow(TypeError);
      const templateFn = template('{{test}}', {});
      // @ts-ignore
      expect(() => templateFn('invalid')).toThrow(TypeError);
    });
  });

  describe('toCamelCase', () => {
    test.concurrent.for([
      {
        name: 'converts lowercase string with spaces to camelCase',
        input: 'hello world',
        expected: 'helloWorld'
      },
      {
        name: 'converts capitalized string with spaces to camelCase',
        input: 'Hello World',
        expected: 'helloWorld'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(toCamelCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => toCamelCase(123)).toThrow(TypeError);
    });
  });

  describe('toKebabCase', () => {
    test.concurrent.for([
      {
        name: 'converts lowercase string with spaces to kebab-case',
        input: 'hello world',
        expected: 'hello-world'
      },
      {
        name: 'converts capitalized string with spaces to kebab-case',
        input: 'Hello World',
        expected: 'hello-world'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(toKebabCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => toKebabCase(123)).toThrow(TypeError);
    });
  });

  describe('toPascalCase', () => {
    test.concurrent.for([
      {
        name: 'converts lowercase string with spaces to PascalCase',
        input: 'hello world',
        expected: 'HelloWorld'
      },
      {
        name: 'converts capitalized string with spaces to PascalCase',
        input: 'Hello World',
        expected: 'HelloWorld'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(toPascalCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => toPascalCase(123)).toThrow(TypeError);
    });
  });

  describe('toSnakeCase', () => {
    test.concurrent.for([
      {
        name: 'converts lowercase string with spaces to snake_case',
        input: 'hello world',
        expected: 'hello_world'
      },
      {
        name: 'converts capitalized string with spaces to snake_case',
        input: 'Hello World',
        expected: 'hello_world'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(toSnakeCase(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => toSnakeCase(123)).toThrow(TypeError);
    });
  });

  describe('truncate', () => {
    test.concurrent.for([
      {
        name: 'truncates string to specified size',
        input: { text: 'Hello World', size: 5 },
        expected: 'Hello...'
      },
      {
        name: 'does not truncate if string is shorter than size',
        input: { text: 'Hi', size: 5 },
        expected: 'Hi...'
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(truncate(input.text, input.size)).toBe(expected);
    });

    test.concurrent('throws error for invalid input types', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => truncate(123, 5)).toThrow(TypeError);
    });
  });

  describe('wordCount', () => {
    test.concurrent.for([
      {
        name: 'counts words in a sentence',
        input: 'Hello world, this is a test.',
        expected: 6
      },
      {
        name: 'handles multiple spaces between words',
        input: '  Hello   world  ',
        expected: 2
      },
      {
        name: 'handles empty string',
        input: '',
        expected: 0
      }
    ])("$name", async ({ input, expected }, { expect }) => {
      expect(wordCount(input)).toBe(expected);
    });

    test.concurrent('throws error for invalid input type', async ({ expect }) => {
      // @ts-expect-error Testing invalid type
      expect(() => wordCount(123)).toThrow(TypeError);
    });
  });
});
