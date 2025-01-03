import {
	hash,
	randomUUID
} from './src';

describe('Crypto Utilities', () => {
	describe('hash function', () => {
		const data = 'Hello, world!';
		const arrayBuffer = new TextEncoder().encode(data);

		test('should return null if Crypto API is not available', async () => {
			const result = await hash(data, 'SHA-256', 'buffer');
			expect(result).not.toBeNull();
		});

		test('should hash data using SHA-256 and return hex output', async () => {
			const result = await hash(data, 'SHA-256', 'hex');
			expect(result).toMatch(/^[a-f0-9]{64}$/);
		});

		test('should hash data using SHA-256 and return base64 output', async () => {
			const result = await hash(data, 'SHA-256', 'base64');
			expect(result).toMatch(/^[A-Za-z0-9+/]+={0,2}$/);
		});

		test('should hash data using SHA-256 and return buffer output', async () => {
			const result = await hash(data, 'SHA-256', 'buffer');
			expect(result).toBeInstanceOf(ArrayBuffer);
		});

		test('should hash ArrayBuffer data using SHA-256 and return hex output', async () => {
			const result = await hash(arrayBuffer as unknown as ArrayBuffer, 'SHA-256', 'hex');
			expect(result).toMatch(/^[a-f0-9]{64}$/);
		});

		test('should hash ArrayBuffer data using SHA-256 and return base64 output', async () => {
			const result = await hash(arrayBuffer as unknown as ArrayBuffer, 'SHA-256', 'base64');
			expect(result).toMatch(/^[A-Za-z0-9+/]+={0,2}$/);
		});

		test('should hash ArrayBuffer data using SHA-256 and return buffer output', async () => {
			const result = await hash(arrayBuffer as unknown as ArrayBuffer, 'SHA-256', 'buffer');
			expect(result).toBeInstanceOf(ArrayBuffer);
		});
	});

	describe('randomUUID function', () => {
		test('should return undefined if Crypto API is not available', () => {
			const result = randomUUID();
			expect(result).toMatch(
				/^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/
			);
		});

		test('should generate a valid UUID', () => {
			const uuid = randomUUID();
			expect(uuid).toMatch(
				/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
			);
		});
	});
});