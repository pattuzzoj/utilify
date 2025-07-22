# isArrayBuffer

Verifica se o valor fornecido é um ArrayBuffer.

## Sintaxe
```typescript
isArrayBuffer(input: unknown): input is ArrayBuffer
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `input`  | `unknown` | O valor a ser verificado   |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se o valor for um ArrayBuffer, caso contrário, retorna `false`. |

## Exemplo
```typescript
isArrayBuffer(new ArrayBuffer(8)); // true
isArrayBuffer([]); // false
isArrayBuffer(null); // false
```

## Notas
- Utiliza a verificação do tipo de objeto e a assinatura interna `[object ArrayBuffer]`.

## Referências
- [MDN: ArrayBuffer](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
