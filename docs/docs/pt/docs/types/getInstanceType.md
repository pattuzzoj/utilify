# getInstanceType  
Retorna o nome do tipo de uma instância de objeto. A função verifica se o valor é um objeto não nulo e, em seguida, retorna o nome da classe construtora (em minúsculas) do objeto. Se o valor não for um objeto válido, a função exibe um erro e retorna `undefined`.

## Sintaxe
```typescript
function getInstanceType(value: object): string | undefined
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `object`  | O valor a ser verificado. Deve ser um objeto não nulo. |

### Retorno

| Tipo                   | Descrição                                    |
|------------------------|----------------------------------------------|
| `string` | Retorna o nome da classe do objeto em minúsculo |
| `undefined` | Returna `undefined` se o valor não for um objeto válido |

## Exemplos

### Exemplo 1: Verificando objetos válidos
```typescript
class MyClass {}
const myObj = new MyClass();
getInstanceType(myObj); // "myclass"
```

### Exemplo 2: Verificando valores inválidos
```typescript
getInstanceType(null); // Logs: "Value must be a non-null object." | undefined
getInstanceType(42); // Logs: "Value must be a non-null object." | undefined
getInstanceType("Hello"); // Logs: "Value must be a non-null object." | undefined
```

## Notas
- A função usa `constructor.name` para obter o nome da classe construtora, que é transformado para minúsculas. 
- Caso o valor não seja um objeto válido (null ou outro tipo não-objeto), a função exibe uma mensagem de erro no console e retorna `undefined`.
- Para verificar se o valor é um objeto, a função usa `typeof value !== "object"` e `value === null`.

## Código Fonte
::: code-group
```typescript
function getInstanceType(value: object): string | undefined {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}
```

```javascript
function getInstanceType(value) {
  if (value === null || typeof value !== "object") {
    console.error("Value must be a non-null object.");
    return;
  }

  return value.constructor.name.toLowerCase();
}
```
:::

## Referências
- [MDN: `constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor)