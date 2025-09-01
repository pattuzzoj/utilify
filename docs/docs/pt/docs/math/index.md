# Math

O módulo Math fornece um conjunto abrangente de funções matemáticas e estatísticas para manipulação e análise de números. Desde operações básicas como adição e multiplicação até cálculos mais complexos como desvio padrão e sequência de Fibonacci, este módulo oferece ferramentas essenciais para processamento numérico.

As funções são projetadas para serem intuitivas e fáceis de usar, mantendo alta performance mesmo com grandes conjuntos de dados. Todas implementam verificações de erro apropriadas e seguem as melhores práticas de programação.

## Visão Geral

[add](./add.md)
```typescript
add(...values: number[]): number
```
Soma todos os valores numéricos fornecidos como argumentos.

[clamp](./clamp.md)
```typescript
clamp(value: number, min: number, max: number): number
```
Restringe um valor a um intervalo definido por limites mínimo e máximo.

[divide](./divide.md)
```typescript
divide(dividend: number, divisor: number): number
```
Divide um número (dividendo) por outro (divisor).

[factorial](./factorial.md)
```typescript
factorial(value: number): number
```
Calcula o fatorial de um número inteiro não negativo.

[fibonacci](./fibonacci.md)
```typescript
fibonacci(num: number): number
```
Calcula o n-ésimo número da sequência de Fibonacci.

[frequency](./frequency.md)
```typescript
frequency(arr: any[]): Record<PropertyKey, number>
```
Conta a frequência de cada elemento em um array, retornando um objeto com as ocorrências.

[lerp](./lerp.md)
```typescript
lerp(start: number, end: number, amount: number): number
```
Realiza a interpolação linear entre dois valores numéricos.

[mean](./mean.md)
```typescript
mean(values: number[]): number
```
Calcula a média aritmética de um array de números.

[median](./median.md)
```typescript
median(arr: number[]): number
```
Calcula a mediana de um array de números.

[mod](./mod.md)
```typescript
mod(dividend: number, divisor: number): number
```
Calcula o módulo (resto) da divisão entre dois números, sempre retornando um valor não negativo.

[mode](./mode.md)
```typescript
mode(numbers: number[]): number[]
```
Calcula o(s) valor(es) que mais aparecem em um array de números.

[multiply](./multiply.md)
```typescript
multiply(...values: number[]): number
```
Multiplica dois ou mais valores numéricos.

[pow](./pow.md)
```typescript
pow(base: number, exponent: number): number
```
Calcula a potência de um número elevado a outro.

[random](./random.md)
```typescript
random(min?: number, max?: number): number
```
Gera um número aleatório dentro de um intervalo especificado.

[roundTo](./roundTo.md)
```typescript
roundTo(value: number, decimals: number): number
```
Arredonda um número para uma quantidade específica de casas decimais.

[std](./std.md)
```typescript
std(numbers: number[]): number
```
Calcula o desvio padrão de um array de números.

[subtract](./subtract.md)
```typescript
subtract(...values: number[]): number
```
Subtrai dois ou mais valores numéricos sequencialmente.

[variance](./variance.md)
```typescript
variance(numbers: number[]): number
```
Calcula a variância amostral de um array de números.

