# deepClone
The `deepClone` function creates a deep copy of an object or array, recursively cloning all nested objects and arrays.

## Syntax

```typescript
deepClone<T extends Record<string, any>>(value: T): T;
deepClone<T extends any[]>(value: T): T;
deepClone<T>(value: T): T;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|---------------------------------------------------------------|
| `value`   | `T extends Record<string, any>` | An object to be deeply cloned.                                |
| `value`   | `T extends any[]`              | An array to be deeply cloned.                                 |
| `value`   | `T`                            | Any type to be deeply cloned (object or array).               |

### Return

| Type       | Description                                                   |
|------------|---------------------------------------------------------------|
| `T`        | A deep copy of the provided value. The copy will have the same type as the original value. |

## Examples

### Example 1: Deep Cloning an Object
```typescript
const user = { id: 1, name: "Alice", address: { city: "Wonderland" } };
const clonedUser = deepClone(user);
clonedUser.address.city = "New Wonderland";

console.log(user.address.city); // "Wonderland"
console.log(clonedUser.address.city); // "New Wonderland"
```

### Example 2: Deep Cloning an Array
```typescript
const numbers = [1, [2, 3]];
const clonedNumbers = deepClone(numbers);
clonedNumbers[1][0] = 4;

console.log(numbers[1][0]); // 2
console.log(clonedNumbers[1][0]); // 4
```

### Example 3: Modifying the Clone
```typescript
const person = { name: "Bob", age: 30, address: { city: "Paris" } };
const clonedPerson = deepClone(person);
clonedPerson.address.city = "London";

console.log(person.address.city); // "Paris"
console.log(clonedPerson.address.city); // "London"
```

## Notes
- This function performs a deep clone, meaning it recursively copies nested objects and arrays.
- It uses `isPlainObject` from `@utilify/types` to check if a value is a plain object, ensuring that only plain objects and arrays are deeply cloned.

## Dependencies
- [`@utilify/types`](./types.md): Provides the `isPlainObject` function to check if a value is a plain object.

## Source Code
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepClone<T extends Record<string, any>>(value: T): T;
function deepClone<T extends any[]>(value: T): T;
function deepClone<T>(value: T): T {
  const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

  for (const key in value) {
    if (Array.isArray(value[key]) || isPlainObject(value[key])) {
      clonedValue[key] = deepClone(value[key] as any);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}
```

```javascript
function deepClone(value) {
  const clonedValue = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (Array.isArray(value[key]) || isPlainObject(value[key])) {
      clonedValue[key] = deepClone(value[key]);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}
```
:::

## References
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`isPlainObject`](./types.md)