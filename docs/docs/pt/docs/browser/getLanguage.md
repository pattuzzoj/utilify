# getLanguage

A função `getLanguage` retorna o código de idioma do navegador.

## Assinatura

```typescript
function getLanguage(): string | undefined;
```

### Retorno

| Tipo              | Descrição                                                       |
|-------------------|---------------------------------------------------------------|
| `string`          | O código de idioma do navegador (duas primeiras letras, por exemplo, `'en'` para inglês, `'pt'` para português). |
| `undefined`       | Se a função for executada no servidor, retornará `undefined`. |

## Exemplos

```typescript
console.log(getLanguage()); // 'en' (se o idioma do navegador for inglês)
```

## Notas

- Se executado no servidor, a função retornará `undefined`.

## Dependências

- [`isServer`](../environment/isServer.md): A função `isServer` é usada para verificar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function getLanguage(): string | undefined {
  if (isServer()) return undefined;

  return navigator.language.slice(0, 2);
}
```

```javascript
function getLanguage() {
  if (isServer()) return undefined;

  return navigator.language.slice(0, 2);
}
```
:::

## Referências

- [Navigator.language - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language)