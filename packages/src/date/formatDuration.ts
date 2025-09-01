/**
 * Formats a duration in milliseconds as a time string.
 * @param {number} ms - The duration in milliseconds.
 * @param {string} [format="hh:mm:ss"] - The format string.
 * @param {boolean} [autoHour=true] - Whether to omit hours if zero.
 * @returns {string} The formatted duration string.
 * @throws {TypeError} If ms or format is invalid.
 */
export default function formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string {
  if (typeof ms !== 'number') {
    throw new TypeError(`Expected a number for 'ms'`);
  }
  
  if (typeof format !== 'string') {
    throw new TypeError(`Expected a string for 'format'`);
  }

  const hours = String(Math.floor(ms / 3_600_000));
	const minutes = String(Math.floor((ms % 3_600_000) / 60_000)).padStart (2, "0");
	const seconds = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0");

  let formatedDuration = format.toLowerCase();

  if(autoHour && hours === "0") {
    formatedDuration = formatedDuration.slice(formatedDuration.indexOf("mm"));
  }

  return formatedDuration
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds);
}