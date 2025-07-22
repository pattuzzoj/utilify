# isUint8Array

Verifica se o valor fornecido é um Uint8Array.

## Sintaxe
```typescript
isUint8Array(input: unknown): input is Uint8Array
```

## Parâmetros

| Nome     | Tipo      | Descrição                  |
|----------|-----------|----------------------------|
| `input`  | `unknown` | O valor a ser verificado   |

## Retorno

| Tipo       | Descrição                                                      |
|------------|----------------------------------------------------------------|
| `boolean`  | Retorna `true` se o valor for um Uint8Array, caso contrário, retorna `false`. |

## Exemplo
```typescript
isUint8Array(new Uint8Array([1,2,3])); // true
isUint8Array([]); // false
isUint8Array(null); // false
```

## Notas
- Utiliza a verificação do tipo de objeto e a assinatura interna `[object Uint8Array]`.

## Referências
- [MDN: Uint8Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
