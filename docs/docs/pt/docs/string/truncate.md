# truncate

Trunca uma string para um tamanho máximo e adiciona reticências ao final.

## Sintaxe
```typescript
truncate(text: string, size: number): string
```

## Parâmetros

| Nome     | Tipo      | Descrição                                                        |
|----------|-----------|------------------------------------------------------------------|
| `text`   | `string`  | A string a ser truncada.                                         |
| `size`   | `number`  | O tamanho máximo da string resultante (antes das reticências).    |

## Retorno

| Tipo     | Descrição                          |
|----------|------------------------------------|
| `string` | A string truncada com reticências. |

## Exemplo
```typescript
truncate("Exemplo de truncamento", 7); // "Exemplo..."
truncate("Olá mundo", 3); // "Olá..."
truncate("abc", 10); // "abc..."
```

## Notas
- Lança `TypeError` se os argumentos não forem do tipo esperado.
- Se o tamanho for maior que o comprimento da string, retorna a string original com reticências.

## Referências
- [MDN: String.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN: String.prototype.concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat)