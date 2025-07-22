# Types

O módulo types fornece um conjunto abrangente de funções para verificação e identificação de tipos em JavaScript/TypeScript. Estas funções são projetadas para oferecer uma maneira segura e confiável de verificar tipos de dados, incluindo tipos primitivos, objetos, funções especiais e estruturas de dados nativas do JavaScript.

Principais características:
- Verificação precisa de tipos primitivos (string, number, boolean, etc.)
- Suporte para tipos especiais como Promise, Generator e funções assíncronas
- Identificação de estruturas de dados (Map, Set, WeakMap, etc.)
- Detecção de valores null/undefined e verificação de valores falsy
- Tipagem TypeScript para maior segurança e autocompleção

Todas as funções são otimizadas para performance e seguem as melhores práticas de verificação de tipos em JavaScript.

## Visão Geral

### [getInstanceType](./getInstanceType.md)
```typescript
getInstanceType(value: any): string | null;
```
Retorna o nome do construtor (classe) de uma instância, ou `null` se não aplicável.

### [getType](./getType.md)
```typescript
getType(value: any): string;
```
Retorna uma string representando o tipo do valor, incluindo casos especiais como "nan", "infinity", "null" e "array".

### [isArray](./isArray.md)
```typescript
isArray(value: any): value is any[];
```
Verifica se o valor é um array.

### [isAsyncFunction](./isAsyncFunction.md)
```typescript
isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;
```
Verifica se o valor é uma função assíncrona.

### [isAsyncGeneratorFunction](./isAsyncGeneratorFunction.md)
```typescript
isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction;
```
Verifica se o valor é uma função geradora assíncrona.

### [isBigint](./isBigint.md)
```typescript
isBigint(value: any): value is bigint;
```
Verifica se o valor é do tipo bigint.

### [isBoolean](./isBoolean.md)
```typescript
isBoolean(value: any): value is boolean;
```
Verifica se o valor é do tipo booleano.

### [isDate](./isDate.md)
```typescript
isDate(value: any): value is Date;
```
Verifica se o valor é uma instância de Date.

### [isFalsy](./isFalsy.md)
```typescript
isFalsy(value: any): boolean;
```
Verifica se o valor é considerado falsy em JavaScript.

### [isFunction](./isFunction.md)
```typescript
isFunction(value: any): value is Function;
```
Verifica se o valor é uma função.

### [isGeneratorFunction](./isGeneratorFunction.md)
```typescript
isGeneratorFunction(value: any): value is GeneratorFunction;
```
Verifica se o valor é uma função geradora.

### [isMap](./isMap.md)
```typescript
isMap(value: any): value is Map<any, any>;
```
Verifica se o valor é uma instância de Map.

### [isNil](./isNil.md)
```typescript
isNil(value: any): value is null | undefined;
```
Verifica se o valor é null ou undefined.

### [isNull](./isNull.md)
```typescript
isNull(value: any): value is null;
```
Verifica se o valor é exatamente null.

### [isNumber](./isNumber.md)
```typescript
isNumber(value: any): value is number;
```
Verifica se o valor é do tipo number.

### [isObject](./isObject.md)
```typescript
isObject(value: any): value is object;
```
Verifica se o valor é um objeto (excluindo null).

### [isPrimitive](./isPrimitive.md)
```typescript
isPrimitive(value: any): value is (string | number | boolean | symbol | bigint | null | undefined);
```
Verifica se o valor é um tipo primitivo: string, number, boolean, symbol, bigint, null ou undefined.

### [isPromise](./isPromise.md)
```typescript
isPromise<T = any>(value: any): value is Promise<T>;
```
Verifica se o valor é uma Promise.

### [isRegExp](./isRegExp.md)
```typescript
isRegExp(value: any): value is RegExp;
```
Verifica se o valor é uma expressão regular (RegExp).

### [isSet](./isSet.md)
```typescript
isSet(value: any): value is Set<any>;
```
Verifica se o valor é uma instância de Set.

### [isString](./isString.md)
```typescript
isString(value: any): value is string;
```
Verifica se o valor é do tipo string.

### [isSymbol](./isSymbol.md)
```typescript
isSymbol(value: any): value is symbol;
```
Verifica se o valor é do tipo symbol.

### [isUndefined](./isUndefined.md)
```typescript
isUndefined(value: any): value is undefined;
```
Verifica se o valor é undefined.

### [isWeakMap](./isWeakMap.md)
```typescript
isWeakMap(value: any): value is WeakMap<object, any>;
```
Verifica se o valor é uma instância de WeakMap.

### [isWeakRef](./isWeakRef.md)
```typescript
isWeakRef(value: any): value is WeakRef<any>;
```
Verifica se o valor é uma instância de WeakRef.

### [isWeakSet](./isWeakSet.md)
```typescript
isWeakSet(value: any): value is WeakSet<object>;
```
Verifica se o valor é uma instância de WeakSet.
