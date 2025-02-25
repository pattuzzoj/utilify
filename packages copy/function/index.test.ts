import {
  benchmark,
	compose,
	debounce,
	defer,
	fallback,
	guard,
	identity,
	lock,
	memo,
	noop,
	once,
	parallel,
	partialLeft,
	partialRight,
	pipe,
	rate,
	sleep,
	throttle,
} from './src';

jest.resetModules();

describe('Function Utility Functions', () => {
  test('benchmark', async () => {
		const callback = jest.fn();
		const time = await benchmark(callback, 5);
		expect(callback).toHaveBeenCalledTimes(5);
		expect(time).toBeGreaterThanOrEqual(0);
	});
  
	test('compose', () => {
		const add = (x: number) => x + 1;
		const multiply = (x: number) => x * 2;
		const composed = compose(add, multiply);
		expect(composed(2)).toBe(5);
	});

	test('debounce', (done) => {
		const callback = jest.fn();
		const debounced = debounce(callback, 100);
		debounced();
		debounced();
		debounced();
		setTimeout(() => {
			expect(callback).toHaveBeenCalledTimes(1);
			done();
		}, 200);
	});

	test('defer', (done) => {
		const callback = jest.fn();
		defer(callback);
		setTimeout(() => {
			expect(callback).toHaveBeenCalledTimes(1);
			done();
		}, 0);
	});

	test('fallback', () => {
		const fallbackValue = () => 42;
		expect(fallback(() => 8, fallbackValue)).toBe(8);
		expect(
			fallback(() => {
				throw new Error();
			}, fallbackValue)
		).toBe(42);
	});

	test('guard', () => {
		const isNumber = (value: any) => typeof value === 'number';
		const callback = (value: number) => value * 2;
		const fallbackValue = () => 0;
		const guarded = guard(isNumber, callback, fallbackValue);
		expect(guarded(2)).toBe(4);
		expect(guarded('2' as any)).toBe(0);
	});

	test('identity', () => {
		expect(identity(42)).toBe(42);
	});

	test('noop', () => {
		expect(noop()).toBeUndefined();
	});

	test('once', () => {
		const callback = jest.fn();
		const onceCallback = once(callback);
		onceCallback();
		onceCallback();
		expect(callback).toHaveBeenCalledTimes(1);
	});

	test('parallel', async () => {
		const callback1 = jest.fn().mockResolvedValue(1);
		const callback2 = jest.fn().mockResolvedValue(2);
		const results = await parallel(callback1, callback2);
		expect(results).toEqual([1, 2]);
	});

	test('partialLeft', () => {
		const callback = (a: number, b: number) => a + b;
		const partial = partialLeft(callback, 1);
		expect(partial(2)).toBe(3);
	});

	test('partialRight', () => {
		const callback = (a: number, b: number) => a + b;
		const partial = partialRight(callback, 1);
		expect(partial(2)).toBe(3);
	});

	test('pipe', () => {
		const add = (x: number) => x + 1;
		const multiply = (x: number) => x * 2;
		const piped = pipe(add, multiply);
		expect(piped(2)).toBe(6);
	});

	test('rate', () => {
		const callback = jest.fn();
		const rated = rate(callback, 2, 100);
		expect(rated()).toBe(true);
		expect(rated()).toBe(true);
		expect(rated()).toBe(false);
	});

	test('throttle', (done) => {
		const callback = jest.fn();
		const throttled = throttle(callback, 100);
		throttled();
		throttled();
		throttled();
		setTimeout(() => {
			expect(callback).toHaveBeenCalledTimes(1);
			done();
		}, 200);
	});

	test('sleep', () => {
		jest.useFakeTimers();
		const start = Date.now();
		sleep(50);
		jest.runAllTimers();
		const end = Date.now();
		expect(end - start).toBeGreaterThanOrEqual(50);
	});

	test('lock', () => {
		jest.useFakeTimers();
		const fn = jest.fn(sleep);
		const lockedFn = lock(fn);
		lockedFn(200);
		jest.advanceTimersByTime(200);
		expect(fn).toHaveBeenCalledTimes(1);
	});

	describe('memo', () => {
		test('simple memo', () => {
			const fn = jest.fn((x: number) => x * 2);
			const memoizedFn = memo(fn);
			expect(memoizedFn(2)).toBe(4);
			expect(memoizedFn(2)).toBe(4);
			expect(fn).toHaveBeenCalledTimes(1);
		});

		test('memo with timeout', () => {
			jest.useFakeTimers();
			const fn = jest.fn((x: number) => x * 2);
			const memoizedFn = memo(fn, 50);
			expect(memoizedFn(2)).toBe(4);
			jest.runAllTimers();
			expect(memoizedFn(2)).toBe(4);
			expect(fn).toHaveBeenCalledTimes(2);
			jest.clearAllTimers();
		});
	});
});
