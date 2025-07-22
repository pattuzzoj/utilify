import isBrowser from "./isBrowser";
import isBun from "./isBun";
import isDeno from "./isDeno";
import isNode from "./isNode";

export default function getRuntime(): 'Browser' | 'Node' | 'Deno' | 'Bun' | 'Unknown' {
  if (isBrowser()) return 'Browser';
  else if (isDeno()) return 'Deno';
  else if (isBun()) return 'Bun';
  else if (isNode()) return 'Node';
  else return 'Unknown';
}