# invertCase

Inverte o caso de cada caractere em uma string: maiúsculas tornam-se minúsculas e vice-versa.

## Sintaxe
```typescript
invertCase(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser processada.     |

## Retorno

| Tipo     | Descrição                                                        |
|----------|------------------------------------------------------------------|
| `string` | Uma nova string com o caso de cada caractere invertido.           |

## Exemplo
```typescript
invertCase("AbC"); // "aBc"
invertCase("Olá MUNDO!"); // "oLÁ mundo!"
invertCase(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Caracteres não alfabéticos permanecem inalterados.

## Referências
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)