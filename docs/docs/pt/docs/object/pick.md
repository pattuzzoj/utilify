# pick
A função `pick` cria um novo objeto contendo apenas as chaves especificadas do objeto original.

## Sintaxe

```typescript
pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
```

### Parâmetros

| Parâmetro | Tipo                        | Descrição                                                   |
|-----------|-----------------------------|-------------------------------------------------------------|
| `obj`     | `T`                         | O objeto de origem do qual as propriedades serão selecionadas. |
| `keys`    | `K[]`                       | Um array de chaves que devem ser incluídas no objeto resultante. |

### Retorno

| Tipo        | Descrição                                                       |
|-------------|-----------------------------------------------------------------|
| `Pick<T, K>` | Um novo objeto contendo apenas as chaves especificadas e seus respectivos valores. |

## Exemplos

### Exemplo 1
```typescript
const usuario = { id: 1, nome: "Alice", idade: 25, administrador: true };
const selecionado = pick(usuario, ["id", "nome"]);
console.log(selecionado); // { id: 1, nome: "Alice" }
```

### Exemplo 2
```typescript
const configuracoes = { debug: true, tema: "escuro", idioma: "pt" };
const configuracoesSelecionadas = pick(configuracoes, ["tema"]);
console.log(configuracoesSelecionadas); // { tema: "escuro" }
```

## Notas
- Esta função é útil para criar subconjuntos de objetos enquanto mantém a segurança de tipos no TypeScript.
- Se uma chave no array `keys` não existir no objeto de origem, ela será ignorada.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {} as Pick<T, K>);
}
```

```javascript
function pick(obj, keys) {
  return keys.reduce((picked, key) => {
    if (key in obj) {
      picked[key] = obj[key];
    }

    return picked;
  }, {});
}
```
:::

## Referências
- [Pick Utility Type](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)