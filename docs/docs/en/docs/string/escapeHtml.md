## escapeHtml

The `escapeHtml` function escapes special HTML characters in a string to their corresponding HTML entities.

### Syntax
```typescript
escapeHtml(str: string): string
```

### Parameters
| Name   | Type     | Description                     |
|--------|----------|---------------------------------|
| `str`  | `string` | The input string to be escaped. |

### Returns
| Type     | Description                                 |
|----------|---------------------------------------------|
| `string` | The escaped string with HTML entities.       |

### Example
```typescript
escapeHtml('<div class="test">"Hello" & \'World\'</div>');
// Output: '&lt;div class=&quot;test&quot;&gt;&quot;Hello&quot; &amp; &#39;World&#39;&lt;/div&gt;'
```

### Notes
- Escapes the following characters: `&`, `<`, `>`, `"`, and `'`.
- Throws `TypeError` if the input is not a string.

### References
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)