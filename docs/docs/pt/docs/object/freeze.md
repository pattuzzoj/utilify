## freeze

A função `freeze` congela um objeto recursivamente, tornando-o e todos os seus objetos internos imutáveis.

### Sintaxe

```typescript
freeze(obj: Record<PropertyKey, any>): Record<PropertyKey, any>
```

### Parâmetros

| Parâmetro | Tipo                   | Descrição                 |
| :---------| :----------------------| :------------------------|
| `obj`     | `Record<PropertyKey, any>` | Objeto a ser congelado. |

### Retorno

Retorna o objeto congelado, com todas as propriedades e objetos internos imutáveis.

### Exemplos

```typescript
const obj = { a: 1, b: { c: 2 } };
const frozen = freeze(obj);
frozen.a = 10; // Não tem efeito
frozen.b.c = 20; // Não tem efeito
```

### Notas

- Utiliza `Object.freeze` recursivamente para garantir imutabilidade profunda.
- Útil para evitar mutações acidentais em estruturas de dados.

### Referências
- [MDN: Object.freeze()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
