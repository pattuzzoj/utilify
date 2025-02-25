# Array <Badge type="tip" text="2.0.0" />

As **funções utilitárias de array** fornecem uma variedade de métodos para manipular e transformar arrays e strings. Elas ajudam a simplificar operações comuns como dividir, achatar, embaralhar e encontrar diferenças entre arrays, entre outras.

## Instalação

Para instalar as funções utilitárias de array, use um dos seguintes comandos dependendo do seu gerenciador de pacotes:

::: code-group

```bash
npm install @utilify/array
```

```bash
yarn add @utilify/array
```

```bash
pnpm add @utilify/array
```

:::

Após a instalação, você pode importar as funções para seu projeto usando ESM ou CJS.

## Uso

Esta biblioteca suporta tanto o sistema de módulos ESM quanto CJS.

::: code-group

```typescript
import { shuffle } from '@utilify/array';
```

```javascript
const { shuffle } = require('@utilify/array');
``` 

:::

## Visão Geral

Aqui está uma visão geral das funções disponíveis no pacote de utilitários de array e string:

### [after](./after)

```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
```

Retorna elementos após o índice especificado.

### [before](./before)

```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
```

Retorna os elementos do array ou string antes do índice `index`.

### [chunk](./chunk)

```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
```

Divide o array ou string em pedaços menores de tamanho `size`.

### [compact](./compact)

```typescript
function compact<T>(arr: T[]): T[];
```

Remove valores "falsy" (`false`, `null`, `0`, `""`, `undefined`, `NaN`) do array.

### [difference](./difference)

```typescript
function difference<T>(arr1: T[], arr2: T[]): T[];
```

Retorna os elementos do primeiro array que não estão presentes no segundo array.

### [first](./first)

```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
```

Retorna os primeiros `count` elementos do array ou string.

### [flattenArr](./flattenArr)

```typescript
function flattenArr<T>(arr: T[], depth?: number): FlatArray<T[], number>[];
```

Achata o array até a profundidade especificada.

### [sample](./sample)

```typescript
function sample(str: string): string;
function sample<T>(arr: T[]): T;
```

Retorna um elemento aleatório do array ou string.

### [isIterable](./isIterable)

```typescript
function isIterable(value: any): boolean;
```

Verifica se o valor é iterável.

### [last](./last)

```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
```

Retorna os últimos `count` elementos do array ou string.

### [rotate](./rotate)

```typescript
function rotate<T>(arr: T[], offset: number): T[];
```

Rotaciona os elementos do array em `offset` posições.

### [sanitizeArr](./sanitizeArr)

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[];
```

Remove ou substitui os valores especificados no array.

### [shuffle](./shuffle)

```typescript
function shuffle<T>(arr: T[]): T[];
```

Embaralha os elementos do array.

### [swap](./swap)

```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[];
```

Troca os elementos nas posições `fromIndex` e `toIndex`.

### [union](./union)

```typescript
function union<T>(...arrs: T[][]): T[];
```

Retorna a união de múltiplos arrays.

### [unique](./unique)

```typescript
function unique<T>(arr: T[]): T[];
```

Retorna um array com elementos únicos.