# hash

A função `hash` gera um hash criptográfico para um dado de entrada utilizando a API Web Crypto.

## Assinatura

```typescript
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>;
```

### Parâmetros

| Nome       | Tipo                              | Descrição                                                                 |
|------------|-----------------------------------|---------------------------------------------------------------------------|
| `data`     | `string | ArrayBuffer | DataView` | O dado de entrada a ser hasheado.                                         |
| `algorithm`| `'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512'` | O algoritmo de hashing a ser utilizado.                                  |
| `output`   | `'hex' | 'base64' | 'buffer'`   | O formato do retorno do hash (`buffer` é o padrão).                      |

### Retorno

| Tipo                    | Descrição                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| `string`               | O hash formatado como string no formato `hex` ou `base64`.             |
| `ArrayBuffer`           | O hash como um `ArrayBuffer` se o formato for `buffer`.               |
| `undefined`            | Caso a função seja executada no servidor.                             |

## Exemplos

```typescript
(async () => {
  const data = 'Hello, World!';
  console.log(await hash(data, 'SHA-256', 'hex'));    // Retorna o hash em formato hexadecimal
  console.log(await hash(data, 'SHA-512', 'base64')); // Retorna o hash em formato base64
  console.log(await hash(data, 'SHA-1'));             // Retorna o hash como ArrayBuffer
})();
```

## Notas

- Se executado no servidor, a função retornará `undefined`.
- O algoritmo especificado deve ser suportado pela API Web Crypto.

## Dependências

- [`isServer`](../environment/isServer.md): Verifica se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

type Algorithm = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';
type HashOutput = 'hex' | 'base64' | 'buffer';

async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: Algorithm,
  output: HashOutput = 'buffer'
): Promise<string | ArrayBuffer | undefined> {
  if (isServer()) return;

  const buffer: Uint8Array | ArrayBuffer | DataView = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```

```javascript
import { isServer } from '@utilify/environment';

async function hash(data, algorithm, output = 'buffer') {
  if (isServer()) return;

  const buffer = typeof data === 'string' ? new TextEncoder().encode(data) : data;
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);

  if (output === 'base64') {
    return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
  } else if (output === 'hex') {
    return Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
  }

  return hashBuffer;
}
```
:::

## Referências

- [Web Crypto API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [TextEncoder - MDN](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder)
- [ArrayBuffer - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)