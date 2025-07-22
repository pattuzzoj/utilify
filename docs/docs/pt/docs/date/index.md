# Date

O módulo de datas oferece funções utilitárias para manipulação, formatação e cálculo de datas e horários. Com estas funções, é possível:

- Obter a data e hora atual em diferentes formatos
- Adicionar ou subtrair dias, meses ou anos
- Calcular diferenças entre datas
- Validar e analisar strings de data
- Converter entre fusos horários

## Visão Geral

[addDays](./addDays.md)
```typescript
addDays(date: Date | string, days: number): Date
```
Adiciona um número de dias a uma data.

[addMonths](./addMonths.md)
```typescript
addMonths(date: Date | string, months: number): Date
```
Adiciona um número de meses a uma data.

[addYears](./addYears.md)
```typescript
addYears(date: Date | string, years: number): Date
```
Adiciona um número de anos a uma data.

[dateDiff](./dateDiff.md)
```typescript
dateDiff(date1: Date | string, date2: Date | string, unit?: "days" | "months" | "years"): number
```
Calcula a diferença entre duas datas na unidade especificada.

[formatDate](./formatDate.md)
```typescript
formatDate(date: Date | string, format?: string): string
```
Formata uma data de acordo com o padrão especificado.

[getDay](./getDay.md)
```typescript
getDay(date: Date | string): number
```
Obtém o dia do mês de uma data.

[getMonth](./getMonth.md)
```typescript
getMonth(date: Date | string): number
```
Obtém o mês de uma data (0-11).

[getYear](./getYear.md)
```typescript
getYear(date: Date | string): number
```
Obtém o ano de uma data.

[isLeapYear](./isLeapYear.md)
```typescript
isLeapYear(year: number): boolean
```
Verifica se um ano é bissexto.

[isValidDate](./isValidDate.md)
```typescript
isValidDate(date: any): boolean
```
Verifica se um valor é uma data válida.

[now](./now.md)
```typescript
now(): Date
```
Retorna a data e hora atual.

[parseDate](./parseDate.md)
```typescript
parseDate(dateStr: string, format?: string): Date | null
```
Analisa uma string de data e retorna um objeto Date ou null.

[subtractDays](./subtractDays.md)
```typescript
subtractDays(date: Date | string, days: number): Date
```
Subtrai um número de dias de uma data.

[subtractMonths](./subtractMonths.md)
```typescript
subtractMonths(date: Date | string, months: number): Date
```
Subtrai um número de meses de uma data.

[subtractYears](./subtractYears.md)
```typescript
subtractYears(date: Date | string, years: number): Date
```
Subtrai um número de anos de uma data.
