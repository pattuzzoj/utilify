# isBase64URL

Verifica se uma string está codificada em Base64URL.

## Sintaxe
```typescript
isBase64URL(value: string): boolean
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `value`  | `string`  | A string a ser verificada  |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se a string estiver em formato Base64URL, caso contrário, retorna `false`. |

## Exemplo
```typescript
isBase64URL("U29tZV9kYWRvLQ"); // true
isBase64URL("U29tZSBkYWRv"); // false
isBase64URL(12345); // lança TypeError
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- Base64URL utiliza os caracteres `A-Z`, `a-z`, `0-9`, `_` e `-`.

## Referências
- [RFC 4648 - Base64URL](https://datatracker.ietf.org/doc/html/rfc4648#section-5)