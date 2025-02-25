# isObject  
Checks if the provided value is a **plain object** or an **instance of a custom class** (not built-in). The function returns `true` for plain objects, instances of custom classes, or objects created using `new` from user-defined classes (not native JavaScript types like `Object`), but not for types like `Date`, `Map`, `Set`, etc.

## Syntax
```typescript
function isObject(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a plain object or an instance of a custom class, otherwise returns `false`. |

## Examples

### Example 1: Checking plain objects
```typescript
const obj = { key: "value" };
isObject(obj); // true (plain object)

const obj2 = new Object();
isObject(obj2); // true (plain object created with new Object())
```

### Example 2: Checking instances of custom classes
```typescript
class CustomClass {}
const customObj = new CustomClass();
isObject(customObj); // true (instance of a custom class)
```

### Example 3: Checking other types of values
```typescript
isObject([]); // true (arrays are objects in JavaScript)
isObject(function() {}); // true (functions are objects in JavaScript)
isObject(null); // false (null is not considered an object)
isObject(undefined); // false (undefined is not considered an object)
```

### Example 4: Checking objects of built-in classes
```typescript
isObject(new Date()); // false (Date instances are not considered objects from custom classes)
isObject(new Map()); // false (Map instances are not considered objects from custom classes)
isObject(new Set()); // false (Set instances are not considered objects from custom classes)
```

### Example 5: Checking primitive types
```typescript
isObject("Hello"); // false (string is not an object)
isObject(42); // false (number is not an object)
```

## Notes
- The `isObject` function checks if the value is a type of object, including plain objects and instances of custom classes.
- **Plain objects** are those created with the literal notation `{}` or with `new Object()`.
- **Instances of custom classes** are created from user-defined classes like `new CustomClass()`.
- For values like `null`, primitive types (such as `number`, `string`, `boolean`), or instances of built-in types (like `Date`, `Map`, `Set`), the function returns `false`.

## Dependencies
[getType](./getType.md): Used to get the type of the value.

## Source Code
::: code-group

```typescript
import getType from "./getType";

function isObject(value: any): boolean {
  return getType(value) === "object";
}
```

```javascript
import getType from "./getType";

function isObject(value) {
  return getType(value) === "object";
}
```
:::

## References
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)