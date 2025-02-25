# getInstanceType  
Returns the type name of an object instance. The function checks if the value is a non-null object and then returns the name of the constructor class (in lowercase) of the object. If the value is not a valid object, the function logs an error and returns `undefined`.

## Syntax
```typescript
function getInstanceType(value: object): string | undefined
```

### Parameters

| Parameter | Type      | Description                              |
|-----------|-----------|------------------------------------------|
| `value`   | `object`  | The value to be checked. Must be a non-null object. |

### Return

| Type                   | Description                                      |
|------------------------|--------------------------------------------------|
| `string` | Returns the name of the object's class in lowercase |
| `undefined` | Returns `undefined` if the value is not a valid object |

## Examples

### Example 1: Checking valid objects
```typescript
class MyClass {}
const myObj = new MyClass();
getInstanceType(myObj); // "myclass"
```

### Example 2: Checking invalid values
```typescript
getInstanceType(null); // Logs: "Value must be a non-null object." | undefined
getInstanceType(42); // Logs: "Value must be a non-null object." | undefined
getInstanceType("Hello"); // Logs: "Value must be a non-null object." | undefined
```

## Notes
- The function uses `constructor.name` to get the constructor class name, which is then converted to lowercase. 
- If the value is not a valid object (null or another non-object type), the function logs an error message in the console and returns `undefined`.
- To check if the value is an object, the function uses `typeof value !== "object"` and `value === null`.

## Source Code
::: code-group
```typescript
function getInstanceType(value: object): string | undefined {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}
```

```javascript
function getInstanceType(value) {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}
```
:::

## References
- [MDN: `constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)