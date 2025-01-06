export default function formatDuration(time: number, format: string = "hh:mm:ss"): string {
  let totalMilliseconds = 0;

  if (typeof time === "number") {
    totalMilliseconds = time;
  }

  const hours = String(Math.floor(totalMilliseconds / 3_600_000));
	const minutes = String(Math.floor((totalMilliseconds % 3_600_000) / 60_000)).padStart (2, "0");
	const seconds = String(Math.floor((totalMilliseconds % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(totalMilliseconds % 1000).padStart(3, "0");

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds);
}