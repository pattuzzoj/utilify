# charCount

Conta quantas vezes um caractere específico aparece em uma string.

## Sintaxe
```typescript
charCount(str: string, char: string): number
```

## Parâmetros

| Nome    | Tipo     | Descrição                                                        |
|---------|----------|------------------------------------------------------------------|
| `str`   | `string` | A string onde será feita a contagem.                             |
| `char`  | `string` | O caractere a ser contado (deve ser uma string de um único caractere). |

## Retorno

| Tipo      | Descrição                                         |
|-----------|---------------------------------------------------|
| `number`  | O número de ocorrências do caractere na string.   |

## Exemplo
```typescript
charCount("banana", "a"); // 3
charCount("abracadabra", "b"); // 2
charCount("teste", "z"); // 0
```

## Notas
- Lança `TypeError` se `str` não for string ou se `char` não for uma string de um único caractere.
- A contagem diferencia maiúsculas de minúsculas.

## Referências
- [MDN: String.prototype.length](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [MDN: String.prototype.charAt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)