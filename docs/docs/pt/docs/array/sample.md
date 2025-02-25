# sample

A função `sample` retorna um elemento aleatório de um array ou um caractere aleatório de uma string.

## Sintaxe

```typescript
function sample(str: string): string;
function sample<T>(arr: T[]): T;
```

### Parâmetros

| Nome  | Tipo      | Descrição                                                      |
|-------|-----------|------------------------------------------------------------------|
| `str` | `string`  | A string de entrada da qual um caractere aleatório será selecionado. |
| `arr` | `T[]`     | O array de entrada do qual um elemento aleatório será selecionado.   |

### Retorno

| Tipo     | Descrição                                                               |
|----------|---------------------------------------------------------------------------|
| `string` | Um caractere aleatório se a entrada for uma string.                        |
| `T`      | Um elemento aleatório se a entrada for um array.                          |

## Exemplos

```typescript
console.log(sample([1, 2, 3, 4, 5])); // Pode retornar qualquer elemento do array
console.log(sample("hello"));         // Pode retornar 'h', 'e', 'l' ou 'o'
```

## Observações

- A função usa `Math.random` e `Math.floor` para selecionar um índice aleatório.
- Funciona tanto com strings quanto com arrays.

## Código Fonte

::: code-group
```typescript
function sample(str: string): string;
function sample<T>(arr: T[]): T;
function sample(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}
```

```javascript
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
```
:::

## Referências

- [Math.random() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 