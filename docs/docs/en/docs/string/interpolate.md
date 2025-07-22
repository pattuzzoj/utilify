## interpolate

The `interpolate` function replaces placeholders in a string with values from a data dictionary.

### Syntax

```typescript
interpolate(str: string, data: Record<PropertyKey, any>, pattern?: RegExp): string
```

### Parameters

| Name      | Type                        | Description                                                        |
| :-------- | :-------------------------- | :----------------------------------------------------------------- |
| `str`     | `string`                    | String containing placeholders in the format `{{key}}`.            |
| `data`    | `Record<PropertyKey, any>`  | Data dictionary for interpolation.                                 |
| `pattern` | `RegExp` (optional)         | Custom pattern for placeholders (default: `/{{(.*?)}}/g`).         |

### Return

| Type     | Description                                                      |
| :------- | :--------------------------------------------------------------- |
| `string` | Returns a new string with placeholders replaced by corresponding values from `data`. |

### Example

```typescript
const template = "Hello, {{name}}!";
const data = { name: "Maria" };
interpolate(template, data); // "Hello, Maria!"
```

### Notes

- Placeholders must be in the format `{{key}}` by default.
- If the value does not exist in `data`, the placeholder is kept.

### References
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
