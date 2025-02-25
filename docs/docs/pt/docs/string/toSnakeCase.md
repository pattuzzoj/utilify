# toSnakeCase

A função `toSnakeCase` converte uma string para o formato snake_case, onde os espaços são substituídos por underscores e todas as letras são transformadas em minúsculas.

## Sintaxe

```typescript
function toSnakeCase(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser convertida para o formato snake_case. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string convertida para o formato snake_case.  |

## Exemplos

```typescript
console.log(toSnakeCase("Hello World"));         // Saída: "hello_world"
console.log(toSnakeCase("JavaScript is fun"));   // Saída: "javascript_is_fun"
console.log(toSnakeCase("Singleword"));          // Saída: "singleword"
console.log(toSnakeCase("  Extra spaces here ")); // Saída: "extra_spaces_here"
```

## Notas

- A função utiliza `trim()` para remover quaisquer espaços do início e final da string.
- Em seguida, transforma toda a string para minúsculas com `toLowerCase()`.
- Por fim, substitui todos os espaços por underscores usando `replace(/\s+/g, "_")`.

## Código Fonte

::: code-group
```typescript
function toSnakeCase(str: string): string {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}
```

```javascript
function toSnakeCase(str) {
  return str
  .trim()
  .toLowerCase()
  .replace(/\s+/g, "_");
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)