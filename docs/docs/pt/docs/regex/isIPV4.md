## isIPV4

A função `isIPV4` verifica se uma string corresponde ao formato de um endereço IPv4 válido, com ou sem porta.

### Sintaxe

```javascript
isIPV4(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de um endereço IPv4 válido, caso contrário, `false`. |

### Exemplos

```javascript
isIPV4('192.168.0.1');        // true
isIPV4('255.255.255.255');    // true
isIPV4('0.0.0.0');            // true
isIPV4('256.0.0.1');          // false
isIPV4('192.168.0.1:8080');   // true
isIPV4('192.168.0.1:99999');  // false
isIPV4('abc.def.ghi.jkl');    // false
isIPV4('');                   // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Suporta endereços IPv4 com ou sem porta.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Endereço IPv4](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IPv4)