# isNode

A função `isNode` verifica se o código está sendo executado em ambiente Node.js.

## Sintaxe

```typescript
isNode(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em ambiente Node.js, `false` caso contrário    |

## Exemplos

```typescript
isNode();
// => true (em Node.js)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência dos objetos globais `global` e `process`.
* Útil para condicionar execuções específicas de Node.js.

## Referências

* https://nodejs.org/api/process.html