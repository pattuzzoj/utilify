# Function

O módulo `function` fornece um conjunto de utilitários para manipulação e composição de funções. Estas utilidades ajudam a criar funções mais flexíveis e reutilizáveis, facilitando operações comuns como memoização, composição funcional e aplicação parcial de argumentos.

Principais recursos:
- Composição de funções (`compose`, `pipe`)
- Memoização de resultados (`memo`) 
- Aplicação parcial de argumentos (`partialLeft`, `partialRight`)
- Funções utilitárias (`identity`, `noop`, `not`, `once`)
- Execução condicional (`when`)
- Execução repetida (`times`)

## Visão Geral

[compose](./compose.md)
```typescript
compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```
Cria uma função composta que executa uma sequência de funções da direita para a esquerda.

[identity](./identity.md)
```typescript
identity<T>(value: T): T
```
Retorna o valor recebido sem modificações.

[memo](./memo.md)
```typescript
memo<T extends (...args: any[]) => any>(callback: T, options?: { cacheTimeout?: number, serializer?: (args: Parameters<T>) => string }): (...args: Parameters<T>) => ReturnType<T>
```
Cria uma função memoizada que armazena em cache os resultados de chamadas anteriores.

[noop](./noop.md)
```typescript
noop(): void
```
Função que não faz nada (no operation).

[not](./not.md)
```typescript
not<T extends (...args: any[]) => boolean>(callback: T): (...args: Parameters<T>) => boolean
```
Cria uma função que retorna o valor booleano invertido do resultado da função fornecida.

[once](./once.md)
```typescript
once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T>
```
Cria uma função que só pode ser executada uma vez; chamadas subsequentes retornam o resultado da primeira execução.

[partialLeft](./partialLeft.md)
```typescript
partialLeft<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R,
  ...partial: P
): (...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R
```
Cria uma nova função com argumentos pré-preenchidos à esquerda.

[partialRight](./partialRight.md)
```typescript
partialRight<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R | Promise<R>,
  ...partial: P
): (...args: DropLast<Args, P>) => R | Promise<R>
```
Cria uma nova função com argumentos pré-preenchidos à direita.

[pipe](./pipe.md)
```typescript
pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```
Cria uma função composta que executa uma sequência de funções da esquerda para a direita.

[times](./times.md)
```typescript
times<T>(callback: (index: number) => T, count: number): T[]
```
Executa uma função callback um número específico de vezes, retornando um array com os resultados.

[when](./when.md)
```typescript
when<T extends (...args: any) => any>(
  predicate: (...args: any) => boolean,
  action: T
): (...args: Parameters<T>) => ReturnType<T> | undefined
```
Cria uma função que executa uma ação somente se o predicado for verdadeiro.
