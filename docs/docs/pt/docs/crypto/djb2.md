# djb2

Calcula o hash de uma string usando o algoritmo djb2.

## Sintaxe
```typescript
djb2(str: string): number
```

## Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `str`   | `string`  | A string a ser processada |

## Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `number`  | O valor hash calculado (unsigned 32 bits)  |

## Exemplo
```typescript
djb2("hello"); // 210714636441
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- O algoritmo djb2 é simples e rápido, mas não é seguro para uso criptográfico.

## Referências
- [djb2 hash function](http://www.cse.yorku.ca/~oz/hash.html)