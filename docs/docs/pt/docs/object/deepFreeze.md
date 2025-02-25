# deepFreeze
A função `deepFreeze` congela profundamente um objeto e todos os seus objetos internos, impedindo modificações em suas propriedades.

## Sintaxe

```typescript
deepFreeze(obj: Record<string, any>): Record<string, any>;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | O objeto a ser congelado profundamente.                      |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | O objeto congelado, com todas as suas propriedades e subobjetos imutáveis. |

## Exemplos

### Exemplo 1: Congelando um Objeto
```typescript
const pessoa = { nome: "Alice", endereco: { cidade: "Wonderland" } };
const pessoaCongelada = deepFreeze(pessoa);

pessoaCongelada.nome = "Bob"; // Não pode modificar
console.log(pessoaCongelada.nome); // "Alice"
```

### Exemplo 2: Congelando um Objeto com Subobjetos
```typescript
const usuario = { id: 1, nome: "Alice", endereco: { cidade: "Wonderland" } };
const usuarioCongelado = deepFreeze(usuario);

usuarioCongelado.endereco.cidade = "New Wonderland"; // Não pode modificar
console.log(usuarioCongelado.endereco.cidade); // "Wonderland"
```

### Exemplo 3: Tentando Modificar após Congelar
```typescript
const produto = { nome: "Livro", preco: 29.99 };
const produtoCongelado = deepFreeze(produto);

produtoCongelado.preco = 35.00; // Não pode modificar
console.log(produtoCongelado.preco); // 29.99
```

## Notas
- Esta função congela profundamente o objeto, impedindo que qualquer alteração seja feita tanto no objeto original quanto nos objetos internos.
- Usa `Object.freeze()` para congelar o objeto e `isPlainObject` de `@utilify/types` para verificar se uma propriedade do objeto é um objeto plano, para então congelá-lo também.

## Dependências
- [`@utilify/types`](./types.md): Fornece a função `isPlainObject` para verificar se um valor é um objeto plano.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepFreeze(obj: Record<string, any>): Record<string, any> {
  const freezedObj = Object.freeze(obj);

  for (const key in freezedObj) {
    if (isPlainObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
```

```javascript
function deepFreeze(obj) {
  const freezedObj = Object.freeze(obj);

  for (const key in freezedObj) {
    if (isPlainObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
```
:::

## Referências
- [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [`isPlainObject`](./types.md)