# randomUUID

A função `randomUUID` gera um identificador único usando a API Web Crypto.

## Assinatura

```typescript
function randomUUID(): string | undefined;
```

### Retorno

| Tipo        | Descrição                                                        |
|-------------|------------------------------------------------------------------|
| `string`    | Uma string UUID única gerada pelo navegador.                     |
| `undefined` | Se a função for executada no servidor, retornará `undefined`.    |

## Exemplos

```typescript
console.log(randomUUID()); // ex.: '123e4567-e89b-12d3-a456-426614174000'
```

## Notas

- Se executado no servidor, a função retornará `undefined`.
- A função depende do método `crypto.randomUUID()` da API Web Crypto.

## Dependências

- [`isServer`](../environment/isServer.md): Verifica se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function randomUUID(): string | undefined {
  if (isServer()) return;

  return crypto.randomUUID();
}
```

```javascript
import { isServer } from '@utilify/environment';

function randomUUID() {
  if (isServer()) return;

  return crypto.randomUUID();
}
```
:::

## Referências

- [Web Crypto API: randomUUID() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)