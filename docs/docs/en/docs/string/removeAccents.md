# removeAccents

The `removeAccents` function removes accents from a given string, returning a version of the string without any diacritical marks.

## Syntax

```typescript
function removeAccents(str: string): string
```

### Parameters

| Name  | Type     | Description                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | The string from which accents will be removed.     |

### Returns

| Type    | Description                                      |
|---------|------------------------------------------------|
| `string` | The string without accents.                    |

## Examples

```typescript
console.log(removeAccents("Título com acentuação!")); // Output: "Titulo com acentuacao!"
console.log(removeAccents("Café com leite"));         // Output: "Cafe com leite"
console.log(removeAccents("Mário e João"));           // Output: "Mario e Joao"
```

## Notes

- The function uses `normalize('NFD')` to decompose characters into their base characters and diacritical marks.
- It then uses `replace(/[\u0300-\u036f]/g, '')` to remove the diacritical marks, leaving only the base characters.

## Source Code

::: code-group
```typescript
function removeAccents(str: string): string {
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```

```javascript
function removeAccents(str) {
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```
::: 

## References

- [String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)