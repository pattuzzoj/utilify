# toPascalCase

Converte uma string para o formato PascalCase (primeira letra de cada palavra em maiúsculo, sem espaços).

## Sintaxe
```typescript
toPascalCase(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser convertida.     |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `string` | A string convertida para PascalCase.       |

## Exemplo
```typescript
toPascalCase("exemplo de string"); // "ExemploDeString"
toPascalCase("  teste pascal case  "); // "TestePascalCase"
toPascalCase(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços extras são removidos antes da conversão.

## Referências
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)