export default function isEqual(value1: any, value2: any): boolean {
	return Object.is(value1, value2);
}