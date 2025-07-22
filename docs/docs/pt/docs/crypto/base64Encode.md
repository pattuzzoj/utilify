# base64Encode

Codifica um ArrayBuffer ou Uint8Array em uma string Base64 ou Base64URL.

## Sintaxe
```typescript
base64Encode(input: Uint8Array | ArrayBuffer, urlSafe?: boolean): string
```

## Parâmetros

| Nome       | Tipo                        | Descrição                                                      |
|------------|-----------------------------|----------------------------------------------------------------|
| `input`    | `Uint8Array` \| `ArrayBuffer` | Os dados a serem codificados                                   |
| `urlSafe`  | `boolean`                   | (Opcional) Se verdadeiro, retorna Base64URL. Padrão: `false`   |

## Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `string`  | A string codificada em Base64 ou Base64URL |

## Exemplo
```typescript
base64Encode(new Uint8Array([72, 101, 108, 108, 111])); // "SGVsbG8="
base64Encode(new Uint8Array([72, 101, 108, 108, 111]), true); // "SGVsbG8"
```

## Notas
- Suporta ambientes com `Buffer` (Node.js) e `btoa` (navegadores).
- Lança um erro se nenhum codificador Base64 estiver disponível.

## Referências
- [MDN: btoa](https://developer.mozilla.org/pt-BR/docs/Web/API/btoa)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)