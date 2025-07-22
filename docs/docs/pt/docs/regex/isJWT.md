## isJWT

A função `isJWT` verifica se uma string corresponde ao formato de um JSON Web Token (JWT).

### Sintaxe

```javascript
isJWT(value)
```

### Parâmetros

| Nome    | Tipo      | Descrição                  |
|---------|-----------|----------------------------|
| `value` | `string`  | A string a ser verificada. |

### Retorno

| Tipo       | Descrição                                                        |
|------------|------------------------------------------------------------------|
| `boolean`  | `true` se a string corresponder ao formato de um JWT, caso contrário, `false`. |

### Exemplos

```javascript
isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'); // true
isJWT('abc.def.ghi'); // true
isJWT('abc.def');     // false
isJWT('');            // false
```

### Notas

- Lança um `TypeError` se o valor fornecido não for uma string.
- Apenas valida o formato (três partes separadas por ponto); não verifica a assinatura ou conteúdo.

### Referências

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [JWT.io: Introduction](https://jwt.io/introduction)