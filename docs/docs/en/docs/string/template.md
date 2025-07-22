# template

Creates a template function that replaces placeholders in a string with values from a data object, supporting custom patterns and escaping.

## Syntax
```typescript
template(str: string, options?: TemplateOptions): (data: Record<string, any>) => string
```

### TemplateOptions
| Property  | Type                                   | Description                                                                 |
|-----------|----------------------------------------|-----------------------------------------------------------------------------|
| `pattern` | `RegExp` (optional)                    | Custom pattern for placeholders (default: `/{{(.*?)}}/g`).                  |
| `escape`  | `(value: string, key: string) => string` (optional) | Function to escape values before interpolation.                             |

## Parameters
| Parameter | Type                  | Description                                 |
|-----------|-----------------------|---------------------------------------------|
| `str`     | `string`              | The string with placeholders in the format `{{key}}`. |
| `options` | `TemplateOptions` (optional) | Options for custom pattern and escaping.    |

## Returns
| Type      | Description                                 |
|-----------|---------------------------------------------|
| `(data: Record<string, any>) => string` | A function that takes a data object and returns the interpolated string. |

## Example
```typescript
const fn = template("Hello, {{name}}!", { escape: (v) => v.toUpperCase() });
fn({ name: "Maria" }); // "Hello, MARIA!"
```

## Notes
- Throws `TypeError` if `str` is not a string, `pattern` is not a RegExp, or `escape` is not a function.
- Placeholders without a corresponding value remain unchanged.

## References
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)