# getEnv

A função `getEnv` retorna o valor de uma variável de ambiente, com suporte a fallback caso não exista.

## Sintaxe

```typescript
getEnv(key: string, fallback?: string): string | undefined;
```

### Parâmetros

| Nome       | Tipo       | Descrição                                                        |
| ---------- | ---------- | ---------------------------------------------------------------- |
| `key`      | `string`   | O nome da variável de ambiente a ser obtida                      |
| `fallback` | `string`   | Valor alternativo caso a variável não exista (opcional)          |

### Retorno

| Tipo                  | Descrição                                                         |
| --------------------- | ----------------------------------------------------------------- |
| `string` \| `undefined` | O valor da variável de ambiente, ou o fallback, ou `undefined` se nenhum existir |

## Exemplos

```typescript
getEnv("NODE_ENV");
// => "production", "development", etc.

getEnv("INEXISTENTE", "valorPadrao");
// => "valorPadrao"
```

## Notas

* Suporta ambientes Node.js e Deno.
* Retorna o valor do fallback se a variável não existir.

## Referências

* https://nodejs.org/api/process.html#processenv