# Utilitários - Crypto <Badge type="tip" text="1.0.2" />

A categoria **Crypto** contém funções que facilitam a geração de hashes criptográficos e a criação de identificadores únicos. Essas funções são úteis para garantir segurança e integridade dos dados em aplicações web e de back-end.

## Instalação

Para instalar o pacote **Crypto**, utilize um dos comandos abaixo:

::: code-group

```bash [npm]
npm install @utilify/crypto
```

```bash [yarn]
yarn add @utilify/crypto
```

```bash [pnpm]
pnpm add @utilify/crypto
```

:::

Importe as funções no seu projeto:

::: code-group

```typescript [esm]
import { djb2, hash, randomUUID } from '@utilify/crypto';
```

```javascript [cjs]
const { djb2, hash, randomUUID } = require('@utilify/crypto');
```

:::

## Visão Geral

### [djb2](./djb2.md)

```typescript
function djb2(str: string): string;
```

Calcula o **hash DJB2** de uma string. O algoritmo DJB2 é uma forma rápida e eficiente de gerar um hash a partir de uma entrada de texto.

### [hash](./hash.md)

```typescript
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>;
```

Gera um hash criptográfico dos dados fornecidos, usando o algoritmo e formato de saída especificados.

### [randomUUID](./randomUUID.md)

```typescript
function randomUUID(): string | undefined;
```

Gera um UUID seguro utilizando a API Web Crypto do navegador. Retorna `undefined` se a API não estiver disponível.