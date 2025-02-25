# isJSON  
Verifica se a string fornecida é um JSON válido. A função tenta fazer o parsing da string usando `JSON.parse`. Se o parsing for bem-sucedido, a função retorna `true`, indicando que a string é um JSON válido. Caso contrário, retorna `false`.

## Sintaxe
```typescript
function isJSON(value: string): boolean
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                              |
|-----------|----------|----------------------------------------|
| `value`   | `string` | A string a ser verificada.             |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se a string for um JSON válido, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando JSON válidos
```typescript
isJSON('{"name": "John", "age": 30}'); // true
isJSON('{"key": "value"}'); // true
```

### Exemplo 2: Verificando JSON inválidos
```typescript
isJSON('{"name": "John", "age": 30'); // false (erro de sintaxe no JSON)
isJSON('Hello, world!'); // false (não é JSON)
```

## Notas
- A função utiliza `JSON.parse` para tentar converter a string em um objeto JSON. Se a string não for um JSON válido, o método lança uma exceção, que é capturada no `catch`, retornando `false`.
- É importante notar que a função verifica apenas se a string é um JSON válido em termos de sintaxe. Não valida tipos ou a estrutura dos dados dentro do JSON.

## Código Fonte
::: code-group

```typescript
function isJSON(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}
```

```javascript
function isJSON(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}
```
:::

## Referências
- [MDN: `JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)