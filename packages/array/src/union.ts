import unique from './unique';

export default function union<T>(...arrs: T[][]): T[] {
  return unique(arrs.reduce((unionArr, arr) => {
    unionArr = [...unionArr, ...arr];
    return unionArr;
  }, []));
}