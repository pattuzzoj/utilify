# **Utilitários Math** <Badge type="tip" text="1.0.2" />

As funções utilitárias de matemática fornecem métodos para realizar operações comuns e complexas de matemática. Essas funções podem ser extremamente úteis para operações de números, como cálculos de médias, verificação de números primos, e outras manipulações matemáticas.

## **Instalação**

Para instalar o pacote de utilitários matemáticos, use um dos seguintes comandos, dependendo do seu gerenciador de pacotes:

::: code-group

```bash [npm]
npm install @utilify/math
```

```bash [yarn]
yarn add @utilify/math
```

```bash [pnpm]
pnpm add @utilify/math
```

:::

Após a instalação, você pode importar as funções no seu projeto, utilizando ESM ou CJS.

::: code-group

```typescript [esm]
import { average, clamp, divisors } from '@utilify/math';
```

```javascript [cjs]
const { average, clamp, divisors } = require('@utilify/math');
```

:::

## **Visão Geral**

Aqui está uma visão geral das funções disponíveis no pacote de utilitários matemáticos:

### [average](./average.md)
```typescript
function average(values: number[]): number;
```
Retorna a média aritmética dos valores fornecidos.

### [clamp](./clamp.md)
```typescript
function clamp(value: number, min: number, max: number): number;
```
Restringe o valor fornecido ao intervalo entre um valor mínimo e máximo.

### [divisors](./divisors.md)
```typescript
function divisors(num: number): number[];
```
Retorna um array com todos os divisores de um número.

### [factorial](./factorial.md)
```typescript
function factorial(value: number): number;
```
Calcula o fatorial de um número.

### [fibonacci](./fibonacci.md)
```typescript
function fibonacci(num: number): number;
```
Retorna o número de Fibonacci na posição fornecida.

### [frequency](./frequency.md)
```typescript
function frequency<T>(arr: T[]): Record<string, number>;
```
Retorna um objeto com a frequência de cada valor em um array.

### [isBetween](./isBetween.md)
```typescript
function isBetween(value: number, min: number, max: number): boolean;
```
Verifica se um valor está dentro de um intervalo específico.

### [isEven](./isEven.md)
```typescript
function isEven(value: number): boolean;
```
Verifica se o número fornecido é par.

### [isInteger](./isInteger.md)
```typescript
function isInteger(value: number): boolean;
```
Verifica se o valor fornecido é um número inteiro.

### [isOdd](./isOdd.md)
```typescript
function isOdd(value: number): boolean;
```
Verifica se o número fornecido é ímpar.

### [isPrime](./isPrime.md)
```typescript
function isPrime(num: number): boolean;
```
Verifica se o número fornecido é primo.

### [random](./random.md)
```typescript
function random(min: number = 0, max: number = 10): number;
```
Retorna um número aleatório entre o valor mínimo e máximo fornecido.

### [round](./round.md)
```typescript
function round(value: number, precision: number): number;
```
Arredonda um número para o número de casas decimais especificado.

### [sum](./sum.md)
```typescript
function sum(values: number[]): number;
```
Retorna a soma de todos os valores de um array.

### [sumOfDigits](./sumOfDigits.md)
```typescript
function sumOfDigits(num: number): number;
```
Retorna a soma dos dígitos de um número.