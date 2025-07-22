import { test, describe, afterAll, vi } from 'vitest';

vi.mock('@utilify/environment', () => ({
	isServer: vi.fn().mockReturnValue(false),
}));

import {
	base64Decode,
	base64Encode,
	djb2,
	generateNonce,
	generateUUID,
	hexDecode,
	hexEncode,
	isArrayBuffer,
	isBase64,
	isBase64URL,
	isHash,
	isHex,
	isUint8Array,
	isUUID,
	utf8Decode,
	utf8Encode,
} from '../src/crypto';

afterAll(() => {
	vi.clearAllMocks();
});

describe('Crypto', () => {
	describe.concurrent('djb2', () => {
		test.concurrent.for([
			{
				name: 'should hash string correctly',
				input: 'test',
				expected: 2090756197
			},
			{
				name: 'should hash empty string',
				input: '',
				expected: 5381
			}
		])('$name', ({ input, expected }, { expect }) => {
			expect(djb2(input)).toBe(expected);
		});

		test.concurrent('throws type error for non-string input', ({ expect }) => {
			// @ts-expect-error Testing invalid type
			expect(() => djb2(123)).toThrow(TypeError);
		});
	});

	describe.concurrent('generateNonce', () => {
		test.concurrent('should generate nonce of specified length', ({ expect }) => {
			const nonce = generateNonce(16);
			expect(nonce).toBeInstanceOf(Uint8Array);
			expect(nonce.length).toBe(16);
		});

		test.concurrent('should generate different nonces', ({ expect }) => {
			const nonce1 = generateNonce(16);
			const nonce2 = generateNonce(16);
			expect(Buffer.from(nonce1).toString('hex')).not.toBe(Buffer.from(nonce2).toString('hex'));
		});

		test.concurrent('should throw error for non-positive length', ({ expect }) => {
			expect(() => generateNonce(0)).toThrow("Expected positive multiple of 8 for 'length'");
		});
	});

	describe.concurrent('generateUUID', () => {
		test.concurrent('should generate valid UUID', ({ expect }) => {
			const uuid = generateUUID();
			expect(isUUID(uuid)).toBe(true);
		});

		test.concurrent('should generate unique UUIDs', ({ expect }) => {
			const uuid1 = generateUUID();
			const uuid2 = generateUUID();
			expect(uuid1).not.toBe(uuid2);
		});
	});

	describe.concurrent('base64Encode', () => {
		test.concurrent('encodes UTF-8 string correctly', ({ expect }) => {
			const encoded = base64Encode(utf8Encode('Test 💾'));
			expect(encoded).toBe('VGVzdCDwn5K+');
		});
	});

	describe.concurrent('base64Decode', () => {
		test.concurrent('decodes base64 string to original bytes', ({ expect }) => {
			const encoded = base64Encode(utf8Encode('Test 💾'));
			const result = utf8Decode(base64Decode(encoded));
			expect(result).toBe('Test 💾');
		});
	});

	describe.concurrent('hexEncode', () => {
		test.concurrent('encodes Uint8Array to hex string', ({ expect }) => {
			const input = new Uint8Array([0xde, 0xad, 0xbe, 0xef]);
			expect(hexEncode(input)).toBe('deadbeef');
		});
	});

	describe.concurrent('hexDecode', () => {
		test.concurrent('decodes hex string to ArrayBuffer', ({ expect }) => {
			const buffer = hexDecode('deadbeef');
			expect(new Uint8Array(buffer)).toEqual(new Uint8Array([0xde, 0xad, 0xbe, 0xef]));
		});
	});

	describe.concurrent('utf8Encode', () => {
		test.concurrent('encodes string into Uint8Array', ({ expect }) => {
			const encoded = utf8Encode('abc');
			expect(encoded).toBeInstanceOf(Uint8Array);
			expect([...encoded]).toEqual([97, 98, 99]);
		});
	});

	describe.concurrent('utf8Decode', () => {
		test.concurrent('decodes Uint8Array into string', ({ expect }) => {
			const str = utf8Decode(new Uint8Array([97, 98, 99]));
			expect(str).toBe('abc');
		});
	});

	describe.concurrent('isBase64', () => {
		test.concurrent('returns true for valid base64', ({ expect }) => {
			expect(isBase64('U29tZSBkYXRh')).toBe(true);
		});
		test.concurrent('returns false for invalid base64', ({ expect }) => {
			expect(isBase64('$$$invalid%%')).toBe(false);
		});
	});

	describe.concurrent('isBase64URL', () => {
		test.concurrent('returns true for valid base64url', ({ expect }) => {
			expect(isBase64URL('U29tZV9kYXRh-LQ')).toBe(true);
		});
		test.concurrent('returns false for invalid base64url', ({ expect }) => {
			expect(isBase64URL('U29tZV9kYXRh+LQ==')).toBe(false);
		});
	});

	describe.concurrent('isHex', () => {
		test.concurrent('returns true for valid hex string', ({ expect }) => {
			expect(isHex('a1b2c3')).toBe(true);
		});
		test.concurrent('returns false for non-hex string', ({ expect }) => {
			expect(isHex('ghij')).toBe(false);
		});
	});

	describe.concurrent('isHash', () => {
		test.concurrent('returns true for 64-char lowercase hex string', ({ expect }) => {
			expect(isHash('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')).toBe(true);
		});
		test.concurrent('returns false for short string', ({ expect }) => {
			expect(isHash('abc123')).toBe(false);
		});
	});

	describe.concurrent('isUUID', () => {
		test.concurrent('returns true for valid UUID v4', ({ expect }) => {
			expect(isUUID('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
		});
		test.concurrent('returns false for malformed UUID', ({ expect }) => {
			expect(isUUID('not-a-uuid')).toBe(false);
		});
	});

	describe.concurrent('isArrayBuffer', () => {
		test.concurrent('returns true for ArrayBuffer', ({ expect }) => {
			expect(isArrayBuffer(new ArrayBuffer(4))).toBe(true);
		});
		test.concurrent('returns false for other types', ({ expect }) => {
			expect(isArrayBuffer(new Uint8Array(4))).toBe(false);
		});
	});

	describe.concurrent('isUint8Array', () => {
		test.concurrent('returns true for Uint8Array', ({ expect }) => {
			expect(isUint8Array(new Uint8Array([1, 2, 3]))).toBe(true);
		});
		test.concurrent('returns false for non-Uint8Array', ({ expect }) => {
			expect(isUint8Array(new ArrayBuffer(3))).toBe(false);
		});
	});
});
