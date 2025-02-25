# toPascalCase

A função `toPascalCase` converte uma string para o formato PascalCase, onde cada palavra começa com a letra maiúscula e todos os espaços entre as palavras são removidos.

## Sintaxe

```typescript
function toPascalCase(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser convertida para o formato PascalCase. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string convertida para o formato PascalCase.  |

## Exemplos

```typescript
console.log(toPascalCase("hello world"));         // Saída: "HelloWorld"
console.log(toPascalCase("java script is fun"));  // Saída: "JavaScriptIsFun"
console.log(toPascalCase("singleword"));          // Saída: "Singleword"
console.log(toPascalCase("  extra spaces here ")); // Saída: "ExtraSpacesHere"
```

## Notas

- A função utiliza `trim()` para remover os espaços no início e no final da string.
- Ela divide a string em palavras usando `split(" ")`, capitaliza a primeira letra de cada palavra com `toUpperCase()` e junta as palavras de volta.
- Por fim, remove qualquer espaço restante usando `replace(/\s+/g, "")`.

## Código Fonte

::: code-group
```typescript
function toPascalCase(str: string): string {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

```javascript
function toPascalCase(str) {
  return str.trim().split(" ").map((str) => {
    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)