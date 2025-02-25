import isValidDate from "./isValidDate";

type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";

export default function adjustDate(date: Date, amount: number, unit: TimeUnit): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
