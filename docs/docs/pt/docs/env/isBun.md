# isBun

A função `isBun` verifica se o código está sendo executado no ambiente Bun.

## Sintaxe

```typescript
isBun(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em ambiente Bun, `false` caso contrário        |

## Exemplos

```typescript
isBun();
// => true (em Bun)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência do objeto global `Bun` e sua propriedade `version`.
* Útil para condicionar execuções específicas de Bun.

## Referências

* https://bun.sh/docs/api/globals
