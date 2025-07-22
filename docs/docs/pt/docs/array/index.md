# Array

O módulo Array fornece uma coleção abrangente de funções utilitárias para manipulação de arrays em TypeScript/JavaScript. Estas funções permitem realizar operações comuns como transformação, filtragem, agrupamento e reorganização de elementos de forma eficiente e segura.

Todas as funções são projetadas para serem imutáveis, ou seja, elas não modificam o array original, mas retornam uma nova cópia com as alterações aplicadas. Isso ajuda a manter a previsibilidade do código e evita efeitos colaterais indesejados.

As funções deste módulo podem ser usadas tanto com arrays simples quanto com arrays de objetos complexos, oferecendo flexibilidade para diferentes casos de uso. Muitas das funções também incluem suporte para trabalhar com strings, tratando-as como arrays de caracteres quando apropriado.

Principais características:
- Funções imutáveis que preservam o array original
- Tipagem forte com TypeScript
- Suporte para arrays e strings
- Operações de transformação, filtragem e agregação
- Funções utilitárias para manipulação de elementos

## Visão Geral

[adjust](./adjust.md)
```typescript
adjust<T>(array: T[], index: number, fn: (value: T) => T): T[]
```
Aplica uma função a um elemento em um índice específico de um array, retornando um novo array com o valor ajustado.

[after](./after.md)
```typescript
after<T>(array: T[] | string, index: number): T[] | string
```
Retorna todos os elementos de um array ou caracteres de uma string após o índice especificado.

[aperture](./aperture.md)
```typescript
aperture<T>(array: T[], size: number = 1): T[][]
```
Retorna uma lista de subconjuntos consecutivos de tamanho fixo extraídos de um array.

[append](./append.md)
```typescript
append<T>(array: T[], value: T): T[]
```
Adiciona um valor ao final de um array, retornando um novo array.

[arrayToObject](./arrayToObject.md)
```typescript
arrayToObject<T, K extends PropertyKey>(array: T[], keyFn?: (item: T, index: number, array: T[]) => K, valueFn?: (item: T, index: number, array: T[]) => any): Record<K, any>
```
Converte um array em um objeto, usando funções para determinar as chaves e valores.

[before](./before.md)
```typescript
before<T>(array: T[] | string, index: number): T[] | string
```
Retorna todos os elementos de um array ou caracteres de uma string antes do índice especificado.

[chunk](./chunk.md)
```typescript
chunk<T>(array: T[], size: number): T[][]
chunk(string: string, size: number): string
```
Divide um array ou string em partes menores de tamanho fixo.

[collectBy](./collectBy.md)
```typescript
collectBy<T, K extends PropertyKey>(array: T[], keySelector: (value: T, index: number) => K): T[][]
```
Agrupa elementos de um array em subarrays com base em uma função seletora de chave.

[compact](./compact.md)
```typescript
compact<T>(array: T[]): T[]
```
Remove valores falsy de um array.

[count](./count.md)
```typescript
count(array: any[] | string): number
```
Retorna o número de elementos em um array ou caracteres em uma string.

[cycle](./cycle.md)
```typescript
cycle<T>(array: T[], times: number): T[]
cycle(string: string, times: number): string
```
Repete os elementos de um array ou caracteres de uma string um número especificado de vezes.

[difference](./difference.md)
```typescript
difference<T>(array: T[], ...values: T[][]): T[]
```
Retorna um novo array com os elementos do primeiro array que não estão presentes nos demais arrays fornecidos.

[first](./first.md)
```typescript
first<T>(array: T[]): T | undefined
first(string: string): string | undefined
```
Retorna o primeiro elemento de um array ou o primeiro caractere de uma string.

[flat](./flat.md)
```typescript
flat<T>(array: any[], depth?: number): T[]
```
"Achata" um array de arrays em um único array até a profundidade especificada.

[flatMap](./flatMap.md)
```typescript
flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[]
```
Aplica uma função a cada elemento de um array e "achata" o resultado em um novo array.

[groupBy](./groupBy.md)
```typescript
groupBy<T, K extends PropertyKey>(array: T[], keySelector: (value: T, index: number) => K): Record<K, T[]>
```
Agrupa os elementos de um array de acordo com o valor retornado por uma função seletora de chave.

[includes](./includes.md)
```typescript
includes<T>(array: T[] | string, value: T | string, fromIndex?: number): boolean
```
Verifica se um array ou string contém um determinado valor.

[isIterable](./isIterable.md)
```typescript
isIterable(value: any): value is Iterable<any>
```
Verifica se um valor é iterável (possui o método `Symbol.iterator`).

[last](./last.md)
```typescript
last<T>(array: T[], count?: number): T[]
last(string: string, count?: number): string
```
Retorna o(s) último(s) elemento(s) de um array ou caractere(s) de uma string.

[reject](./reject.md)
```typescript
reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[]
```
Retorna um novo array com os elementos que não satisfazem a função de teste fornecida.

[repeat](./repeat.md)
```typescript
repeat<T>(value: T, count: number): T[]
repeat(value: string, count: number): string
```
Cria um novo array ou string repetindo o valor informado um número específico de vezes.

[rotate](./rotate.md)
```typescript
rotate<T>(array: T[], offset: number): T[]
```
Desloca os elementos de um array para a esquerda ou direita, conforme o offset informado.

[sample](./sample.md)
```typescript
sample<T>(array: T[]): T | undefined
```
Retorna um elemento aleatório de um array.

[shuffle](./shuffle.md)
```typescript
shuffle<T>(array: T[]): T[]
```
Embaralha os elementos de um array de forma aleatória.

[swap](./swap.md)
```typescript
swap<T>(array: T[], indexA: number, indexB: number): T[]
```
Troca os elementos de duas posições em um array.

[union](./union.md)
```typescript
union<T>(...arrays: T[][]): T[]
```
Retorna um novo array contendo todos os elementos únicos de dois ou mais arrays.

[unique](./unique.md)
```typescript
unique<T>(array: T[]): T[]
```
Retorna um novo array contendo apenas os elementos únicos do array original.

[unzip](./unzip.md)
```typescript
unzip<T>(array: T[][]): T[][]
```
Transforma um array de arrays agrupados em arrays de elementos correspondentes.

[zip](./zip.md)
```typescript
zip<T>(...arrays: T[][]): T[][]
```
Agrupa elementos de dois ou mais arrays em arrays de pares correspondentes.

