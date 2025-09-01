# utf8Decode

Decodifica um ArrayBuffer ou Uint8Array para uma string UTF-8.

## Sintaxe
```typescript
utf8Decode(data: ArrayBuffer | Uint8Array): string
```

## Parâmetros

| Nome    | Tipo                       | Descrição                                 |
|---------|----------------------------|--------------------------------------------|
| `data`  | `ArrayBuffer` \| `Uint8Array` | Os dados codificados em UTF-8 a serem decodificados |

## Retorno

| Tipo      | Descrição                        |
|-----------|----------------------------------|
| `string`  | A string decodificada em UTF-8    |

## Exemplo
```typescript
utf8Decode(new Uint8Array([72, 101, 108, 108, 111])); // "Hello"
```

## Notas
- Suporta ambientes com `TextDecoder` (navegadores modernos) e `Buffer` (Node.js).
- Lança um erro se nenhum decodificador UTF-8 estiver disponível.

## Referências
- [MDN: TextDecoder](https://developer.mozilla.org/pt-BR/docs/Web/API/TextDecoder)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)
