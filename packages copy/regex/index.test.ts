import {
	isAlpha,
	isAlphanumeric,
	isBase64,
	isCreditCard,
	isEmail,
	isIPV4,
	isIPV6,
	isSlug,
	isURL,
	isUUID,
} from './src';

describe('Regex Utility Functions', () => {
	test('isAlpha', () => {
		expect(isAlpha('abc')).toBe(true);
		expect(isAlpha('abc123')).toBe(false);
	});

	test('isAlphanumeric', () => {
		expect(isAlphanumeric('abc123')).toBe(true);
		expect(isAlphanumeric('abc123!')).toBe(false);
	});

	test('isBase64', () => {
		expect(isBase64('dGVzdA==')).toBe(true);
		expect(isBase64('testing')).toBe(false);
	});

	test('isCreditCard', () => {
		expect(isCreditCard('4111111111111111')).toBe(true);
		expect(isCreditCard('1234567890123456')).toBe(false);
	});

	test('isEmail', () => {
		expect(isEmail('test@example.com')).toBe(true);
		expect(isEmail('test@.com')).toBe(false);
	});

	test('isIPV4', () => {
		expect(isIPV4('192.168.0.1')).toBe(true);
		expect(isIPV4('256.256.256.256')).toBe(false);
	});

	test('isIPV6', () => {
		expect(isIPV6('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
		expect(isIPV6('2001:0db8:85a3:0000:0000:8a2e')).toBe(false);
	});

	test('isSlug', () => {
		expect(isSlug('this-is-a-slug')).toBe(true);
		expect(isSlug('this is a slug')).toBe(false);
	});

	test('isURL', () => {
		expect(isURL('https://www.example.com')).toBe(true);
		expect(isURL('htp://example')).toBe(false);
	});

	test('isUUID', () => {
		expect(isUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
		expect(isUUID('123e4567-e89b-12d3-a456-42661417400')).toBe(false);
	});
});
