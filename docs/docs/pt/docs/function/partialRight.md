# partialRight

A função `partialRight` cria uma nova função aplicando parcialmente argumentos no final da lista de argumentos da função original. Quando a nova função é chamada, os argumentos fornecidos são usados antes dos argumentos parcialmente aplicados.

## Sintaxe

```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parâmetros

| Nome        | Tipo                      | Descrição                                                         |
|-------------|---------------------------|---------------------------------------------------------------------|
| `callback`  | `(...args: any[]) => T`   | A função original à qual os argumentos serão parcialmente aplicados. |
| `...partial`| `any[]`                   | Argumentos a serem parcialmente aplicados no final.                |

### Retorno

| Tipo                      | Descrição                                                  |
|---------------------------|------------------------------------------------------------|
| `(...args: any[]) => T` | Uma nova função com os argumentos parcialmente aplicados.  |

## Exemplos

### Exemplo 1: Soma de números
```typescript
const soma = (x: number, y: number, z: number) => x + y + z;

const somaComDez = partialRight(soma, 10);

console.log(somaComDez(5, 3)); // Saída: 18
```

- A função `soma` original recebe três argumentos.
- `partialRight` cria uma nova função que fixa o último argumento (`z = 10`).
- Ao chamar a nova função com `5` e `3`, eles são atribuídos a `x` e `y`, respectivamente, resultando em `5 + 3 + 10 = 18`.

### Exemplo 2: Manipulação de strings
```typescript
const concatenar = (a: string, b: string, c: string) => `${a}${b}${c}`;

const adicionarExclamacao = partialRight(concatenar, "!");

console.log(adicionarExclamacao("Olá", "Mundo")); // Saída: "OláMundo!"
```

- A função `concatenar` recebe três strings e as junta.
- Usando `partialRight`, o ponto de exclamação (`"!"`) é fixado como o último argumento.

## Notas

- `partialRight` é especialmente útil quando os argumentos finais são mais previsíveis ou fixos.
- A ordem dos argumentos passados na execução e os parcialmente aplicados é significativa.

## Código Fonte

::: code-group
```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...args, ...partial);
}
```

```javascript
function partialRight(callback, ...partial) {
  return (...args) => callback(...args, ...partial);
}
```
:::

## Referências

- [Currying e Aplicação Parcial](https://developer.mozilla.org/pt-BR/docs/Glossary/Currying)