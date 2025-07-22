# elapsedTime

A função `elapsedTime` calcula o tempo decorrido entre duas datas e retorna o resultado em milissegundos, segundos, minutos, horas ou dias.

## Sintaxe

```typescript
elapsedTime(start: Date, end: Date, unit?: string): number;
```

### Parâmetros

| Nome    | Tipo      | Descrição                                                      |
| ------- | --------- | ------------------------------------------------------------- |
| `start` | `Date`    | Data inicial                                                   |
| `end`   | `Date`    | Data final                                                     |
| `unit`  | `string`  | (Opcional) Unidade de tempo: `'ms'`, `'s'`, `'min'`, `'h'`, `'d'` |

### Retorno

| Tipo      | Descrição                                 |
| --------- | ----------------------------------------------- |
| `number`  | Tempo decorrido na unidade especificada         |

## Exemplos

```typescript
elapsedTime(new Date("2024-06-10T10:00:00Z"), new Date("2024-06-10T12:00:00Z"), 'h');
// => 2

elapsedTime(new Date("2024-06-10T10:00:00Z"), new Date("2024-06-10T10:01:00Z"), 'min');
// => 1
```

## Notas

* Lança um erro se as datas não forem válidas.
* Útil para medir intervalos de tempo entre eventos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date