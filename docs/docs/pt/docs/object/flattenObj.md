## flattenObj

A função `flattenObj` transforma um objeto aninhado em um objeto plano, onde as chaves representam o caminho completo até cada valor.

### Sintaxe

```typescript
flattenObj(obj): Record<string, any>
```

### Parâmetros

| Parâmetro | Tipo   | Descrição                      |
| :---------| :------| :------------------------------|
| `obj`     | `any`  | Objeto a ser achatado (flatten).|

### Retorno

Retorna um novo objeto plano, com caminhos de propriedades como chaves.

### Exemplos

```typescript
const obj = { a: 1, b: { c: 2, d: [3, 4] } };
flattenObj(obj);
// { 'a': 1, 'b.c': 2, 'b.d[0]': 3, 'b.d[1]': 4 }
```

### Notas

- Suporta arrays e objetos aninhados.
- Útil para serialização, logs e manipulação de dados.

### Referências
- [MDN: Object.entries()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)