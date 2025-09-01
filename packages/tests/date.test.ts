import { test, describe, afterEach, vi, beforeEach } from 'vitest';
import {
	adjustDate,
	adjustTimezone,
	convertDateTo,
	convertTimeUnit,
	elapsedTime,
	formatDate,
	formatDuration,
	formatTime,
	isBetween,
	isLeapYear,
	isSameDay,
	isToday,
	isTomorrow,
	isValidDate,
	isValidDateString,
	isWeekday,
	isWeekend,
	isYesterday,
	parseDate,
	stripTime,
	toDate
} from '../src/date';

describe('Date', () => {
	beforeEach(() => {
		vi.spyOn(console, 'error').mockImplementation(() => { });
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2023-01-01T00:00:00.000Z'));
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	describe.concurrent('adjustDate', () => {
		test.concurrent.for([
			{
				name: 'adjusts milliseconds',
				adjustment: { milliseconds: 500 },
				expected: '2023-01-01T00:00:00.500Z'
			},
			{
				name: 'adjusts seconds',
				adjustment: { seconds: 30 },
				expected: '2023-01-01T00:00:30.000Z'
			},
			{
				name: 'adjusts minutes',
				adjustment: { minutes: 45 },
				expected: '2023-01-01T00:45:00.000Z'
			},
			{
				name: 'adjusts hours',
				adjustment: { hours: 1 },
				expected: '2023-01-01T01:00:00.000Z'
			},
			{
				name: 'adjusts days',
				adjustment: { days: 10 },
				expected: '2023-01-11T00:00:00.000Z'
			},
			{
				name: 'adjusts months',
				adjustment: { months: 2 },
				expected: '2023-03-01T00:00:00.000Z'
			},
			{
				name: 'adjusts years',
				adjustment: { years: 1 },
				expected: '2024-01-01T00:00:00.000Z'
			},
			{
				name: 'adjusts negative years',
				adjustment: { years: -1 },
				expected: '2022-01-01T00:00:00.000Z'
			},
			{
				name: 'adjusts multiple units',
				adjustment: { years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6, milliseconds: 7 },
				expected: '2024-03-04T04:05:06.007Z'
			},
			{
				name: 'adjusts multiple negative units',
				adjustment: { years: -1, months: -2, days: -3 },
				expected: '2021-10-29T00:00:00.000Z'
			},
			{
				name: 'adjusts mixed positive and negative units',
				adjustment: { years: 1, months: -2, days: 3, hours: -4 },
				expected: '2023-11-03T20:00:00.000Z'
			}
		])("$name", async ({ adjustment, expected }, { expect }) => {
			const date = new Date('2023-01-01T00:00:00.000Z');
			expect(adjustDate(date, adjustment).toISOString()).toBe(expected);
		});
	});

	describe.concurrent('adjustTimezone', () => {
		test.concurrent.for([
			{
				name: 'adjusts timezone to +2UTC',
				timezone: +2,
				expected: '2023-01-01T02:00:00.000Z'
			},
			{
				name: 'adjusts timezone to -3UTC',
				timezone: -3,
				expected: '2022-12-31T21:00:00.000Z'
			}
		])('$name', ({ timezone, expected }, { expect }) => {
			const date = new Date('2023-01-01T00:00:00.000Z');
			expect(adjustTimezone(date, timezone).toISOString()).toBe(expected);
		});
	});

	describe.concurrent('convertTimeUnit', () => {
		test.concurrent.for([
			{
				name: 'converts 1 day to hours',
				value: 1,
				fromUnit: 'days' as const,
				toUnit: 'hours' as const,
				expected: 24
			},
			{
				name: 'converts 1 hour to minutes',
				value: 1,
				fromUnit: 'hours' as const,
				toUnit: 'minutes' as const,
				expected: 60
			},
			{
				name: 'converts 1 minute to seconds',
				value: 1,
				fromUnit: 'minutes' as const,
				toUnit: 'seconds' as const,
				expected: 60
			},
			{
				name: 'converts 1 second to milliseconds',
				value: 1,
				fromUnit: 'seconds' as const,
				toUnit: 'milliseconds' as const,
				expected: 1000
			},
			{
				name: 'converts 1 year to days',
				value: 1,
				fromUnit: 'years' as const,
				toUnit: 'days' as const,
				expected: 365
			},
			{
				name: 'converts 48 hours to days',
				value: 48,
				fromUnit: 'hours' as const,
				toUnit: 'days' as const,
				expected: 2
			},
			{
				name: 'converts 1440 minutes to days',
				value: 1440,
				fromUnit: 'minutes' as const,
				toUnit: 'days' as const,
				expected: 1
			},
			{
				name: 'converts 86400 seconds to days',
				value: 86400,
				fromUnit: 'seconds' as const,
				toUnit: 'days' as const,
				expected: 1
			},
			{
				name: 'converts 86400000 milliseconds to days',
				value: 86400000,
				fromUnit: 'milliseconds' as const,
				toUnit: 'days' as const,
				expected: 1
			}
		])('$name', ({ value, fromUnit, toUnit, expected }, { expect }) => {
			expect(convertTimeUnit(value, fromUnit, toUnit)).toBe(expected);
		});
	});

	describe.concurrent('convertDateTo', () => {
		test.concurrent.for([
			{
				name: 'converts to UTC',
				date: new Date('2023-01-01T00:00:00Z'),
				format: 'utc' as const,
				expected: 'Sun, 01 Jan 2023 00:00:00 GMT'
			},
			{
				name: 'converts to ISO',
				date: new Date('2023-01-01T00:00:00Z'),
				format: 'iso' as const,
				expected: '2023-01-01T00:00:00.000Z'
			},
			{
				name: 'converts to timestamp',
				date: new Date('2023-01-01T00:00:00Z'),
				format: 'timestamp' as const,
				expected: 1672531200000
			}
		])('$name', ({ date, format, expected }, { expect }) => {
			expect(convertDateTo(date, format)).toBe(expected);
		});
	});

	describe.concurrent('formatDate', () => {
		test.concurrent.for([
			{
				name: 'formats DMY',
				date: new Date("01-01-2023"),
				format: 'DMY' as const,
				expected: '01/01/2023'
			},
			{
				name: 'formats MDY',
				date: new Date("01-01-2023"),
				format: 'MDY' as const,
				expected: '01/01/2023'
			},
			{
				name: 'formats YMD',
				date: new Date("01-01-2023"),
				format: 'YMD' as const,
				expected: '2023/01/01'
			}
		])('$name', ({ date, format, expected }, { expect }) => {
			expect(formatDate(date, format)).toBe(expected);
		});
	});

	describe.concurrent('formatDuration', () => {
		test.concurrent.for([
			{
				name: 'formats 3661000ms to 1:01:01',
				duration: 3661000,
				format: undefined,
				showMs: undefined,
				expected: '1:01:01'
			},
			{
				name: 'formats 3661000ms to 1:01:01.000',
				duration: 3661000,
				format: "hh:mm:ss.ms" as const,
				showMs: undefined,
				expected: '1:01:01.000'
			},
			{
				name: 'formats 3661000ms to 01:01',
				duration: 3661000,
				format: "mm:ss" as const,
				showMs: undefined,
				expected: '01:01'
			},
			{
				name: 'formats 0ms to 0:00:00 without ms',
				duration: 0,
				format: "hh:mm:ss" as const,
				showMs: false,
				expected: '0:00:00'
			},
			{
				name: 'formats 3600000ms to 1:00:00 without ms',
				duration: 3600000,
				format: "hh:mm:ss" as const,
				showMs: false,
				expected: '1:00:00'
			},
			{
				name: 'formats 3500000ms to 58:20',
				duration: 3500000,
				format: "hh:mm:ss" as const,
				showMs: undefined,
				expected: '58:20'
			}
		])('$name', ({ duration, format, showMs, expected }, { expect }) => {
			expect(formatDuration(duration, format, showMs)).toBe(expected);
		});
	});

	describe.concurrent('elapsedTime', () => {
		test.concurrent.for([
			{
				name: 'calculates elapsed time in days',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-03T00:00:00.000Z'),
				unit: 'days',
				expected: 2
			},
			{
				name: 'calculates elapsed time in hours',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-01T02:00:00.000Z'),
				unit: 'hours',
				expected: 2
			},
			{
				name: 'calculates elapsed time in minutes',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-01T00:02:00.000Z'),
				unit: 'minutes',
				expected: 2
			},
			{
				name: 'calculates elapsed time in seconds',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-01T00:00:02.000Z'),
				unit: 'seconds',
				expected: 2
			},
			{
				name: 'calculates elapsed time in milliseconds',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-01T00:00:00.002Z'),
				unit: 'milliseconds',
				expected: 2
			},
			{
				name: 'calculates elapsed time in years',
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2025-01-01T00:00:00.000Z'),
				unit: 'years',
				expected: 2
			}
		])('$name', ({ start, end, unit, expected }, { expect }) => {
			expect(elapsedTime(start, end, unit as any)).toBe(expected);
		});
	});

	describe.concurrent('formatTime', () => {
		test.concurrent.for([
			{
				name: 'formats hh:mm:ss',
				date: new Date('2023-01-01 01:01:01'),
				format: "hh:mm:ss" as const,
				expected: '1:01:01'
			},
			{
				name: 'formats hh:mm:ss.ms',
				date: new Date('2023-01-01 01:01:01'),
				format: "hh:mm:ss.ms" as const,
				expected: '1:01:01.000'
			},
			{
				name: 'formats hh:mm:ss a',
				date: new Date('2023-01-01 01:01:01'),
				format: "hh:mm:ss a" as const,
				expected: '1:01:01 AM'
			}
		])('$name', ({ date, format, expected }, { expect }) => {
			expect(formatTime(date, format)).toBe(expected);
		});
	});

	describe.concurrent('isBetween', () => {
		test.concurrent.for([
			{
				name: 'is between two dates (inclusive)',
				date: new Date('2023-01-02T00:00:00.000Z'),
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-03T00:00:00.000Z'),
				inclusive: true,
				expected: true
			},
			{
				name: 'is not between two dates (exclusive)',
				date: new Date('2023-01-01T00:00:00.000Z'),
				start: new Date('2023-01-01T00:00:00.000Z'),
				end: new Date('2023-01-03T00:00:00.000Z'),
				inclusive: false,
				expected: false
			}
		])('$name', ({ date, start, end, inclusive, expected }, { expect }) => {
			expect(isBetween(date, start, end, inclusive)).toBe(expected);
		});
	});

	describe.concurrent('isLeapYear', () => {
		test.concurrent.for([
			{
				name: 'is a leap year',
				year: '2020',

				expected: true
			},
			{
				name: 'is not a leap year',
				year: '2021',
				expected: false
			}
		])('$name', ({ year, expected }, { expect }) => {
			expect(isLeapYear(year)).toBe(expected);
		});
	});

	describe.concurrent('isSameDay', () => {
		test.concurrent.for([
			{
				name: 'is the same day',
				date1: new Date('2023-01-01T10:00:00.000Z'),
				date2: new Date('2023-01-01T14:00:00.000Z'),
				expected: true
			},
			{
				name: 'is not the same day',
				date1: new Date('2023-01-01T10:00:00.000Z'),
				date2: new Date('2023-01-02T10:00:00.000Z'),
				expected: false
			}
		])('$name', ({ date1, date2, expected }, { expect }) => {
			expect(isSameDay(date1, date2)).toBe(expected);
		});
	});

	describe.concurrent('isValidDate', () => {
		test.concurrent.for([
			{
				name: 'is a valid date',
				date: new Date('01-01-2023'),
				expected: true
			},
			{
				name: 'is an invalid date',
				date: new Date('invalid date'),
				expected: false
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isValidDate(date)).toBe(expected);
		});
	});

	describe.concurrent('isToday', () => {
		test.concurrent.for([
			{
				name: 'is today',
				date: new Date('2023-01-01T00:00:00.000Z'),
				expected: true
			},
			{
				name: 'is not today',
				date: new Date('2023-01-02T00:00:00.000Z'),
				expected: false
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isToday(date)).toBe(expected);
		});
	});

	describe.concurrent('isValidDateString', () => {
		test.concurrent.for([
			{
				name: 'is a valid date string',
				dateString: '01-01-2023',
				expected: true
			},
			{
				name: 'is an invalid date string',
				dateString: 'invalid date',
				expected: false
			}
		])('$name', ({ dateString, expected }, { expect }) => {
			expect(isValidDateString(dateString)).toBe(expected);
		});
	});

	describe.concurrent('isTomorrow', () => {
		test.concurrent.for([
			{
				name: 'is tomorrow',
				date: new Date('2023-01-02T00:00:00.000Z'),
				expected: true
			},
			{
				name: 'is not tomorrow',
				date: new Date('2023-01-01T00:00:00.000Z'),
				expected: false
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isTomorrow(date)).toBe(expected);
		});
	});

	describe.concurrent('isWeekday', () => {
		test.concurrent.for([
			{
				name: 'is a weekend (Sunday)',
				date: new Date('01-01-2023'),
				expected: false
			},
			{
				name: 'is a weekday (Tuesday)',
				date: new Date('01-03-2023'),
				expected: true
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isWeekday(date)).toBe(expected);
		});
	});

	describe.concurrent('isYesterday', () => {
		test.concurrent.for([
			{
				name: 'is yesterday',
				date: new Date('2022-12-31T00:00:00.000Z'),
				expected: true
			},
			{
				name: 'is not yesterday',
				date: new Date('2023-01-01T00:00:00.000Z'),
				expected: false
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isYesterday(date)).toBe(expected);
		});
	});

	describe.concurrent('isWeekend', () => {
		test.concurrent.for([
			{
				name: 'is a weekend (Sunday)',
				date: new Date('01-01-2023'),
				expected: true
			},
			{
				name: 'is a weekday (Tuesday)',
				date: new Date('01-03-2023'),
				expected: false
			}
		])('$name', ({ date, expected }, { expect }) => {
			expect(isWeekend(date)).toBe(expected);
		});
	});

	describe.concurrent('stripTime', () => {
		test.concurrent.for([
			{
				name: 'strips time from date',
				expected: '2023-01-01T00:00:00.000Z'
			}
		])('$name', ({ expected }, { expect }) => {
			const date = new Date('2023-01-01T05:00:00.000Z');
			expect(stripTime(date).toISOString()).toBe(expected);
		});
	});

	describe.concurrent('toDate', () => {
		test.concurrent.for([
			{
				name: 'converts string to date',
				value: '2023-01-01',
				expected: new Date('2023-01-01T00:00:00.000Z')
			},
			{
				name: 'converts number to date',
				value: 1672531200000,
				expected: new Date('2023-01-01T00:00:00.000Z')
			},
			{
				name: 'returns Date object as is',
				value: new Date('2023-01-01T00:00:00.000Z'),
				expected: new Date('2023-01-01T00:00:00.000Z')
			}
		])('$name', ({ value, expected }, { expect }) => {
			expect(toDate(value as any)).toEqual(expected);
		});

		test('returns null for invalid date string', ({ expect }) => {
			expect(toDate('invalid date')).toBeInstanceOf(Date);
		});
	});

	describe.concurrent('parseDate', () => {
		test.concurrent.for([
			{
				name: 'parses valid date string',
				dateString: '2023-01-01',
				expected: '2023-01-01T00:00:00.000Z'
			}
		])('$name', ({ dateString, expected }, { expect }) => {
			expect(parseDate(dateString)?.toISOString()).toBe(expected);
		});

		test('throws TypeError for invalid date string', ({ expect }) => {
			expect(() => parseDate('invalid date')).toThrow(TypeError);
		});
	});
});
