# isAlpha

A função `isAlpha` verifica se uma string contém apenas caracteres alfabéticos (letras maiúsculas e minúsculas).

## Sintaxe

```typescript
function isAlpha(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                              |
|------|----------|----------------------------------------|
| value  | `string` | A string a ser validada como alfabética. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean` | Retorna `true` se a string contiver apenas letras, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isAlpha("abcABC"));      // Saída: true
console.log(isAlpha("abc"));         // Saída: true
console.log(isAlpha("ABC"));         // Saída: true
console.log(isAlpha("abc123"));      // Saída: false
console.log(isAlpha("123"));         // Saída: false
console.log(isAlpha("hello world")); // Saída: false
```

## Notas

- A função verifica se a string contém apenas caracteres do alfabeto inglês (maiúsculos ou minúsculos).
- Caracteres especiais, números ou espaços irão resultar em `false`.

## Código Fonte

::: code-group
```typescript
function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
```

```javascript
function isAlpha(value) {
  return /^[a-zA-Z]+$/.test(value);
}
```
:::

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)