type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "years";

/**
 * Converts a time value from one unit to another.
 * @param {number} time - The time value.
 * @param {TimeUnit} from - The unit to convert from.
 * @param {TimeUnit} to - The unit to convert to.
 * @returns {number} The converted time value.
 * @throws {TypeError} If arguments are invalid.
 */
export default function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number {
  if (typeof time !== 'number') {
    throw new TypeError(`Expected a number for 'time'`);
  }
  
  if (typeof from !== 'string') {
    throw new TypeError(`Expected a string for 'from'`);
  }

  if (typeof to !== 'string') {
    throw new TypeError(`Expected a string for 'to'`);
  }
  
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000,
    years: 365 * 24 * 60 * 60 * 1000,
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}