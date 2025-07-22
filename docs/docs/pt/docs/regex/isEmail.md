## isEmail

A função `isEmail` verifica se uma string corresponde ao formato de um endereço de e-mail válido.

### Sintaxe

```javascript
isEmail(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                |
|------------|--------------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de um e-mail válido, caso contrário, `false`. |

### Exemplos

```javascript
isEmail('usuario@dominio.com');      // true
isEmail('usuario.nome@dominio.com'); // true
isEmail('usuario@dominio');          // false
isEmail('usuario@.com');             // false
isEmail('usuario@dominio.c');        // false
isEmail('');                         // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Apenas valida o formato básico do e-mail; não verifica se o domínio existe ou está ativo.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [RFC 5322: Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)