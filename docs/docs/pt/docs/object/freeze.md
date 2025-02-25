# freeze
A função `freeze` congela um objeto, impedindo a modificação de suas propriedades.

## Sintaxe

```typescript
freeze(obj: Record<string, any>): Record<string, any>;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | O objeto a ser congelado.                                    |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | O objeto congelado, onde suas propriedades não podem ser modificadas. |

## Exemplos

### Exemplo 1: Congelando um Objeto
```typescript
const obj = { nome: "Alice", idade: 30 };
const frozenObj = freeze(obj);

console.log(frozenObj);
// { nome: "Alice", idade: 30 }

frozenObj.idade = 31;  // Não será possível modificar
console.log(frozenObj.idade);
// 30
```

### Exemplo 2: Congelando um Objeto com Propriedades Aninhadas
```typescript
const obj = { nome: "Alice", endereco: { cidade: "Wonderland" } };
const frozenObj = freeze(obj);

console.log(frozenObj);
// { nome: "Alice", endereco: { cidade: "Wonderland" } }

frozenObj.endereco.cidade = "Fictionland";  // Não será possível modificar
console.log(frozenObj.endereco.cidade);
// "Wonderland"
```

## Notas
- `Object.freeze()` congela apenas o objeto em nível superficial, ou seja, as propriedades do objeto não podem ser modificadas, mas se houver objetos aninhados, esses objetos não são congelados recursivamente.
- Para congelar profundamente um objeto, deve-se usar uma função como `deepFreeze`.

## Dependências
Nenhuma dependência externa.

## Código Fonte
::: code-group

```typescript
function freeze(obj: Record<string, any>): Record<string, any> {
  return Object.freeze(obj);
}
```

```javascript
function freeze(obj) {
  return Object.freeze(obj);
}
```
:::

## Referências
- [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)