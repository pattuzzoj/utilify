# removeAccents

Remove acentos e sinais diacríticos de uma string.

## Sintaxe
```typescript
removeAccents(str: string): string
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string de entrada.           |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `string` | A string sem acentos ou sinais diacríticos. |

## Exemplo
```typescript
removeAccents("ação"); // "acao"
removeAccents("café"); // "cafe"
removeAccents("Olá, mundo!"); // "Ola, mundo!"
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Utiliza normalização Unicode (NFD) para separar caracteres e remove diacríticos com expressão regular.

## Referências
- [MDN: String.prototype.normalize()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)