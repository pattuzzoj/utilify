# isAlphanumeric

A função `isAlphanumeric` verifica se uma string contém apenas caracteres alfanuméricos (letras e números).

## Sintaxe

```typescript
function isAlphanumeric(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                      |
|------|----------|------------------------------------------------|
| value  | `string` | A string a ser validada como alfanumérica.      |

### Retorno

| Tipo     | Descrição                                      |
|----------|------------------------------------------------|
| `boolean` | Retorna `true` se a string contiver apenas letras e números, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isAlphanumeric("abc123"));      // Saída: true
console.log(isAlphanumeric("abcABC123"));   // Saída: true
console.log(isAlphanumeric("abc 123"));     // Saída: false
console.log(isAlphanumeric("123456"));      // Saída: true
console.log(isAlphanumeric("hello_world")); // Saída: false
```

## Notas

- A função verifica se a string contém apenas caracteres alfanuméricos (letras e números).
- Espaços, caracteres especiais ou outros símbolos resultarão em `false`.

## Código

::: code-group
```typescript
function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}
```

```javascript
function isAlphanumeric(value) {
  return /^[a-zA-Z0-9]+$/.test(value);
}
```
:::

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)