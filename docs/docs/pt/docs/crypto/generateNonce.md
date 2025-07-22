# generateNonce

Gera um vetor de bytes aleatórios (nonce) de comprimento especificado.

## Sintaxe
```typescript
generateNonce(length?: number): Uint8Array
```

## Parâmetros

| Nome      | Tipo      | Descrição                                      |
|-----------|-----------|------------------------------------------------|
| `length`  | `number`  | (Opcional) Comprimento do nonce em bytes. Padrão: 16 |

## Retorno

| Tipo          | Descrição                        |
|---------------|----------------------------------|
| `Uint8Array`  | Um vetor de bytes aleatórios     |

## Exemplo
```typescript
generateNonce(); // Uint8Array(16) [...]
generateNonce(32); // Uint8Array(32) [...]
```

## Notas
- Lança um erro se o comprimento não for positivo ou não for múltiplo de 8.
- Utiliza `crypto.getRandomValues` para geração segura de números aleatórios.

## Referências
- [MDN: crypto.getRandomValues](https://developer.mozilla.org/pt-BR/docs/Web/API/Crypto/getRandomValues)