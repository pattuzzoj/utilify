# maskString

Mascara parte de uma string substituindo caracteres por um caractere de máscara.

## Sintaxe
```typescript
maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```

## Parâmetros

| Nome         | Tipo      | Descrição                                                    |
|--------------|-----------|--------------------------------------------------------------|
| `str`        | `string`  | A string original.                                           |
| `mask`       | `string`  | O caractere ou string de máscara.                            |
| `maskStart`  | `number`  | Índice inicial para aplicar a máscara (>= 0).                |
| `maskLength` | `number`  | Quantidade de caracteres a serem mascarados (>= 0).          |

## Retorno

| Tipo     | Descrição                                                        |
|----------|------------------------------------------------------------------|
| `string` | A string resultante com a parte mascarada.                       |

## Exemplo
```typescript
maskString("123456789", "*", 2, 4); // "12****789"
maskString("abcdef", "#", 0, 3); // "###def"
maskString("openai", "X", 4, 10); // "openXX"
```

## Notas
- Lança `TypeError` se os argumentos não forem do tipo esperado.
- Lança `RangeError` se `maskStart` ou `maskLength` forem negativos, ou se `maskStart` for maior que o comprimento da string.
- Se `maskLength` exceder o comprimento restante da string, mascara até o final.

## Referências
- [MDN: String.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN: String.prototype.repeat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)