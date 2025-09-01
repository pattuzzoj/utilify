/**
 * Returns the sum of the digits of a number.
 * @param {number} value - The number to sum digits of.
 * @returns {number} The sum of digits.
 * @throws {TypeError} If value is not a number.
 */
export default function sumOfDigits(value: number): number {
	if (typeof value !== 'number') {
		throw new TypeError(`Expected a number for 'value'`);
	}

	return value
		.toString()
		.split('')
		.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}