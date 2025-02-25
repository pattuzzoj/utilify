# getOS

A função `getOS` detecta o sistema operacional do dispositivo em que o código está sendo executado, com base no `userAgent` ou nas propriedades da API `navigator` quando disponíveis.

## Sintaxe

```typescript
function getOS(): string | undefined;
```

### Retorno

| Tipo      | Descrição                                              |
|-----------|----------------------------------------------------------|
| `string`  | Retorna o nome do sistema operacional, como "Android", "iOS", "Linux", "Windows", "macOS" ou "Unknown". |
| `undefined` | Retorna `undefined` caso o código não esteja sendo executado em um servidor. |

## Exemplos

```typescript
console.log(getOS()); // Exemplo: "Android", "iOS", "macOS", etc.
```

## Notas

- A função usa a API `userAgentData` para obter informações detalhadas sobre o sistema operacional, quando disponível.
- Caso `userAgentData` não esteja presente, a função recorre ao valor `navigator.userAgent` para fazer a detecção do sistema operacional.
- A função também verifica se o código está sendo executado em um servidor, retornando `undefined` nesse caso.

## Dependências

- [`isServer`](./isServer.md): A função `isServer` é usada para determinar se o código está sendo executado no servidor.

## Código Fonte

::: code-group
```typescript
import isServer from './isServer';

function getOS(): string | undefined {
  if (!isServer()) return;

  if ('userAgentData' in navigator) {
    return navigator.userAgentData.platform;
  }

  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Linux/i.test(userAgent)) return 'Linux';
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/Mac/i.test(userAgent)) return 'macOS';

  return 'Unknown';
}
```

```javascript
import isServer from './isServer';

function getOS() {
  if (!isServer()) return;

  if ('userAgentData' in navigator) {
    return navigator.userAgentData.platform;
  }

  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Linux/i.test(userAgent)) return 'Linux';
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/Mac/i.test(userAgent)) return 'macOS';

  return 'Unknown';
}
```
:::

## Referências

- [navigator.userAgent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)
- [navigator.userAgentData - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData)