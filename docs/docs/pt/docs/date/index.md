# Date <Badge type="tip" text="1.0.1" />

O pacote `@utilify/date` oferece utilitários essenciais para manipulação de datas e tempos em JavaScript e TypeScript. Essas funções foram projetadas para serem intuitivas, eficientes e seguras por tipo.

## Installation

To install the **Date** package, use one of the following commands:

::: code-group

```bash [npm]
npm install @utilify/date
```

```bash [yarn]
yarn add @utilify/date
```

```bash [pnpm]
pnpm add @utilify/date
```

:::

Import the functions into your project:

::: code-group

```typescript [esm]
import { formatDate, isLeapYear } from '@utilify/date';
```

```javascript [cjs]
const { formatDate, isLeapYear } = require('@utilify/date');
```

:::

## Visão Geral

### [adjustDate](./adjustDate.md)

```typescript
function adjustDate(date: Date, amount: number, unit: TimeUnit): Date
```
Ajusta uma data adicionando ou subtraindo um intervalo de tempo.

### [adjustTimezone](./adjustTimezone.md)

```typescript
function adjustTimezone(date: Date, timezoneOffset: number): Date
```
Converte uma data para um fuso horário diferente.

### [convertTimeUnit](./convertTimeUnit.md)

```typescript
function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number
```
Converte unidades de tempo, como milissegundos para minutos.

### [convertDateTo](./convertDateTo.md)

```typescript
function convertDateTo(date: Date, format: DateFormat): string | undefined
```
Converte uma data para outro formato ou representação.

### [formatDate](./formatDate.md)

```typescript
function formatDate(date: Date, format: DateFormat = "DMY", separator: string = "/"): string | undefined
```
Formata uma data em uma string amigável ao usuário.

### [formatDuration](./formatDuration.md)

```typescript
function formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string
```
Formata uma duração de tempo em uma string legível.

### [formatTime](./formatTime.md)

```typescript
function formatTime(date: Date, format: string = "hh:mm:ss"): string | undefined
```
Formata o componente de tempo de uma data.

### [isLeapYear](./isLeapYear.md)

```typescript
function isLeapYear(year: number): boolean
```
Verifica se um ano é bissexto.

### [isValidDate](./isValidDate.md)

```typescript
function isValidDate(date: Date): boolean
```
Valida se um objeto ou string representa uma data válida.

### [isValidDateString](./isValidDateString.md)

```typescript
function isValidDateString(date: string): boolean
```
Valida se uma string segue um formato de data reconhecido.

### [isWeekday](./isWeekday.md)

```typescript
function isWeekday(date: Date): boolean | undefined
```
Verifica se uma data é um dia útil (segunda a sexta-feira).

### [isWeekend](./isWeekend.md)

```typescript
function isWeekend(date: Date): boolean | undefined
```
Verifica se uma data é um fim de semana (sábado ou domingo).

### [parseDate](./parseDate.md)

```typescript
function parseDate(date: string): Date | undefined
```
Converte uma string ou número para um objeto `Date`.