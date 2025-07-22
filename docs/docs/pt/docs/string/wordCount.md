# wordCount

Conta o número de palavras em uma string.

## Sintaxe
```typescript
wordCount(str: string): number
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string de entrada.           |

## Retorno

| Tipo     | Descrição                          |
|----------|------------------------------------|
| `number` | O número de palavras na string.     |

## Exemplo
```typescript
wordCount("Olá mundo"); // 2
wordCount("  Exemplo   de   contagem "); // 3
wordCount(""); // 0
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Palavras são separadas por espaços em branco.

## Referências
- [MDN: String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)