# isCreditCard

A função `isCreditCard` verifica se uma string fornecida é um número de cartão de crédito válido, de acordo com formatos comuns, incluindo Visa, MasterCard, American Express, Discover e outros.

## Sintaxe

```typescript
function isCreditCard(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                           |
|------|----------|-----------------------------------------------------|
| value  | `string` | A string a ser verificada quanto ao formato válido de número de cartão de crédito. |

### Retorno

| Tipo     | Descrição                                           |
|----------|-----------------------------------------------------|
| `boolean` | Retorna `true` se a string for um número de cartão de crédito válido, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isCreditCard("4111111111111111"));  // Saída: true (Visa)
console.log(isCreditCard("5105105105105100"));  // Saída: true (MasterCard)
console.log(isCreditCard("378282246310005"));   // Saída: true (American Express)
console.log(isCreditCard("1234567890123456"));  // Saída: false
```

## Notas

- Esta função usa uma expressão regular para validar uma variedade de tipos de cartões de crédito, verificando seus prefixos e tamanhos.
- Ela não verifica a validade real do cartão (ou seja, não realiza uma verificação contra um banco de dados ou usa o algoritmo de Luhn).

## Código

::: code-group
```typescript
function isCreditCard(value: string): boolean {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
}
```

```javascript
function isCreditCard(value) {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
}
```
:::

## Referências

- [Número de cartão de crédito](https://pt.wikipedia.org/wiki/Número_de_cartão_de_crédito)
- [RegExp.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)