export default function sumOfDigits(num: number): number {
	return num
		.toString()
		.split('')
		.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}