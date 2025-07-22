# isMobile

A função `isMobile` verifica se o código está sendo executado em um dispositivo móvel.

## Sintaxe

```typescript
isMobile(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em um dispositivo móvel, `false` caso contrário |

## Exemplos

```typescript
isMobile();
// => true (em dispositivos móveis)
// => false (em desktop)
```

## Notas

* Utiliza a propriedade `navigator.userAgent` para identificar dispositivos móveis.
* Útil para condicionar execuções específicas de mobile.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/userAgent