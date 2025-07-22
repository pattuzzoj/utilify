# compose

Cria uma função composta que executa uma sequência de funções da direita para a esquerda.

## Sintaxe
```typescript
compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```

## Parâmetros

| Nome           | Tipo                        | Descrição                                             |
|----------------|-----------------------------|-------------------------------------------------------|
| `...callbacks` | `((value: T) => T)[]`       | Funções a serem compostas, executadas da última para a primeira. |

## Retorno

| Tipo             | Descrição                                                        |
|------------------|------------------------------------------------------------------|
| `(value: T) => T`| Uma função que aplica todas as funções fornecidas em sequência ao valor inicial. |

## Exemplo
```typescript
const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const composed = compose(add1, double);
composed(3); // 7 (double(3) = 6, add1(6) = 7)
```

## Notas
- Lança um `TypeError` se algum argumento não for função.
- Útil para composição funcional e pipelines de transformação de dados.

## Referências
- [MDN: composition](https://developer.mozilla.org/pt-BR/docs/Glossary/Function_composition)