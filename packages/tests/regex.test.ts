import { test, describe } from 'vitest';
import {
	isAlpha,
	isAlphanumeric,
	isCreditCard,
	isEmail,
	isIPV4,
	isIPV6,
	isJWT,
	isSlug,
	isURL
} from '../src/regex';

describe('Regex', () => {
	describe.concurrent('isAlpha', () => {
		test.concurrent.for([
			{
				name: 'validates alphabetic string',
				input: 'abc',
				expected: true
			},
			{
				name: 'rejects numeric string',
				input: '123',
				expected: false
			},
			{
				name: 'rejects alphanumeric string',
				input: 'abc123',
				expected: false
			},
			{
				name: 'rejects empty string',
				input: '',
				expected: false
			},
			{
				name: 'validates another alphabetic string',
				input: 'XYZ',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isAlpha(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isAlpha(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isAlphanumeric', () => {
		test.concurrent.for([
			{
				name: 'validates alphanumeric string',
				input: 'abc123',
				expected: true
			},
			{
				name: 'rejects string with special characters',
				input: 'abc123!',
				expected: false
			},
			{
				name: 'validates another alphanumeric string',
				input: 'XYZ789',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isAlphanumeric(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isAlphanumeric(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isCreditCard', () => {
		test.concurrent.for([
			{
				name: 'validates valid credit card number',
				input: '4111111111111111',
				expected: true
			},
			{
				name: 'rejects invalid credit card number',
				input: '1234567890123456',
				expected: false
			},
			{
				name: 'validates another valid credit card number',
				input: '5555555555554444',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isCreditCard(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isCreditCard(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isEmail', () => {
		test.concurrent.for([
			{
				name: 'validates valid email address',
				input: 'test@example.com',
				expected: true
			},
			{
				name: 'rejects invalid email address',
				input: 'test@.com',
				expected: false
			},
			{
				name: 'validates another valid email address',
				input: 'user.name@domain.co.uk',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isEmail(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isEmail(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isIPV4', () => {
		test.concurrent.for([
			{
				name: 'validates valid IPv4 address',
				input: '192.168.0.1',
				expected: true
			},
			{
				name: 'rejects invalid IPv4 address',
				input: '256.256.256.256',
				expected: false
			},
			{
				name: 'validates another valid IPv4 address',
				input: '10.0.0.1',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isIPV4(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isIPV4(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isIPV6', () => {
		test.concurrent.for([
			{
				name: 'validates valid IPv6 address',
				input: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
				expected: true
			},
			{
				name: 'rejects invalid IPv6 address',
				input: '2001:0db8:85a3:0000:0000:8a2e',
				expected: false
			},
			{
				name: 'validates abbreviated IPv6 address',
				input: '2001:db8::1',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isIPV6(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isIPV6(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isJWT', () => {
		test.concurrent.for([
			{
				name: 'validates valid JWT string',
				input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30',
				expected: true
			},
			{
				name: 'rejects JWT with invalid characters',
				input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9!eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
				expected: false
			},
			{
				name: 'rejects JWT with too few parts',
				input: 'header.payload',
				expected: false
			},
			{
				name: 'rejects JWT with too many parts',
				input: 'header.payload.signature.extra',
				expected: false
			},
			{
				name: 'rejects empty string',
				input: '',
				expected: false
			},
			{
				name: 'validates another valid JWT',
				input: 'eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoidGVzdCJ9.ZXhhbXBsZQ',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isJWT(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isJWT(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isSlug', () => {
		test.concurrent.for([
			{
				name: 'validates valid slug',
				input: 'this-is-a-slug',
				expected: true
			},
			{
				name: 'rejects invalid slug',
				input: 'this is a slug',
				expected: false
			},
			{
				name: 'validates another valid slug',
				input: 'test-123-slug',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isSlug(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isSlug(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('isURL', () => {
		test.concurrent.for([
			{
				name: 'validates valid URL',
				input: 'https://www.example.com',
				expected: true
			},
			{
				name: 'rejects invalid URL',
				input: 'htp://example',
				expected: false
			},
			{
				name: 'validates URL with path',
				input: 'https://example.com/path/to/resource',
				expected: true
			}
		])("$name", async ({ input, expected }, { expect }) => {
			expect(isURL(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => isURL(123)).toThrow(TypeError);
		});
	});
});
