# random

A função `random` gera um número aleatório dentro de um intervalo especificado. O número gerado será um valor inteiro entre `min` e `max` (inclusive).

## Sintaxe

```typescript
function random(min: number = 0, max: number = 10): number
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| min   | `number` | O valor mínimo do intervalo (inclusivo). O valor padrão é 0. |
| max   | `number` | O valor máximo do intervalo (inclusivo). O valor padrão é 10. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `number` | Um número inteiro aleatório dentro do intervalo especificado. |

## Exemplos

```typescript
console.log(random());        // Saída: número aleatório entre 0 e 10
console.log(random(1, 100));  // Saída: número aleatório entre 1 e 100
console.log(random(50, 60)); // Saída: número aleatório entre 50 e 60
```

## Notas

- A função utiliza `Math.random()` para gerar um número aleatório e `Math.floor()` para arredondá-lo para baixo, garantindo que o valor gerado seja um número inteiro.
- O intervalo é fechado, ou seja, tanto `min` quanto `max` podem ser gerados.

## Código Fonte

::: code-group
```typescript
function random(min: number = 0, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

```javascript
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```
::: 

## Referências

- [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)