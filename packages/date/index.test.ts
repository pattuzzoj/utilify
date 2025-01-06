import {
	adjustDate,
	adjustTimezone,
	convertTimeUnit,
	convertDateTo,
	formatDate,
	formatDuration,
	formatTime,
	isLeapYear,
	isValidDate,
	isValidDateString,
	isWeekday,
	isWeekend,
	parseDate,
} from './src';

describe('Date Utility Functions', () => {
	beforeAll(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {});
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	test('adjustDate', () => {
		const date = new Date('2023-01-01T00:00:00.000Z');
		expect(adjustDate(date, 500, 'milliseconds').toISOString()).toBe(
			'2023-01-01T00:00:00.500Z'
		);
		expect(adjustDate(date, 30, 'seconds').toISOString()).toBe(
			'2023-01-01T00:00:30.000Z'
		);
		expect(adjustDate(date, 45, 'minutes').toISOString()).toBe(
			'2023-01-01T00:45:00.000Z'
		);
		expect(adjustDate(date, 5, 'hours').toISOString()).toBe(
			'2023-01-01T05:00:00.000Z'
		);
		expect(adjustDate(date, 10, 'days').toISOString()).toBe(
			'2023-01-11T00:00:00.000Z'
		);
		expect(adjustDate(date, 2, 'months').toISOString()).toBe(
			'2023-03-01T00:00:00.000Z'
		);
		expect(adjustDate(date, 1, 'years').toISOString()).toBe(
			'2024-01-01T00:00:00.000Z'
		);
		expect(adjustDate(date, -1, 'years').toISOString()).toBe(
			'2022-01-01T00:00:00.000Z'
		);
	});

	test('adjustTimezone', () => {
		const date = new Date('2023-01-01T00:00:00Z');
		expect(adjustTimezone(date, 120).toISOString()).toBe(
			'2023-01-01T02:00:00.000Z'
		);
	});

	test('convertTimeUnit', () => {
		expect(convertTimeUnit(1, 'days', 'hours')).toBe(24);
		expect(convertTimeUnit(1, 'hours', 'minutes')).toBe(60);
	});

	test('convertDate', () => {
		const date = new Date('2023-01-01T00:00:00Z');
		expect(convertDateTo(date, 'utc')).toBe('Sun, 01 Jan 2023 00:00:00 GMT');
		expect(convertDateTo(date, 'iso')).toBe('2023-01-01T00:00:00.000Z');
	});

	test('formatDate', () => {
		const date = new Date("01-01-2023");
		expect(formatDate(date, 'DMY')).toBe('01/01/2023');
		expect(formatDate(date, 'MDY')).toBe('01/01/2023');
		expect(formatDate(date, 'YMD')).toBe('2023/01/01');
	});

	test('formatDuration', () => {
		expect(formatDuration(3661000)).toBe('1:01:01');
		expect(formatDuration(3661000, "hh:mm:ss.ms")).toBe('1:01:01.000');
		expect(formatDuration(3661000, "mm:ss")).toBe('01:01');
		expect(formatDuration(0)).toBe('0:00:00');
		expect(formatDuration(36000000)).toBe('10:00:00');
	});

	test('formatTime', () => {
		const date = new Date('2023-01-01T01:01:01Z');
		expect(formatTime(date, "hh:mm:ss")).toBe('1:01:01');
		expect(formatTime(date, "hh:mm:ss.ms")).toBe('1:01:01.000');
		expect(formatTime(date, "hh:mm:ss a")).toBe('1:01:01 AM');
	});

	test('isLeapYear', () => {
		expect(isLeapYear(2020)).toBe(true);
		expect(isLeapYear(2021)).toBe(false);
	});

	test('isValidDate', () => {
		expect(isValidDate(new Date('01-01-2023'))).toBe(true);
		expect(isValidDate(new Date('invalid date'))).toBe(false);
	});

	test('isValidDateString', () => {
		expect(isValidDateString('01-01-2023')).toBe(true);
		expect(isValidDateString('invalid date')).toBe(false);
	});

	test('isWeekday', () => {
		expect(isWeekday(new Date('01-01-2023'))).toBe(false);
		expect(isWeekday(new Date('01-03-2023'))).toBe(true);
	});

	test('isWeekend', () => {
		expect(isWeekend(new Date('01-01-2023'))).toBe(true);
		expect(isWeekend(new Date('01-03-2023'))).toBe(false);
	});

	test('parseDate', () => {
		expect(parseDate('2023-01-01')?.toISOString()).toBe(
			'2023-01-01T00:00:00.000Z'
		);
		expect(parseDate('invalid date')).toBeUndefined();
	});
});
