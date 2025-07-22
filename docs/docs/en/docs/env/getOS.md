# getOS

The `getOS` function returns the detected operating system in the browser environment.

## Syntax

```typescript
getOS(): string | undefined;
```

### Parameters

This function does not take any parameters.

### Returns

| Type                     | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `string` \| `undefined`  | The name of the detected operating system or `undefined` if it cannot be determined |

## Examples

```typescript
getOS();
// => "Windows", "macOS", "Linux", "Android", "iOS", "Unknown" or undefined
```

## Notes

* Uses the `navigator` object to identify the operating system.
* Returns `undefined` if not in a browser environment.
* May return "Unknown" if the system is not recognized.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Navigator
