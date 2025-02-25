# **Utilitários de String** <Badge type="tip" text="1.0.2" />

As funções utilitárias de string fornecem uma variedade de métodos para manipulação de texto, como transformação, contagem de palavras, sanitização e formatação.

## **Instalação**

Para instalar o pacote de utilitários de string, use um dos seguintes comandos, dependendo do seu gerenciador de pacotes:

::: code-group

```bash [npm]
npm install @utilify/string
```

```bash [yarn]
yarn add @utilify/string
```

```bash [pnpm]
pnpm add @utilify/string
```

:::

Após a instalação, você pode importar as funções no seu projeto, utilizando ESM ou CJS.

::: code-group

```typescript [esm]
import { capitalize, invertCase, maskString, isUpperCase, isLowerCase } from '@utilify/string';
```

```javascript [cjs]
const { capitalize, invertCase, maskString, isUpperCase, isLowerCase } = require('@utilify/string');
```

:::

## **Visão Geral**

Aqui está uma visão geral das funções disponíveis no pacote de utilitários de string:

### [capitalize](./capitalize.md)
```typescript
function capitalize(str: string): string
```
Capitaliza a primeira letra de uma string.

### [invertCase](./invertCase.md)
```typescript
function invertCase(str: string): string
```
Inverte o caso de cada caractere em uma string.

### [isLowerCase](./isLowerCase.md)
```typescript
function isLowerCase(str: string): boolean
```
Verifica se a string está em minúsculas.

### [isUpperCase](./isUpperCase.md)
```typescript
function isUpperCase(str: string): boolean
```
Verifica se a string está em maiúsculas.

### [maskString](./maskString.md)
```typescript
function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*'): string
```
Substitui uma parte da string por um caractere de máscara.

### [removeAccents](./removeAccents.md)
```typescript
function removeAccents(str: string): string
```
Remove os acentos de uma string.

### [slugify](./slugify.md)
```typescript
function slugify(str: string): string
```
Transforma uma string em um formato de URL amigável (slug).

### [toCamelCase](./toCamelCase.md)
```typescript
function toCamelCase(str: string): string
```
Transforma uma string em formato camelCase.

### [toKebabCase](./toKebabCase.md)
```typescript
function toKebabCase(str: string): string
```
Transforma uma string em formato kebab-case.

### [toPascalCase](./toPascalCase.md)
```typescript
function toPascalCase(str: string): string
```
Transforma uma string em formato PascalCase.

### [toSnakeCase](./toSnakeCase.md)
```typescript
function toSnakeCase(str: string): string
```
Transforma uma string em formato snake_case.

### [truncate](./truncate.md)
```typescript
function truncate(text: string, size: number): string
```
Trunca uma string até um tamanho específico e adiciona "..." no final.

### [wordCount](./wordCount.md)
```typescript
function wordCount(str: string): number
```
Conta o número de palavras em uma string.