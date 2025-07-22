## isIPV6

A função `isIPV6` verifica se uma string corresponde ao formato de um endereço IPv6 válido, com ou sem porta.

### Sintaxe

```javascript
isIPV6(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de um endereço IPv6 válido, caso contrário, `false`. |

### Exemplos

```javascript
isIPV6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'); // true
isIPV6('::1');                                     // true
isIPV6('fe80::1ff:fe23:4567:890a');                // true
isIPV6('[2001:db8::1]:8080');                      // true
isIPV6('1200::AB00:1234::2552:7777:1313');         // false
isIPV6('');                                        // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Suporta endereços IPv6 com ou sem porta.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Endereço IPv6](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IPv6)