# isURL

A função `isURL` valida se uma string fornecida é uma URL válida.

## Sintaxe

```typescript
function isURL(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                       |
|------|----------|---------------------------------|
| value  | `string` | A string a ser validada como URL. |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Retorna `true` se a string for uma URL válida, caso contrário, `false`. |

## Exemplos

```typescript
console.log(isURL("https://example.com")); // Saída: true
console.log(isURL("http://example.com:8080/path")); // Saída: true
console.log(isURL("www.example.com")); // Saída: true
console.log(isURL("example")); // Saída: false
console.log(isURL("ftp://example.com")); // Saída: false
```

## Notas

- A função utiliza uma expressão regular para validar evalueuturas comuns de URLs, incluindo:
  - Protocolos opcionais (`http://`, `https://`).
  - Prefixo opcional `www.`.
  - Um domínio com um domínio de nível superior (e.g., `.com`, `.org`).
  - Portas opcionais (e.g., `:8080`).
  - Caminhos e strings de consulta opcionais.
- A função não valida protocolos incomuns como `ftp` ou esquemas personalizados.

## Código Fonte

::: code-group
```typescript
function isURL(value: string): boolean { 
  return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/.test(value);
}
```

```javascript
function isURL(value) { 
  return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:[0-9]{1,5})?(\/[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=-]*)?$/.test(value);
}
```
::: 

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)