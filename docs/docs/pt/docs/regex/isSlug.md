## isSlug

A função `isSlug` verifica se uma string está no formato de slug, ou seja, composta apenas por letras minúsculas, números e hifens, sem espaços ou caracteres especiais.

### Sintaxe

```javascript
isSlug(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                        |
|------------|------------------------------------------------------------------|
| `boolean`  | `true` se a string estiver no formato de slug, caso contrário, `false`. |

### Exemplos

```javascript
isSlug('meu-slug');         // true
isSlug('meu-slug-123');     // true
isSlug('meu_slug');         // false
isSlug('Meu-Slug');         // false
isSlug('meu slug');         // false
isSlug('');                 // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Não permite letras maiúsculas, espaços ou caracteres especiais.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
