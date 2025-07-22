## isCreditCard

A função `isCreditCard` verifica se uma string corresponde ao formato de um número de cartão de crédito válido (Visa, MasterCard, American Express, Discover, JCB, Diners Club, entre outros).

### Sintaxe

```javascript
isCreditCard(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de um cartão de crédito válido, caso contrário, `false`. |

### Exemplos

```javascript
isCreditCard('4111111111111111'); // true (Visa)
isCreditCard('5500000000000004'); // true (MasterCard)
isCreditCard('340000000000009');  // true (American Express)
isCreditCard('1234567890123456'); // false
isCreditCard('abcd');             // false
isCreditCard('');                 // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Apenas valida o formato; não verifica se o cartão está ativo ou autorizado.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Credit card number](https://pt.wikipedia.org/wiki/N%C3%BAmero_de_cart%C3%A3o_de_cr%C3%A9dito)