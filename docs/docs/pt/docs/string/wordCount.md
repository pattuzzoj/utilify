# wordCount

A função `wordCount` conta o número de palavras em uma string. Ela ignora os espaços extras no início, no final e entre as palavras.

## Sintaxe

```typescript
function wordCount(str: string): number
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string que será analisada.                       |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `number` | O número de palavras presentes na string.     |

## Exemplos

```typescript
console.log(wordCount("Hello World"));           // Saída: 2
console.log(wordCount("  JavaScript  is awesome  "));  // Saída: 3
console.log(wordCount("  singleword "));         // Saída: 1
console.log(wordCount(""));                      // Saída: 0
```

## Notas

- A função usa `trim()` para remover espaços no início e no final da string.
- Em seguida, `replace(/\s+/g, " ")` substitui múltiplos espaços por um único espaço.
- Por fim, a string é dividida usando `split(" ")` e a quantidade de palavras é obtida pelo comprimento do array resultante.

## Código Fonte

::: code-group
```typescript
function wordCount(str: string): number {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}
```

```javascript
function wordCount(str) {
  return str
  .trim()
  .replace(/\s+/g, " ")
  .split(" ").length;
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)