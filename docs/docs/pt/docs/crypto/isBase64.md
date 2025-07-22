# isBase64

Verifica se uma string está codificada em Base64.

## Sintaxe
```typescript
isBase64(value: string): boolean
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `value`  | `string`  | A string a ser verificada  |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se a string estiver em formato Base64, caso contrário, retorna `false`. |

## Exemplo
```typescript
isBase64("U29tZSBkYWRv"); // true
isBase64("12345"); // false
isBase64(12345); // lança TypeError
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- O padrão aceita strings Base64 válidas, incluindo padding com `=`.

## Referências
- [MDN: Base64](https://developer.mozilla.org/pt-BR/docs/Glossary/Base64)