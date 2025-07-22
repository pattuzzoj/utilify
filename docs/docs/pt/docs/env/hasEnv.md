# hasEnv

A função `hasEnv` verifica se uma variável de ambiente existe no ambiente de execução.

## Sintaxe

```typescript
hasEnv(key: string): boolean;
```

### Parâmetros

| Nome    | Tipo     | Descrição                                   |
| ------- | -------- | ------------------------------------------- |
| `key`   | `string` | O nome da variável de ambiente a ser verificada |

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se a variável de ambiente existir, `false` caso contrário |

## Exemplos

```typescript
hasEnv("NODE_ENV");
// => true ou false

hasEnv("INEXISTENTE");
// => false
```

## Notas

* Suporta ambientes Node.js e Deno.
* Útil para verificar a existência de variáveis de ambiente antes de acessá-las.

## Referências

* https://nodejs.org/api/process.html#processenv