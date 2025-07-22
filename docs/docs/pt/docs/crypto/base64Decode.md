# base64Decode

Decodifica uma string Base64 ou Base64URL para um Uint8Array.

## Sintaxe
```typescript
base64Decode(input: string, urlSafe?: boolean): Uint8Array
```

## Parâmetros

| Nome       | Tipo        | Descrição                                              |
|------------|-------------|--------------------------------------------------------|
| `input`    | `string`    | A string codificada em Base64 ou Base64URL             |
| `urlSafe`  | `boolean`   | (Opcional) Se verdadeiro, trata como Base64URL. Padrão: `false` |

## Retorno

| Tipo           | Descrição                           |
|----------------|-------------------------------------|
| `Uint8Array`   | Os bytes decodificados da string     |

## Exemplo
```typescript
base64Decode("SGVsbG8="); // Uint8Array([72, 101, 108, 108, 111])
base64Decode("U29tZV9kYWRvLQ", true); // Uint8Array([...])
```

## Notas
- Lança um erro se a string não for válida para o formato especificado.
- Suporta ambientes com `Buffer` (Node.js) e `atob` (navegadores).

## Referências
- [MDN: atob](https://developer.mozilla.org/pt-BR/docs/Web/API/atob)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)
