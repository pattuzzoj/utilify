# guard

A função `guard` é uma utilidade que executa condicionalmente uma das duas funções com base no resultado de uma validação. Se o valor passar pela função de validação, a função `callback` é executada; caso contrário, a função `fallback` é executada.

## Sintaxe

```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U;
```

### Parâmetros

| Nome        | Tipo                  | Descrição                                                        |
|-------------|-----------------------|------------------------------------------------------------------|
| `validator` | `(value: T) => boolean` | Uma função que valida o valor. Ela deve retornar `true` ou `false`. |
| `callback`  | `(value: T) => U`      | Uma função executada se o valor for válido (quando o `validator` retorna `true`). |
| `fallback`  | `(value: T) => U`      | Uma função executada se o valor for inválido (quando o `validator` retorna `false`). |

### Retorno

| Tipo            | Descrição                                             |
|-----------------|-------------------------------------------------------|
| `(value: T) => U` | Uma função que aplica a lógica de validação e retorna o resultado de `callback` ou `fallback`. |

## Exemplos

### Exemplo 1: Uso básico com números

```typescript
const isPositive = (value: number): boolean => value > 0;
const increment = (value: number): number => value + 1;
const decrement = (value: number): number => value - 1;

const processNumber = guard(isPositive, increment, decrement);

console.log(processNumber(5));  // Saída: 6 (valor positivo, função increment é chamada)
console.log(processNumber(-3)); // Saída: -4 (valor negativo, função decrement é chamada)
```

### Exemplo 2: Validando strings com uma condição personalizada de comprimento

```typescript
const isLongString = (value: string): boolean => value.length > 5;
const capitalize = (value: string): string => value.toUpperCase();
const shorten = (value: string): string => value.slice(0, 3);

const processString = guard(isLongString, capitalize, shorten);

console.log(processString("Hello World")); // Saída: "HELLO WORLD" (comprimento > 5, função capitalize chamada)
console.log(processString("Hi"));          // Saída: "Hi" (comprimento <= 5, função shorten chamada)
```

## Notas

- A função `guard` pode ser usada em diversas situações, como validação de formulários, processamento condicional ou transformação de dados.
- Os tipos genéricos `T` e `U` permitem que a função `guard` trabalhe com qualquer tipo de dado, garantindo flexibilidade em diferentes casos de uso.

## Código

::: code-group
```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U {
  return (value: T): U => validator(value) ? callback(value) : fallback(value);
}
```

```javascript
function guard(validator, callback, fallback) {
  return (value) => validator(value) ? callback(value) : fallback(value);
}
```
:::

## Referências

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Funções)
- [Operador ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_condicional)