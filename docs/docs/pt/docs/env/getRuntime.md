# getRuntime

A função `getRuntime` retorna o ambiente de execução detectado: Browser, Node, Deno, Bun ou Unknown.

## Sintaxe

```typescript
getRuntime(): 'Browser' | 'Node' | 'Deno' | 'Bun' | 'Unknown';
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo                                               | Descrição                                                        |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| `'Browser'` \| `'Node'` \| `'Deno'` \| `'Bun'` \| `'Unknown'` | O ambiente de execução detectado |

## Exemplos

```typescript
getRuntime();
// => "Browser", "Node", "Deno", "Bun" ou "Unknown"
```

## Notas

* Utiliza funções auxiliares para detectar o ambiente.
* Útil para adaptar comportamentos conforme o runtime.

## Referências

* https://nodejs.org/
* https://deno.com/
* https://bun.sh/