## isURL

A função `isURL` verifica se uma string corresponde ao formato de uma URL válida, incluindo protocolos opcionais, subdomínios, domínio, porta e caminho.

### Sintaxe

```javascript
isURL(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                                |
|------------|--------------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de uma URL válida, caso contrário, `false`. |

### Exemplos

```javascript
isURL('https://www.exemplo.com');           // true
isURL('http://exemplo.com:8080/caminho');   // true
isURL('www.exemplo.com');                   // true
isURL('exemplo.com');                       // true
isURL('ftp://exemplo.com');                 // false
isURL('exemplo');                           // false
isURL('');                                  // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Apenas valida o formato; não verifica se a URL realmente existe.
- Não suporta protocolos diferentes de http ou https.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: URL](https://pt.wikipedia.org/wiki/URL)