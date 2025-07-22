# formatDuration

A função `formatDuration` converte uma duração em milissegundos para uma string legível, como "2h 30m" ou "1d 4h".

## Sintaxe

```typescript
formatDuration(ms: number, options?: { compact?: boolean }): string;
```

### Parâmetros

| Nome      | Tipo                         | Descrição                                         |
| --------- | ---------------------------- | ------------------------------------------------ |
| `ms`      | `number`                     | Duração em milissegundos                          |
| `options` | `{ compact?: boolean }`      | (Opcional) Opções de formatação (ex: compacta)   |

### Retorno

| Tipo      | Descrição                              |
| --------- | --------------------------------------- |
| `string`  | Duração formatada em formato legível    |

## Exemplos

```typescript
formatDuration(90061000);
// => "1d 1h 1m 1s"

formatDuration(5400000, { compact: true });
// => "1h 30m"
```

## Notas

* Lança um erro se o valor não for um número válido.
* Útil para exibir intervalos de tempo de forma amigável ao usuário.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date