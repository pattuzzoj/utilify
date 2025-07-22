# equalsEnv

A função `equalsEnv` verifica se o valor de uma variável de ambiente corresponde ao valor esperado.

## Sintaxe

```typescript
equalsEnv(key: string, expected: string | string[]): boolean;
```

### Parâmetros

| Nome       | Tipo                 | Descrição                                                    |
| ---------- | -------------------- | ------------------------------------------------------------ |
| `key`      | `string`             | O nome da variável de ambiente a ser verificada              |
| `expected` | `string` \| `string[]` | O valor ou lista de valores esperados para comparação        |

### Retorno

| Tipo       | Descrição                                                                 |
| ---------- | ------------------------------------------------------------------------- |
| `boolean`  | `true` se o valor da variável de ambiente corresponder ao esperado, `false` caso contrário |

## Exemplos

```typescript
equalsEnv("NODE_ENV", "production");
// => true ou false

equalsEnv("NODE_ENV", ["development", "test"]);
// => true se NODE_ENV for "development" ou "test"
```

## Notas

* Utiliza a função `getEnv` para obter o valor da variável de ambiente.
* Permite comparar com múltiplos valores esperados usando um array.

## Referências

* https://nodejs.org/api/process.html#processenv