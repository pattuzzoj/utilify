# capitalize

Converte o primeiro caractere de uma string para maiúsculo e o restante para minúsculo.

## Sintaxe
```typescript
capitalize(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser capitalizada.   |

## Retorno

| Tipo     | Descrição                                                        |
|----------|------------------------------------------------------------------|
| `string` | A string resultante com o primeiro caractere em maiúsculo e o restante em minúsculo. |

## Exemplo
```typescript
capitalize("exemplo"); // "Exemplo"
capitalize("eXEMPLO"); // "Exemplo"
capitalize(""); // ""
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Retorna string vazia se a entrada for vazia.

## Referências
- [MDN: String.prototype.charAt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)