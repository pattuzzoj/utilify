# Regex

O módulo Regex fornece um conjunto de funções para validação de strings usando expressões regulares. Estas funções retornam um valor booleano (true/false) indicando se a string corresponde ao padrão especificado.

Todas as funções são otimizadas para performance e seguem as melhores práticas de validação para cada caso específico.

## Visão Geral

### [isAlpha](./isAlpha.md)
```typescript
isAlpha(value: string): boolean;
```
Verifica se a string contém apenas caracteres alfabéticos (letras), incluindo acentuação.

### [isAlphanumeric](./isAlphanumeric.md)
```typescript
isAlphanumeric(value: string): boolean;
```
Verifica se a string contém apenas letras e números, sem símbolos ou espaços.

### [isEmail](./isEmail.md)
```typescript
isEmail(value: string): boolean;
```
Verifica se a string corresponde ao formato de um e-mail válido.

### [isURL](./isURL.md)
```typescript
isURL(value: string): boolean;
```
Verifica se a string corresponde ao formato de uma URL válida (http/https).

### [isCreditCard](./isCreditCard.md)
```typescript
isCreditCard(value: string): boolean;
```
Verifica se a string corresponde ao formato de um número de cartão de crédito válido.

### [isSlug](./isSlug.md)
```typescript
isSlug(value: string): boolean;
```
Verifica se a string está no formato de slug (letras minúsculas, números e hifens).

### [isIPV4](./isIPV4.md)
```typescript
isIPV4(value: string): boolean;
```
Verifica se a string corresponde ao formato de um endereço IPv4 válido, com ou sem porta.

### [isIPV6](./isIPV6.md)
```typescript
isIPV6(value: string): boolean;
```
Verifica se a string corresponde ao formato de um endereço IPv6 válido, com ou sem porta.

### [isBase64URL](./isBase64URL.md)
```typescript
isBase64URL(value: string): boolean;
```
Verifica se a string está no formato Base64URL.

### [isJWT](./isJWT.md)
```typescript
isJWT(value: string): boolean;
```
Verifica se a string corresponde ao formato de um JSON Web Token (JWT).

### [isFileExtension](./isFileExtension.md)
```typescript
isFileExtension(value: string): boolean;
```
Verifica se a string corresponde ao formato de uma extensão de arquivo.
