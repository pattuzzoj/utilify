# hexEncode

Codifica um ArrayBuffer ou Uint8Array em uma string hexadecimal.

## Sintaxe
```typescript
hexEncode(data: ArrayBuffer | Uint8Array): string
```

## Parâmetros

| Nome    | Tipo                       | Descrição                    |
|---------|----------------------------|------------------------------|
| `data`  | `ArrayBuffer` \| `Uint8Array` | Os dados a serem codificados |

## Retorno

| Tipo      | Descrição                        |
|-----------|----------------------------------|
| `string`  | A string hexadecimal resultante   |

## Exemplo
```typescript
hexEncode(new Uint8Array([72, 101, 108, 108, 111])); // "48656c6c6f"
```

## Notas
- Utiliza a conversão de cada byte para sua representação hexadecimal.

## Referências
- [MDN: Uint8Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
