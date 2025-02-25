# partialLeft

A função `partialLeft` cria uma nova função aplicando parcialmente argumentos no início da lista de argumentos da função original. Quando a nova função é chamada, os argumentos fornecidos são usados antes dos argumentos fornecidos na chamada.

## Sintaxe

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parâmetros

| Nome        | Tipo                      | Descrição                                                         |
|-------------|---------------------------|---------------------------------------------------------------------|
| `callback`  | `(...args: any[]) => T`   | A função original à qual os argumentos serão parcialmente aplicados. |
| `...partial`| `any[]`                   | Argumentos a serem parcialmente aplicados no início.               |

### Retorno

| Tipo                      | Descrição                                                  |
|---------------------------|------------------------------------------------------------|
| `(...args: any[]) => T` | Uma nova função com os argumentos parcialmente aplicados no início.  |

## Exemplos

### Exemplo 1: Soma de números
```typescript
const soma = (x: number, y: number, z: number) => x + y + z;

const somaComCinco = partialLeft(soma, 5);

console.log(somaComCinco(3, 4)); // Saída: 12
```

- A função `soma` original recebe três argumentos.
- `partialLeft` cria uma nova função que fixa o primeiro argumento (`x = 5`).
- Ao chamar a nova função com `3` e `4`, eles são atribuídos a `y` e `z`, respectivamente, resultando em `5 + 3 + 4 = 12`.

### Exemplo 2: Manipulação de strings
```typescript
const concatenar = (a: string, b: string, c: string) => `${a}${b}${c}`;

const adicionarPrefixo = partialLeft(concatenar, "Olá");

console.log(adicionarPrefixo("Mundo", "!")); // Saída: "OláMundo!"
```

- A função `concatenar` recebe três strings e as junta.
- Usando `partialLeft`, a palavra `"Olá"` é fixada como o primeiro argumento.

## Notas

- `partialLeft` é especialmente útil quando os argumentos iniciais são mais previsíveis ou fixos.
- A ordem dos argumentos passados na execução e os parcialmente aplicados é significativa.

## Código Fonte

::: code-group
```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...partial, ...args);
}
```

```javascript
function partialLeft(callback, ...partial) {
  return (...args) => callback(...partial, ...args);
}
```
:::

## Referências

- [Currying e Aplicação Parcial](https://developer.mozilla.org/pt-BR/docs/Glossary/Currying)