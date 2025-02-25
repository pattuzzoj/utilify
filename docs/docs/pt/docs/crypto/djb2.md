# djb2
A função `djb2` implementa o algoritmo de hash DJB2 para calcular um valor hash a partir de uma string.

## Sintaxe

```typescript
djb2(str: string): string
```

### Parâmetros

| Parâmetro | Tipo   | Descrição               |
|-----------|--------|-------------------------|
| `str`     | `string` | A string a ser hasheada. |

### Retorno

| Tipo   | Descrição                                  |
|--------|--------------------------------------------|
| `string` | O valor hash gerado pela função DJB2, representado como uma string. |

## Exemplos

### Exemplo 1
```typescript
const result = djb2("Hello, World!");
console.log(result); // Resultado do hash DJB2 para "Hello, World!"
```

### Exemplo 2
```typescript
const hashValue = djb2("Utilify");
console.log(hashValue); // Valor hash para "Utilify"
```

## Notas
- A função usa o algoritmo DJB2, que é eficiente e amplamente utilizado para criar hashes de strings.
- O valor hash retornado é uma representação em string de um número positivo, derivado do deslocamento à direita sem sinal (`>>>`), que assegura que o valor seja tratado como um número não negativo.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function djb2(str: string): string {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```

```javascript
function djb2(str) {
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 33) ^ str.charCodeAt(i);
  }

  return String(hash >>> 0);
}
```
:::

## Referências
- [String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)