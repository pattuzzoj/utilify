# utf8Encode

Codifica uma string em UTF-8, retornando um Uint8Array.

## Sintaxe
```typescript
utf8Encode(input: string): Uint8Array
```

## Parâmetros

| Nome     | Tipo      | Descrição                                 |
|----------|-----------|--------------------------------------------|
| `input`  | `string`  | A string a ser codificada em UTF-8         |

## Retorno

| Tipo          | Descrição                                 |
|---------------|-------------------------------------------|
| `Uint8Array`  | Os bytes da string codificada em UTF-8     |

## Exemplo
```typescript
utf8Encode("Olá"); // Uint8Array([...])
utf8Encode(123 as any); // lança TypeError
```

## Notas
- Suporta ambientes com `TextEncoder` (navegadores modernos) e `Buffer` (Node.js).
- Lança um erro se nenhum codificador UTF-8 estiver disponível.

## Referências
- [MDN: TextEncoder](https://developer.mozilla.org/pt-BR/docs/Web/API/TextEncoder)
- [Node.js: Buffer](https://nodejs.org/api/buffer.html)
