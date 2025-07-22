# getOS

A função `getOS` retorna o sistema operacional detectado no ambiente do navegador.

## Sintaxe

```typescript
getOS(): string | undefined;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo                  | Descrição                                                                 |
| --------------------- | ------------------------------------------------------------------------- |
| `string` \| `undefined` | O nome do sistema operacional detectado ou `undefined` se não for possível determinar |

## Exemplos

```typescript
getOS();
// => "Windows", "macOS", "Linux", "Android", "iOS", "Unknown" ou undefined
```

## Notas

* Utiliza o objeto `navigator` para identificar o sistema operacional.
* Retorna `undefined` se não estiver em ambiente de navegador.
* Pode retornar "Unknown" se o sistema não for reconhecido.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator
