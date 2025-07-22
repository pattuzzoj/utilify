# stripHTML

Remove todas as tags HTML de uma string, retornando apenas o texto puro.

## Sintaxe
```typescript
stripHTML(html: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                                 |
|--------|----------|---------------------------------------------|
| `html` | `string` | A string contendo HTML a ser limpa.         |

## Retorno

| Tipo     | Descrição                        |
|----------|----------------------------------|
| `string` | A string sem tags HTML.           |

## Exemplo
```typescript
stripHTML("<p>Olá <b>mundo</b>!</p>"); // "Olá mundo!"
stripHTML("<div><span>Texto</span></div>"); // "Texto"
stripHTML(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Remove todas as tags HTML, mas não executa sanitização completa para XSS.

## Referências
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)