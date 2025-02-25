# unflattenObj
The `unflattenObj` function converts a flat object with dotted keys into a nested object based on the separator.

## Syntax

```typescript
unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | The flat object with dotted keys to be converted into a nested structure. |
| `separator` | `string`                     | The separator used to split the keys into nested paths (default is `.`). |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | The nested object created from the flat object.              |

## Examples

### Example 1: Basic Unflattening
```typescript
const obj = { "user.name": "Alice", "user.age": 30 };
const result = unflattenObj(obj);

console.log(result);
// { user: { name: "Alice", age: 30 } }
```

### Example 2: Custom Separator
```typescript
const obj = { "user|name": "Alice", "user|age": 30 };
const result = unflattenObj(obj, "|");

console.log(result);
// { user: { name: "Alice", age: 30 } }
```

### Example 3: Unflattening an Already Nested Object
```typescript
const obj = { "user.name": "Alice", "address.city": "Wonderland", "address.zip": 12345 };
const result = unflattenObj(obj);

console.log(result);
// { user: { name: "Alice" }, address: { city: "Wonderland", zip: 12345 } }
```

## Notes
- The function uses a regular expression to check for keys that contain the separator and splits them into multiple levels in a nested object.
- If a key doesn't contain the separator, it remains as it is in the resulting object.

## Dependencies
No external dependencies.

## Code Source
::: code-group

```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any> {
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
```

```javascript
function unflattenObj(obj, separator = ".") {
  let unflatObj = {};
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
```
:::

## References
No external references.