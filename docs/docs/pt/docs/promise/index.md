# Promise

A Promise module that provides utility functions for working with asynchronous operations and promises. It includes features like backoff retries, benchmarking, debouncing, throttling, parallel execution, and more.

The module helps manage complex asynchronous workflows and provides better control over promise-based operations through various utility functions.

Key features:
- Exponential backoff retries
- Performance benchmarking
- Debouncing and throttling
- Deferred promises
- Exclusive execution locks
- Parallel task execution
- Rate limiting
- Retry mechanisms
- Sleep/delay utilities

## Visão Geral

### [backoff](./backoff.md)
```typescript
backoff(fn: Function, options?: BackoffOptions): Promise<any>;
```
Tenta executar uma função com estratégia de backoff exponencial.

### [benchmark](./benchmark.md)
```typescript
benchmark(fn: Function): Promise<number>;
```
Mede o tempo de execução de uma função assíncrona.

### [debounce](./debounce.md)
```typescript
debounce(fn: Function, wait: number): Function;
```
Retorna uma versão "debounced" de uma função que atrasa sua execução.

### [defer](./defer.md)
```typescript
defer<T>(): { promise: Promise<T>; resolve: Function; reject: Function };
```
Cria uma promise diferida com métodos externos de resolução e rejeição.

### [lock](./lock.md)
```typescript
lock<T>(fn: () => Promise<T>): Promise<T>;
```
Garante que a função assíncrona fornecida execute de forma exclusiva, prevenindo execuções concorrentes.

### [parallel](./parallel.md)
```typescript
parallel(tasks: Function[], concurrency?: number): Promise<any[]>;
```
Executa múltiplas funções assíncronas em paralelo com limite opcional de concorrência.

### [rateLimit](./rateLimit.md)
```typescript
rateLimit(fn: Function, limit: number, interval: number): Function;
```
Retorna uma versão da função limitada por taxa de chamadas.

### [retry](./retry.md)
```typescript
retry(fn: Function, retries: number, delay?: number): Promise<any>;
```
Tenta executar uma função um número especificado de vezes, com atraso opcional.

### [sleep](./sleep.md)
```typescript
sleep(ms: number): Promise<void>;
```
Atrasa a execução por uma quantidade de milissegundos.

### [throttle](./throttle.md)
```typescript
throttle(fn: Function, wait: number): Function;
```
Retorna uma versão "throttled" de uma função que só executa uma vez por intervalo.