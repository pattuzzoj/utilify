# slugify

Converte uma string em um slug amigável para URLs, removendo acentos, caracteres especiais e substituindo espaços por hífens.

## Sintaxe
```typescript
slugify(str: string): string
```

## Parâmetros

| Nome        | Tipo      | Descrição                                         |
|-------------|-----------|--------------------------------------------------|
| `str`       | `string`  | A string de entrada.                             |

## Retorno

| Tipo     | Descrição                          |
|----------|------------------------------------|
| `string` | O slug gerado a partir da string de entrada. |

## Exemplo
```typescript
slugify("Olá, mundo!"); // "ola-mundo"
slugify("Café com Leite"); // "cafe-com-leite"
slugify("  Exemplo de Slug  "); // "exemplo-de-slug"
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Remove pontuação, acentos e converte para minúsculas.
- Substitui espaços consecutivos por um único hífen.

## Referências
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN: String.prototype.normalize()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)