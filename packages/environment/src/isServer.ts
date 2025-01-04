import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

export default function isServer(): boolean {
  return isNode() || isDeno() || isBun() || typeof window === "undefined";
}