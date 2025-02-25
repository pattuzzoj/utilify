export default function random(min: number = 0, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
