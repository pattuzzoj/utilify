# frequency

A função `frequency` calcula a frequência de cada valor em um array, retornando um objeto onde as chaves são os valores do array (convertidos para strings) e os valores são as quantidades de vezes que cada valor aparece.

## Sintaxe

```typescript
function frequency<T>(arr: T[]): Record<string, number>
```

### Parâmetros

| Nome  | Tipo          | Descrição                                           |
|-------|---------------|-----------------------------------------------------|
| arr   | `T[]`         | O array cujos valores terão suas frequências contadas. |

### Retorno

| Tipo                           | Descrição                                                     |
|---------------------------------|---------------------------------------------------------------|
| `Record<string, number>`        | Um objeto onde as chaves são os valores do array (convertidos para string) e os valores são as quantidades de ocorrências desses valores no array. |

## Exemplos

```typescript
console.log(frequency([1, 2, 2, 3, 3, 3, 4])); 
// Saída: { '1': 1, '2': 2, '3': 3, '4': 1 }

console.log(frequency(['apple', 'banana', 'apple', 'orange', 'banana'])); 
// Saída: { 'apple': 2, 'banana': 2, 'orange': 1 }
```

## Notas

- A função usa o método `reduce` para iterar sobre o array e construir o objeto de frequências.
- A chave de cada valor no objeto final é uma string, pois a função converte os itens para string com `String(item)`.

## Código Fonte

::: code-group
```typescript
function frequency<T>(arr: T[]): Record<string, number> {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
```

```javascript
function frequency(arr) {
  return arr.reduce((acc, item) => {
    acc[String(item)] = (acc[String(item)] || 0) + 1;
    return acc;
  }, {});
}
```
::: 

## Referências

- [Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)  
- [Record Type](https://www.typescriptlang.org/docs/handbook/2/objects.html#record)  