# divisors

A função `divisors` calcula todos os divisores de um número, incluindo `1` e o próprio número. Os divisores são retornados em ordem crescente.

## Sintaxe

```typescript
function divisors(num: number): number[]
```

### Parâmetros

| Nome | Tipo     | Descrição                           |
|------|----------|-------------------------------------|
| num  | `number` | O número cujo divisores serão calculados. |

### Retorno

| Tipo       | Descrição                                               |
|------------|---------------------------------------------------------|
| `number[]` | Um array com todos os divisores do número, ordenados em ordem crescente. |

## Exemplos

```typescript
console.log(divisors(12)); // Saída: [1, 2, 3, 4, 6, 12]
console.log(divisors(7));  // Saída: [1, 7]
console.log(divisors(28)); // Saída: [1, 2, 4, 7, 14, 28]
```

## Notas

- A função utiliza a raiz quadrada do número para otimizar o cálculo dos divisores.
- Se o número for um quadrado perfeito, a raiz quadrada será incluída apenas uma vez no resultado.

## Código Fonte

::: code-group
```typescript
function divisors(num: number): number[] {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if (num % index === 0) {
      divisors.push(index);

      if (index !== num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}
```

```javascript
function divisors(num) {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if (num % index === 0) {
      divisors.push(index);

      if (index !== num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}
```
::: 

## Referências

- [Array.prototype.push()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
- [Math.sqrt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)  
- [Array.prototype.sort()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)