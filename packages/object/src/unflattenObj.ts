export default function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any> {
  let unflatObj = {} as any;
  const regex = new RegExp(`${separator}`);

  for (const key in obj) {
    if (regex.test(key)) {
      const paths = key.split(separator);
      let reference = unflatObj;

      paths.slice(0, -1).forEach((path) => {
        if (!(path in reference)) {
          reference[path] = {};
        }
        
        reference = reference[path];
      });

      reference[paths[paths.length - 1]] = obj[key];
    } else {
      unflatObj[key] = obj[key];
    }
  }

  return unflatObj;
}