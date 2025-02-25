# clone
The `clone` function creates a shallow copy of an object or array. It returns a new instance with the same values as the original.

## Syntax

```typescript
clone<T extends Record<string, any>>(value: T): T;
clone<T extends any[]>(value: T): T;
clone<T>(value: T): T;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|---------------------------------------------------------------|
| `value`   | `T extends Record<string, any>` | An object to be cloned.                                       |
| `value`   | `T extends any[]`              | An array to be cloned.                                        |
| `value`   | `T`                            | Any type to be cloned (object or array).                      |

### Return

| Type       | Description                                                   |
|------------|-------------------------------------------------------------|
| `T`        | A shallow copy of the provided value. The copy will have the same type as the original value. |

## Examples

### Example 1: Cloning an Object
```typescript
const user = { id: 1, name: "Alice" };
const clonedUser = clone(user);
console.log(clonedUser); // { id: 1, name: "Alice" }
```

### Example 2: Cloning an Array
```typescript
const numbers = [1, 2, 3];
const clonedNumbers = clone(numbers);
console.log(clonedNumbers); // [1, 2, 3]
```

### Example 3: Modifying the Clone
```typescript
const person = { name: "Bob", age: 30 };
const clonedPerson = clone(person);
clonedPerson.age = 31;

console.log(person.age); // 30
console.log(clonedPerson.age); // 31
```

## Notes
- This function creates a shallow copy, which means nested objects or arrays are still referenced.
- To create a deep copy, a different approach is needed, such as recursion or specialized methods like `JSON.parse(JSON.stringify(value))`.

## Dependencies
None.

## Source Code
::: code-group

```typescript
function clone<T extends Record<string, any>>(value: T): T;
function clone<T extends any[]>(value: T): T;
function clone<T>(value: T): T {
	const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
```

```javascript
function clone(value) {
	const clonedValue = Array.isArray(value) ? [] : {};

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
```
:::

## References
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)