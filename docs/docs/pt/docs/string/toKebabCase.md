# toKebabCase

Converte uma string para o formato kebab-case (minúsculas e palavras separadas por hífens).

## Sintaxe
```typescript
toKebabCase(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser convertida.     |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `string` | A string convertida para kebab-case.       |

## Exemplo
```typescript
toKebabCase("Exemplo de String"); // "exemplo-de-string"
toKebabCase("  Teste Kebab Case  "); // "teste-kebab-case"
toKebabCase(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços extras são removidos antes da conversão.

## Referências
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)