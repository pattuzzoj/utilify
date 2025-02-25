# identity

A função `identity` retorna o valor recebido como argumento sem modificá-lo. É útil em cenários onde você precisa garantir que o valor seja passado sem alterações.

## Sintaxe

```typescript
function identity<T>(value: T): T;
```

### Parâmetros

| Nome   | Tipo       | Descrição                                 |
|--------|------------|-------------------------------------------|
| `value`| `T`        | O valor que será retornado sem alterações. |

### Retorno

| Tipo | Descrição                                            |
|------|------------------------------------------------------|
| `T`  | O mesmo valor que foi passado para a função.         |

## Exemplos

### Exemplo 1: Retorno de um número

```typescript
const result = identity(42);
console.log(result); // Saída: 42
```

### Exemplo 2: Retorno de uma string

```typescript
const result = identity("Hello, World!");
console.log(result); // Saída: "Hello, World!"
```

### Exemplo 3: Usando com tipos genéricos

```typescript
const result = identity([1, 2, 3]);
console.log(result); // Saída: [1, 2, 3]
```

## Notas

- A função `identity` é frequentemente utilizada como uma função de identidade em programação funcional, sendo particularmente útil em casos onde você precisa passar uma função que não altere o valor, mas que satisfaça a assinatura de função.
- A função é genérica e pode ser utilizada com qualquer tipo de dado.

## Código

::: code-group
```typescript
function identity<T>(value: T): T {
  return value;
}
```

```javascript
function identity(value) {
  return value;
}
```
:::

## Referências

- [Funções em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Funções)
- [Generics em TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html)