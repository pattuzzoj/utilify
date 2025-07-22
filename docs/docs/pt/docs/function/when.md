# when

Cria uma função que executa uma ação somente se o predicado for verdadeiro.

## Sintaxe
```typescript
when<T extends (...args: any) => any>(
  predicate: (...args: any) => boolean,
  action: T
): (...args: Parameters<T>) => ReturnType<T> | undefined
```

## Parâmetros

| Nome        | Tipo                          | Descrição                                                      |
|-------------|-------------------------------|----------------------------------------------------------------|
| `predicate` | `(...args: any) => boolean`   | Função que determina se a ação será executada.                |
| `action`    | `T`                           | Função a ser executada se o predicado retornar verdadeiro.     |

## Retorno

| Tipo                                              | Descrição                                                                 |
|---------------------------------------------------|--------------------------------------------------------------------------|
| `(...args: Parameters<T>) => ReturnType<T> \| undefined` | Função que executa a ação apenas se o predicado for verdadeiro, caso contrário retorna `undefined`. |

## Exemplo
```typescript
const isPositive = (x: number) => x > 0;
const logIfPositive = when(isPositive, x => console.log(x));
logIfPositive(5); // imprime 5
logIfPositive(-2); // não faz nada
```

## Notas
- Lança um `TypeError` se predicate ou action não forem funções.
- Útil para controle condicional de execução de funções.

## Referências
- [MDN: Conditional (ternary) operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)