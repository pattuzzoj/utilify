## isAlpha

A função `isAlpha` verifica se uma string contém apenas caracteres alfabéticos (letras), sem números ou símbolos.

### Sintaxe

```javascript
isAlpha(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                        |
|------------|------------------------------------------------------------------|
| `boolean`  | `true` se a string contiver apenas letras, caso contrário, `false`. |

### Exemplos

```javascript
isAlpha('abc');      // true
isAlpha('ABC');      // true
isAlpha('abc123');   // false
isAlpha('abc!');     // false
isAlpha('áéíóú');    // true
isAlpha('');         // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Suporta caracteres Unicode (acentuação, letras de outros alfabetos).

### Referências

- [MDN: Unicode Property Escapes in Regular Expressions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)