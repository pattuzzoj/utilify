# isUUID

Verifica se uma string está no formato UUID (Universally Unique Identifier).

## Sintaxe
```typescript
isUUID(value: string): boolean
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `value`  | `string`  | A string a ser verificada  |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se a string estiver no formato UUID, caso contrário, retorna `false`. |

## Exemplo
```typescript
isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
isUUID("not-a-uuid"); // false
isUUID(12345 as any); // lança TypeError
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- O padrão aceita UUIDs versão 1 a 5.

## Referências
- [RFC 4122 - UUID](https://datatracker.ietf.org/doc/html/rfc4122)