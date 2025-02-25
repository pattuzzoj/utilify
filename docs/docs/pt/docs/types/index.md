# Utilitários Types <Badge type="tip" text="1.0.3" />

As **funções utilitárias para tipos** fornecem métodos para verificar, comparar e manipular tipos de dados. Elas ajudam a identificar se um valor é de um tipo específico, como verificar se um valor é um número, uma string, uma função, ou se é um valor primitivo, além de outras verificações úteis.

## Visão Geral

Aqui está uma visão geral das funções disponíveis na categoria de utilitários de tipos:

### [getInstanceType](./getInstanceType.md)  
```typescript  
function getInstanceType(value: object): string | undefined 
```  
Retorna o tipo de instância do valor.

### [getType](./getType.md)  
```typescript  
function getType(value: any): string 
```  
Retorna o tipo primitivo ou o tipo do objeto (como `"string"`, `"object"`, `"function"`, etc.).

### [isAsync](./isAsync.md)  
```typescript  
function isAsync(callback: Function): boolean
```  
Verifica se a função é assíncrona.

### [isArray](./isArray.md)  
```typescript  
function isArray(value: any): boolean
```  
Verifica se o valor é um array.

### [isBigint](./isBigint.md)  
```typescript  
function isBigint(value: any): boolean  
```  
Verifica se o valor é um BigInt.

### [isBoolean](./isBoolean.md)  
```typescript  
function isBoolean(value: any): boolean  
```  
Verifica se o valor é um booleano.

### [isDate](./isDate.md)  
```typescript  
function isDate(value: any): boolean  
```  
Verifica se o valor é uma instância de `Date`.

### [isEqualType](./isEqualType.md)  
```typescript  
function isEqualType(value1: any, value2: any): boolean  
```  
Compara os tipos de dois valores e retorna se são iguais.

### [isFalsy](./isFalsy.md)  
```typescript  
function isFalsy(value: any): boolean  
```  
Verifica se o valor é "falsy" (como `false`, `0`, `null`, `undefined`, `NaN`, ou uma string vazia).

### [isFunction](./isFunction.md)  
```typescript  
function isFunction(value: any): boolean  
```  
Verifica se o valor é uma função.

### [isMap](./isMap.md)  
```typescript  
function isMap(value: any): boolean  
```  
Verifica se o valor é uma instância de `Map`.

### [isNull](./isNull.md)  
```typescript  
function isNull(value: any): boolean  
```  
Verifica se o valor é `null`.

### [isNumber](./isNumber.md)  
```typescript  
function isNumber(value: any): boolean  
```  
Verifica se o valor é um número.

### [isObject](./isObject.md)  
```typescript  
function isObject(value: any): boolean  
```  
Verifica se o valor fornecido é um objeto simples ou se é um objeto criado a partir de uma classe não nativa

### [isPlainObject](./isPlainObject.md)  
```typescript  
function isPlainObject(value: any): boolean  
```  
Verifica se o valor é um objeto simples (não uma instância de `Map`, `Set`, ou outros objetos).

### [isPromise](./isPromise.md)  
```typescript  
function isPromise(value: object): boolean  
```  
Verifica se o valor é uma `Promise`.

### [isRegExp](./isRegExp.md)  
```typescript  
function isRegExp(value: any): boolean  
```  
Verifica se o valor é uma expressão regular.

### [isSet](./isSet.md)  
```typescript  
function isSet(value: any): boolean  
```  
Verifica se o valor é uma instância de `Set`.

### [isString](./isString.md)  
```typescript  
function isString(value: any): boolean  
```  
Verifica se o valor é uma string.

### [isSymbol](./isSymbol.md)  
```typescript  
function isSymbol(value: any): boolean  
```  
Verifica se o valor é um `Symbol`.

### [isTruthy](./isTruthy.md)  
```typescript  
function isTruthy(value: any): boolean  
```  
Verifica se o valor é "truthy" (qualquer valor que não seja `false`, `0`, `null`, `undefined`, `NaN`, ou uma string vazia).

### [isUndefined](./isUndefined.md)  
```typescript  
function isUndefined(value: any): boolean  
```  
Verifica se o valor é `undefined`.

### [isJSON](./isJSON.md)  
```typescript  
function isJSON(value: any): boolean  
```  
Verifica se o valor é um objeto JSON válido.

### [isPrimitive](./isPrimitive.md)  
```typescript  
function isPrimitive(value: any): boolean  
```  
Verifica se o valor é um tipo primitivo (string, number, bigint, boolean, symbol, undefined, null).