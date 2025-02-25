# isEmail

A função `isEmail` verifica se uma string é um endereço de e-mail válido.

## Sintaxe

```typescript
function isEmail(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                 |
|------|----------|-------------------------------------------|
| value  | `string` | A string a ser validada como um e-mail.   |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean` | Retorna `true` se a string for um e-mail válido, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isEmail("user@example.com"));       // Saída: true
console.log(isEmail("user.name@domain.co"));     // Saída: true
console.log(isEmail("user@subdomain.example.com")); // Saída: true
console.log(isEmail("email-invalido"));         // Saída: false
console.log(isEmail("user@dominio"));           // Saída: false
```

## Notas

- A função utiliza uma expressão regular para validar a evalueutura básica de um endereço de e-mail.
- Verifica se o e-mail segue o padrão geral `local-part@dominio`.

## Código Fonte

::: code-group
```typescript
function isEmail(value: string): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}
```

```javascript
function isEmail(value) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
}
```
:::

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)