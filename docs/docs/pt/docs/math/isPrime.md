# isPrime

A função `isPrime` verifica se um número dado é primo. Ela retorna `true` se o número for primo e `false` caso contrário.

## Sintaxe

```typescript
function isPrime(num: number): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| num   | `number` | O número a ser verificado se é primo.          |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `boolean` | `true` se o número for primo, `false` caso contrário. |

## Exemplos

```typescript
console.log(isPrime(2));   // Saída: true
console.log(isPrime(3));   // Saída: true
console.log(isPrime(4));   // Saída: false
console.log(isPrime(17));  // Saída: true
console.log(isPrime(18));  // Saída: false
```

## Notas

- A função trata primeiro os casos em que números menores que 2 não são primos e verifica se o número é divisível por 2 para uma saída antecipada.
- Em seguida, a função itera pelos números ímpares até a raiz quadrada do número, verificando divisibilidade.
- A complexidade temporal é otimizada ao verificar até a raiz quadrada do número e ao pular os números pares após o 2.

## Código Fonte

::: code-group
```typescript
function isPrime(num: number): boolean {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}
```

```javascript
function isPrime(num) {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}
```
::: 

## Referências

- [Math.sqrt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
- [Operador de Módulo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Modulo)