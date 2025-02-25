# isNode

A função `isNode` verifica se o ambiente de execução atual é o [Node.js](https://nodejs.org/).

## Sintaxe

```typescript
function isNode(): boolean;
```

### Retorno

| Tipo      | Descrição                                              |
|-----------|--------------------------------------------------------|
| `boolean` | Retorna `true` se o ambiente de execução for Node.js; caso contrário, `false`. |

## Exemplos

```typescript
console.log(isNode()); // true se executado no Node.js, false caso contrário
```

## Notas

- A função verifica a existência dos objetos `global` e `process`, que são exclusivos de ambientes Node.js.
- Útil para distinguir entre Node.js e outros ambientes JavaScript, como navegadores ou Deno.

## Código Fonte

::: code-group
```typescript
function isNode(): boolean {
  return typeof global !== "undefined" && typeof process !== "undefined";
}
```

```javascript
function isNode() {
  return typeof global !== "undefined" && typeof process !== "undefined";
}
```
:::

## Referências

- [Objetos Globais do Node.js](https://nodejs.org/api/globals.html)
- [Objeto Process do Node.js](https://nodejs.org/api/process.html)