import isValidDate from './isValidDate';

export default function adjustTimezone(date: Date, targetTimezone: number): Date {
  if (!isValidDate(date)) {
    throw new TypeError(`Expected a valid date for 'date'`);
  }

  const localTimezoneOffset = date.getTimezoneOffset();
  const targetTimezoneOffset = targetTimezone * 60;
  const timezoneDifference = targetTimezoneOffset - localTimezoneOffset;

  return new Date(date.getTime() + timezoneDifference * 60 * 1000);
}
