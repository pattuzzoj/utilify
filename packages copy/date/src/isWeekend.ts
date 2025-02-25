import isValidDate from "./isValidDate";

export default function isWeekend(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
} 