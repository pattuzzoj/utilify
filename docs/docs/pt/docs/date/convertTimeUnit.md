# convertTimeUnit

A função `convertTimeUnit` converte valores entre diferentes unidades de tempo, como milissegundos, segundos, minutos, horas e dias.

## Sintaxe

```typescript
convertTimeUnit(value: number, from: string, to: string): number;
```

### Parâmetros

| Nome    | Tipo      | Descrição                                         |
| ------- | --------- | ------------------------------------------------- |
| `value` | `number`  | Valor a ser convertido                            |
| `from`  | `string`  | Unidade de origem (`'ms'`, `'s'`, `'min'`, `'h'`, `'d'`) |
| `to`    | `string`  | Unidade de destino (`'ms'`, `'s'`, `'min'`, `'h'`, `'d'`) |

### Retorno

| Tipo      | Descrição                              |
| --------- | --------------------------------------- |
| `number`  | Valor convertido na unidade de destino  |

## Exemplos

```typescript
convertTimeUnit(2, 'h', 'min');
// => 120

convertTimeUnit(3600, 's', 'h');
// => 1
```

## Notas

* Lança um erro se as unidades forem inválidas.
* Útil para cálculos envolvendo diferentes escalas de tempo.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date