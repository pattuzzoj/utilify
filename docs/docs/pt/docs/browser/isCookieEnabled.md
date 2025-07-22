# isCookieEnabled

A função `isCookieEnabled` verifica se os cookies estão habilitados no navegador do usuário.

## Sintaxe

```typescript
isCookieEnabled(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo      | Descrição                                 |
| --------- | ----------------------------------------- |
| `boolean` | Verdadeiro se os cookies estiverem ativos  |

## Exemplos

```typescript
isCookieEnabled();
// => true
```

## Notas

* Útil para verificar suporte a cookies antes de operações de armazenamento.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/cookieEnabled