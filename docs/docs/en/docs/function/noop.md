# noop

The `noop` (No Operation) function is a placeholder function that does nothing when called. It is often used as a default function or as a stub in situations where a function is required, but no action is needed.

## Syntax

```typescript
function noop(): void;
```

### Parameters

- None

### Return

| Type   | Description              |
|--------|--------------------------|
| `void` | This function does not return anything. |

## Examples

### Example 1: Using `noop` as a default function

```typescript
const callback = noop;
callback(); // Does nothing
```

### Example 2: Passing `noop` in event listeners where no action is required

```typescript
const button = document.getElementById("button");
button.addEventListener("click", noop); // No action will be taken when the button is clicked
```

## Notes

- `noop` is useful in situations where a function is required syntactically, but no actual functionality needs to be implemented.
- It's typically used to improve performance by avoiding unnecessary function definitions or to provide a fallback for optional callback parameters.

## Source Code

::: code-group
```typescript
function noop(): void {}
```

```javascript
function noop() {}
```
:::

## References

- [Function.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)