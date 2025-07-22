# isHex

Verifica se uma string contém apenas caracteres hexadecimais.

## Sintaxe
```typescript
isHex(value: string): boolean
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `value`  | `string`  | A string a ser verificada  |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se a string for hexadecimal, caso contrário, retorna `false`. |

## Exemplo
```typescript
isHex("1a2b3c"); // true
isHex("xyz"); // false
isHex(12345 as any); // lança TypeError
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- Aceita letras maiúsculas e minúsculas.

## Referências
- [MDN: Hexadecimal](https://developer.mozilla.org/pt-BR/docs/Glossary/Hexadecimal)