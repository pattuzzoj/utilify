# toSnakeCase

Converte uma string para o formato snake_case (minúsculas e palavras separadas por underscores).

## Sintaxe
```typescript
toSnakeCase(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser convertida.     |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `string` | A string convertida para snake_case.       |

## Exemplo
```typescript
toSnakeCase("Exemplo de String"); // "exemplo_de_string"
toSnakeCase("  Teste Snake Case  "); // "teste_snake_case"
toSnakeCase(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços extras são removidos antes da conversão.

## Referências
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)