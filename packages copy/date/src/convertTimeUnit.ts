type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days";

export default function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number {
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}