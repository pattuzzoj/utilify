# toCamelCase

Converte uma string para o formato camelCase.

## Sintaxe
```typescript
toCamelCase(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser convertida.     |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `string` | A string convertida para camelCase.        |

## Exemplo
```typescript
toCamelCase("exemplo de string"); // "exemploDeString"
toCamelCase("  teste camel case  "); // "testeCamelCase"
toCamelCase(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços extras são removidos antes da conversão.

## Referências
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)