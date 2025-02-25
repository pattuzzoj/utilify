# isDeepEqual
The `isDeepEqual` function performs a deep comparison between two values, checking if they are equal by comparing their properties recursively for objects and arrays, and using strict comparison for primitive values.

## Syntax

```typescript
isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
isDeepEqual(value1: any[], value2: any[]): boolean;
isDeepEqual(value1: any, value2: any): boolean;
```

### Parameters

| Parameter  | Type                           | Description                                                        |
|------------|--------------------------------|--------------------------------------------------------------------|
| `value1`   | `Record<string, any> \| any[]`  | The first value to be compared. Can be an object or an array.     |
| `value2`   | `Record<string, any> \| any[]`  | The second value to be compared. Can be an object or an array.    |

### Return

| Type     | Description                                                        |
|----------|--------------------------------------------------------------------|
| `boolean`| `true` if the values are deeply equal, otherwise `false`.          |

## Examples

### Example 1: Comparing flat objects
```typescript
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { name: 'Alice', age: 30 };

console.log(isDeepEqual(obj1, obj2));  // true
```

### Example 2: Comparing objects with different values
```typescript
const obj1 = { name: 'Alice', age: 30 };
const obj2 = { name: 'Bob', age: 30 };

console.log(isDeepEqual(obj1, obj2));  // false
```

### Example 3: Comparing nested objects
```typescript
const obj1 = { name: 'Alice', address: { city: 'Wonderland', zip: '1234' } };
const obj2 = { name: 'Alice', address: { city: 'Wonderland', zip: '1234' } };

console.log(isDeepEqual(obj1, obj2));  // true
```

### Example 4: Comparing arrays
```typescript
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(isDeepEqual(arr1, arr2));  // true
```

### Example 5: Comparing arrays with nested objects
```typescript
const arr1 = [{ name: 'Alice' }, { age: 30 }];
const arr2 = [{ name: 'Alice' }, { age: 30 }];

console.log(isDeepEqual(arr1, arr2));  // true
```

## Notes
- This function performs a deep comparison, checking all properties recursively for objects and arrays.
- For primitive values, it uses `Object.is` for precise comparison, handling special cases like `NaN` and `-0` vs `+0`.

## Dependencies
- None.

## Code
::: code-group
typescript
```typescript
function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: any[], value2: any[]): boolean;
function isDeepEqual(value1: any, value2: any): boolean {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (typeof value1[key] !== typeof value2[key]) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
```

javascript
```javascript
function isDeepEqual(value1, value2) {
  const keys1 = Object.keys(value1);
  const keys2 = Object.keys(value2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (typeof value1[key] !== typeof value2[key]) return false;

    if (value1[key] !== null && typeof value1[key] === "object") {
      if(!isDeepEqual(value1[key], value2[key])) {
        return false;
      }
    } else if (!Object.is(value1[key], value2[key])) {
      return false;
    }
  }

  return true;
}
```
:::

## References
- [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)