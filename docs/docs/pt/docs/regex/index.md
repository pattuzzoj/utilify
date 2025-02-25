# Regex <Badge type="tip" text="1.0.2" />

As funções utilitárias de regex fornecem métodos para validação de padrões comuns, como endereços de email, URLs, UUIDs, entre outros.

## **Instalação**

Para instalar o pacote de utilitários regex, utilize o comando apropriado:

::: code-group

```bash [npm]
npm install @utilify/regex
```

```bash [yarn]
yarn add @utilify/regex
```

```bash [pnpm]
pnpm add @utilify/regex
```

:::

Importe as funções no seu projeto:

::: code-group

```typescript [esm]
import { isAlpha, isAlphanumeric, isEmail, isURL } from '@utilify/regex';
```

```javascript [cjs]
const { isAlpha, isAlphanumeric, isEmail, isURL } = require('@utilify/regex');
```

:::

## **Funções Disponíveis**

### [isAlpha](./isAlpha.md)
```typescript
function isAlpha(value: string): boolean;
```
Verifica se a string contém apenas letras (a-z e A-Z).

### [isAlphanumeric](./isAlphanumeric.md)
```typescript
function isAlphanumeric(value: string): boolean;
```
Verifica se a string contém apenas letras e números (a-z, A-Z, 0-9).

### [isBase64](./isBase64.md)
```typescript
function isBase64(value: string): boolean;
```
Verifica se a string está codificada no formato Base64.

### [isCreditCard](./isCreditCard.md)
```typescript
function isCreditCard(value: string): boolean;
```
Verifica se a string segue o padrão de um número de cartão de crédito válido.

### [isEmail](./isEmail.md)
```typescript
function isEmail(value: string): boolean;
```
Verifica se a string é um endereço de email válido.

### [isIPV4](./isIPV4.md)
```typescript
function isIPV4(value: string): boolean;
```
Verifica se a string é um endereço IP no formato IPv4.

### [isIPV6](./isIPV6.md)
```typescript
function isIPV6(value: string): boolean;
```
Verifica se a string é um endereço IP no formato IPv6.

### [isSlug](./isSlug.md)
```typescript
function isSlug(value: string): boolean;
```
Verifica se a string está no formato de um slug amigável para URLs.

### [isURL](./isURL.md)
```typescript
function isURL(value: string): boolean;
```
Verifica se a string é uma URL válida.

### [isUUID](./isUUID.md)
```typescript
function isUUID(value: string): boolean;
```
Verifica se a string segue o formato de um UUID válido.