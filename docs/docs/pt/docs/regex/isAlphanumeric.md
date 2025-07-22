## isAlphanumeric

A função `isAlphanumeric` verifica se uma string contém apenas caracteres alfanuméricos (letras e números), sem símbolos ou espaços.

### Sintaxe

```javascript
isAlphanumeric(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                |
|------------|--------------------------------------------------------------------------|
| `boolean`  | `true` se a string contiver apenas letras e números, caso contrário, `false`. |

### Exemplos

```javascript
isAlphanumeric('abc123');   // true
isAlphanumeric('ABC');      // true
isAlphanumeric('123');      // true
isAlphanumeric('abc!');     // false
isAlphanumeric('abc 123');  // false
isAlphanumeric('');         // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Não permite espaços, acentuação ou símbolos.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)