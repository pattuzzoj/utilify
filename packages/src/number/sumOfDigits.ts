export default function sumOfDigits(value: number): number {
	if (typeof value !== 'number') {
		throw new TypeError(`Expected a number for 'value'`);
	}

	return value
		.toString()
		.split('')
		.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}