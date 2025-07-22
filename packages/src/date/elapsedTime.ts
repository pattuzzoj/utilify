import isValidDate from './isValidDate';

type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "years";

export default function elapsedTime(from: Date, to: Date = new Date(), unit?: TimeUnit): number {
  if (!isValidDate(from)) {
    throw new TypeError(`Expected a valid Date for 'from'`);
  }

  if (!isValidDate(to)) {
    throw new TypeError(`Expected a valid Date for 'to'`);
  }

  const diffMs = Math.abs(to.getTime() - from.getTime());

  switch (unit) {
    case 'years':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    case 'days':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    case 'hours':
      return Math.floor(diffMs / (1000 * 60 * 60));
    case 'minutes':
      return Math.floor(diffMs / (1000 * 60));
    case 'seconds':
      return Math.floor(diffMs / 1000);
    case 'milliseconds':
      return diffMs;
    default:
      throw new TypeError(`Invalid time unit: ${unit}`);
  }
}