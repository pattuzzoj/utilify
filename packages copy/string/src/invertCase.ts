import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

export default function invertCase(str: string): string {
  return str.split("").map((str) => {
    if(isLowerCase(str)) {
      return str.toUpperCase();
    } else if(isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}