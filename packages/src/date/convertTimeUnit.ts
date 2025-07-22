type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "years";

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