# getType  
Retorna o tipo exato de um valor, identificando-o com base na função `Object.prototype.toString`. A função lida com valores especiais como `NaN` e `Infinity`, retornando identificadores mais precisos para esses casos. A principal vantagem dessa abordagem é a capacidade de distinguir tipos complexos, como `Map`, `Set`, `Promise`, `Date`, `RegExp`, `Array`, `Function`, entre outros.

## Sintaxe
```typescript
function getType(value: any): string
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `string` | Retorna uma string representando o tipo do valor. Possíveis valores incluem `"object"`, `"array"`, `"string"`, `"number"`, `"nan"`, `"infinity"`, entre outros tipos complexos como `"map"`, `"set"`, `"promise"`, `"date"`, `"regexp"`, `"function"`, etc. |

## Exemplos

### Exemplo 1: Verificando tipos de valores comuns
```typescript
getType(42); // "number"
getType("Hello"); // "string"
getType([]); // "array"
getType({}); // "object"
```

### Exemplo 2: Verificando valores especiais
```typescript
getType(NaN); // "nan"
getType(Infinity); // "infinity"
getType(-Infinity); // "infinity"
```

### Exemplo 3: Tipos mais complexos
```typescript
getType(new Map()); // "map"
getType(new Set()); // "set"
getType(new Promise(() => {})); // "promise"
getType(new Date()); // "date"
getType(/regex/); // "regexp"
```

### Exemplo 4: Verificando outros tipos
```typescript
getType(true); // "boolean"
getType(null); // "null"
getType(undefined); // "undefined"
getType(function() {}); // "function"
```

## Notas
- A função utiliza `Object.prototype.toString.call(value)` para garantir a detecção precisa do tipo, mesmo para tipos como `null`, arrays, ou funções.
- Para valores do tipo `number`, a função faz verificações adicionais para identificar `NaN` e `Infinity`:
  - Se o valor for `NaN`, a função retorna `"nan"`.
  - Se o valor for `Infinity` ou `-Infinity`, a função retorna `"infinity"`.
- A função consegue distinguir entre tipos de objetos complexos como `Map`, `Set`, `Promise`, `Date`, e `RegExp`, através de suas identificações únicas retornadas pela `Object.prototype.toString`.
- Isso é possível porque `Object.prototype.toString` retorna uma string no formato `[object Type]`, onde `Type` pode ser qualquer um dos tipos nativos de JavaScript, incluindo aqueles que são frequentemente difíceis de diferenciar com o operador `typeof`.


## Código Fonte
::: code-group

```typescript
function getType(value: any): string {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}
```

```javascript
function getType(value) {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  if (type === "number") {
    if (isNaN(value)) return "nan";
    if (!isFinite(value)) return "infinity";
  }

  return type;
}
```
:::

## Referências
- [MDN: `Object.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [MDN: `isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
- [MDN: `isFinite`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)