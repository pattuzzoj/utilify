# toKebabCase

A função `toKebabCase` converte uma string para o formato kebab-case, onde os espaços são substituídos por hífens e todas as letras são transformadas em minúsculas.

## Sintaxe

```typescript
function toKebabCase(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser convertida para o formato kebab-case. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string convertida para o formato kebab-case.  |

## Exemplos

```typescript
console.log(toKebabCase("Hello World"));         // Saída: "hello-world"
console.log(toKebabCase("JavaScript is fun"));   // Saída: "javascript-is-fun"
console.log(toKebabCase("Singleword"));          // Saída: "singleword"
console.log(toKebabCase("  Extra spaces here ")); // Saída: "extra-spaces-here"
```

## Notas

- A função utiliza `trim()` para remover quaisquer espaços do início e final da string.
- Em seguida, transforma toda a string para minúsculas com `toLowerCase()`.
- Por fim, substitui todos os espaços por hífens usando `replace(/\s+/g, "-")`.

## Código Fonte

::: code-group
```typescript
function toKebabCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}
```

```javascript
function toKebabCase(str) {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "-");
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)