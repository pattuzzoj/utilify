# Criptografia

O módulo de Criptografia fornece funções para operações criptográficas comuns, incluindo:

- Codificação/decodificação (Base64, Hex, UTF-8)
- Geração de identificadores únicos
- Utilitários para manipulação de buffers
- Validação e verificação (Base64, Hex, Hash, UUID)

Todas as funções foram projetadas para funcionar tanto no navegador quanto no Node.js, utilizando APIs nativas de criptografia quando disponíveis.

## Visão Geral

[base64Decode](./base64Decode.md)
```typescript
base64Decode(input: string, urlSafe?: boolean): Uint8Array
```
Decodifica uma string Base64 ou Base64URL para um Uint8Array.

[base64Encode](./base64Encode.md)
```typescript
base64Encode(input: Uint8Array | ArrayBuffer, urlSafe?: boolean): string
```
Codifica um ArrayBuffer ou Uint8Array em uma string Base64 ou Base64URL.

[djb2](./djb2.md)
```typescript
djb2(str: string): number
```
Calcula o hash de uma string usando o algoritmo djb2.

[generateNonce](./generateNonce.md)
```typescript
generateNonce(length?: number): Uint8Array
```
Gera um vetor de bytes aleatórios (nonce) do comprimento especificado.

[generateUUID](./generateUUID.md)
```typescript
generateUUID(): string
```
Gera um UUID versão 4 (Identificador Universalmente Único).

[hexDecode](./hexDecode.md)
```typescript
hexDecode(hex: string): Uint8Array
```
Decodifica uma string hexadecimal para um Uint8Array.

[hexEncode](./hexEncode.md)
```typescript
hexEncode(data: ArrayBuffer | Uint8Array): string
```
Codifica um ArrayBuffer ou Uint8Array em uma string hexadecimal.

[isArrayBuffer](./isArrayBuffer.md)
```typescript
isArrayBuffer(input: unknown): input is ArrayBuffer
```
Verifica se o valor fornecido é um ArrayBuffer.

[isBase64](./isBase64.md)
```typescript
isBase64(value: string): boolean
```
Verifica se uma string está codificada em Base64.

[isBase64URL](./isBase64URL.md)
```typescript
isBase64URL(value: string): boolean
```
Verifica se uma string está codificada em Base64URL.

[isHash](./isHash.md)
```typescript
isHash(hash: string, algorithm: HashAlgorithm = 'SHA-256'): boolean
```
Verifica se uma string é um hash válido para o algoritmo especificado.

[isHex](./isHex.md)
```typescript
isHex(value: string): boolean
```
Verifica se uma string contém apenas caracteres hexadecimais.

[isUint8Array](./isUint8Array.md)
```typescript
isUint8Array(input: unknown): input is Uint8Array
```
Verifica se o valor fornecido é um Uint8Array.

[isUUID](./isUUID.md)
```typescript
isUUID(value: string): boolean
```
Verifica se uma string está no formato UUID (Identificador Universalmente Único).

[utf8Decode](./utf8Decode.md)
```typescript
utf8Decode(data: ArrayBuffer | Uint8Array): string
```
Decodifica um ArrayBuffer ou Uint8Array para uma string UTF-8.

[utf8Encode](./utf8Encode.md)
```typescript
utf8Encode(input: string): Uint8Array
```
Codifica uma string em UTF-8, retornando um Uint8Array.