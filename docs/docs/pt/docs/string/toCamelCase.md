# toCamelCase

A função `toCamelCase` converte uma string para o formato camelCase, onde a primeira palavra fica em minúsculas e as palavras subsequentes começam com a letra maiúscula, removendo todos os espaços.

## Sintaxe

```typescript
function toCamelCase(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser convertida para o formato camelCase. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string convertida para o formato camelCase.  |

## Exemplos

```typescript
console.log(toCamelCase("hello world"));         // Saída: "helloWorld"
console.log(toCamelCase("java script is fun"));  // Saída: "javaScriptIsFun"
console.log(toCamelCase("singleword"));          // Saída: "singleword"
console.log(toCamelCase("  extra spaces here ")); // Saída: "extraSpacesHere"
```

## Notas

- A função utiliza `trim()` para remover os espaços no início e no final da string.
- Ela transforma toda a string para minúsculas com `toLowerCase()`.
- A string é dividida em palavras com `split(" ")`, e a primeira letra de cada palavra, exceto a primeira, é capitalizada.
- Por fim, as palavras são unidas e os espaços são removidos com `replace(/\s+/g, "")`.

## Código Fonte

::: code-group
```typescript
function toCamelCase(str: string): string {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```

```javascript
function toCamelCase(str) {
  return str.trim().toLowerCase().split(" ").map((str, index) => {
    if(index === 0) return str;

    return str[0].toUpperCase().concat(str.slice(1));
  }).join(" ").replace(/\s+/g, "");
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)