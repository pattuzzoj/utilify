# omit
A função `omit` cria um novo objeto excluindo as chaves especificadas do objeto original.

## Sintaxe

```typescript
omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

### Parâmetros

| Parâmetro | Tipo                        | Descrição                                                   |
|-----------|-----------------------------|-------------------------------------------------------------|
| `obj`     | `T`                         | O objeto de origem do qual as propriedades serão removidas. |
| `keys`    | `K[]`                       | Um array de chaves que devem ser excluídas do objeto resultante. |

### Retorno

| Tipo        | Descrição                                                       |
|-------------|-----------------------------------------------------------------|
| `Omit<T, K>` | Um novo objeto contendo todas as propriedades de `obj`, exceto as chaves especificadas em `keys`. |

## Exemplos

### Exemplo 1
```typescript
const usuario = { id: 1, nome: "Alice", idade: 25, administrador: true };
const omitido = omit(usuario, ["idade", "administrador"]);
console.log(omitido); // { id: 1, nome: "Alice" }
```

### Exemplo 2
```typescript
const configuracoes = { debug: true, tema: "escuro", idioma: "pt" };
const configuracoesOmitidas = omit(configuracoes, ["debug"]);
console.log(configuracoesOmitidas); // { tema: "escuro", idioma: "pt" }
```

## Notas
- Esta função é útil quando você deseja criar um novo objeto com um subconjunto de propriedades, excluindo as que não são necessárias.
- Se uma chave no array `keys` não existir no objeto de origem, ela será ignorada.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return (Object.keys(obj) as K[]).reduce((result, key) => {
    if (!keys.includes(key)) {
      (result as T)[key] = obj[key];
    }
    
    return result;
  }, {} as Omit<T, K>);
}
```
```javascript
function omit(obj, keys) {
  return (Object.keys(obj)).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
    
    return result;
  }, {});
}
```
:::

## Referências
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)