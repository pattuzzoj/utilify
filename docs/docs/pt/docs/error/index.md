# Error

O módulo Error fornece um conjunto de funções utilitárias para trabalhar com erros em JavaScript/TypeScript. Estas funções permitem criar erros personalizados e verificar tipos específicos de erros.

Principais recursos:
- Criação de classes de erro personalizadas
- Verificação de tipos de erro específicos
- Suporte para erros nativos do JavaScript
- Validação de objetos semelhantes a erros

Todas as funções são fortemente tipadas e projetadas para uso em ambientes TypeScript/JavaScript modernos.

## Visão Geral

[customError](./customError.md)
```typescript
customError(name: string): typeof Error;
```
Cria uma classe de erro personalizada com o nome informado.

[isAggregateError](./isAggregateError.md)
```typescript
isAggregateError(value: any): value is AggregateError;
```
Verifica se o valor é uma instância de `AggregateError`.

[isDOMException](./isDOMException.md)
```typescript
isDOMException(value: any): value is DOMException;
```
Verifica se o valor é uma instância de `DOMException`.

[isError](./isError.md)
```typescript
isError(value: any): value is { name: string; message: string; stack?: string };
```
Verifica se o valor é um objeto semelhante a um erro (possui `name` e `message`).

[isEvalError](./isEvalError.md)
```typescript
isEvalError(value: any): value is EvalError;
```
Verifica se o valor é uma instância de `EvalError`.

[isRangeError](./isRangeError.md)
```typescript
isRangeError(value: any): value is RangeError;
```
Verifica se o valor é uma instância de `RangeError`.

[isReferenceError](./isReferenceError.md)
```typescript
isReferenceError(value: any): value is ReferenceError;
```
Verifica se o valor é uma instância de `ReferenceError`.

[isSyntaxError](./isSyntaxError.md)
```typescript
isSyntaxError(value: any): value is SyntaxError;
```
Verifica se o valor é uma instância de `SyntaxError`.

[isTypeError](./isTypeError.md)
```typescript
isTypeError(value: any): value is TypeError;
```
Verifica se o valor é uma instância de `TypeError`.

[isURIError](./isURIError.md)
```typescript
isURIError(value: any): value is URIError;
```
Verifica se o valor é uma instância de `URIError`.
