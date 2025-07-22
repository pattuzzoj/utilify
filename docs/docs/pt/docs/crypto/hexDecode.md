# hexDecode

Decodifica uma string hexadecimal para um Uint8Array.

## Sintaxe
```typescript
hexDecode(hex: string): Uint8Array
```

## Parâmetros

| Nome    | Tipo      | Descrição                                 |
|---------|-----------|--------------------------------------------|
| `hex`   | `string`  | A string hexadecimal a ser decodificada    |

## Retorno

| Tipo          | Descrição                                 |
|---------------|-------------------------------------------|
| `Uint8Array`  | Os bytes decodificados da string hexadecimal |

## Exemplo
```typescript
hexDecode("48656c6c6f"); // Uint8Array([72, 101, 108, 108, 111])
```

## Notas
- Lança um erro se a string não for hexadecimal válida ou se o comprimento não for par.

## Referências
- [MDN: Uint8Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
