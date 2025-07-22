# Crypto

The Crypto module provides functions for common cryptographic operations, including:

- Encoding/decoding (Base64, Hex, UTF-8)
- Unique identifier generation 
- Utilities for buffer manipulation
- Validation and verification (Base64, Hex, Hash, UUID)

All functions are designed to work both in the browser and in Node.js, using native cryptography APIs when available.

## Overview

[base64Decode](./base64Decode.md)
```typescript
base64Decode(input: string, urlSafe?: boolean): Uint8Array
```
Decodes a Base64 or Base64URL string to a Uint8Array.

[base64Encode](./base64Encode.md)
```typescript
base64Encode(input: Uint8Array | ArrayBuffer, urlSafe?: boolean): string
```
Encodes an ArrayBuffer or Uint8Array into a Base64 or Base64URL string.

[djb2](./djb2.md)
```typescript
djb2(str: string): number
```
Calculates the hash of a string using the djb2 algorithm.

[generateNonce](./generateNonce.md)
```typescript
generateNonce(length?: number): Uint8Array
```
Generates a random byte vector (nonce) of the specified length.

[generateUUID](./generateUUID.md)
```typescript
generateUUID(): string
```
Generates a version 4 UUID (Universally Unique Identifier).

[hexDecode](./hexDecode.md)
```typescript
hexDecode(hex: string): Uint8Array
```
Decodes a hexadecimal string to a Uint8Array.

[hexEncode](./hexEncode.md)
```typescript
hexEncode(data: ArrayBuffer | Uint8Array): string
```
Encodes an ArrayBuffer or Uint8Array into a hexadecimal string.

[isArrayBuffer](./isArrayBuffer.md)
```typescript
isArrayBuffer(input: unknown): input is ArrayBuffer
```
Checks if the provided value is an ArrayBuffer.

[isBase64](./isBase64.md)
```typescript
isBase64(value: string): boolean
```
Checks if a string is Base64 encoded.

[isBase64URL](./isBase64URL.md)
```typescript
isBase64URL(value: string): boolean
```
Checks if a string is Base64URL encoded.

[isHash](./isHash.md)
```typescript
isHash(hash: string, algorithm: HashAlgorithm = 'SHA-256'): boolean
```
Checks if a string is a valid hash for the specified algorithm.

[isHex](./isHex.md)
```typescript
isHex(value: string): boolean
```
Checks if a string contains only hexadecimal characters.

[isUint8Array](./isUint8Array.md)
```typescript
isUint8Array(input: unknown): input is Uint8Array
```
Checks if the provided value is a Uint8Array.

[isUUID](./isUUID.md)
```typescript
isUUID(value: string): boolean
```
Checks if a string is in UUID (Universally Unique Identifier) format.

[utf8Decode](./utf8Decode.md)
```typescript
utf8Decode(data: ArrayBuffer | Uint8Array): string
```
Decodes an ArrayBuffer or Uint8Array to a UTF-8 string.

[utf8Encode](./utf8Encode.md)
```typescript
utf8Encode(input: string): Uint8Array
```
Encodes a string in UTF-8, returning a Uint8Array.