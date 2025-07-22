# pipe

Cria uma função composta que executa uma sequência de funções da esquerda para a direita.

## Sintaxe
```typescript
pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```

## Parâmetros

| Nome           | Tipo                        | Descrição                                             |
|----------------|-----------------------------|-------------------------------------------------------|
| `...callbacks` | `((value: T) => T)[]`       | Funções a serem compostas, executadas da primeira para a última. |

## Retorno

| Tipo             | Descrição                                                        |
|------------------|------------------------------------------------------------------|
| `(value: T) => T`| Uma função que aplica todas as funções fornecidas em sequência ao valor inicial. |

## Exemplo
```typescript
const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const piped = pipe(add1, double);
piped(3); // 8 (add1(3) = 4, double(4) = 8)
```

## Notas
- Lança um `TypeError` se algum argumento não for função.
- Útil para composição funcional e pipelines de transformação de dados.

## Referências
- [MDN: composition](https://developer.mozilla.org/pt-BR/docs/Glossary/Function_composition)