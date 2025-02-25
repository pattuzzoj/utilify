# fallback

A função `fallback` executa uma função principal (`callback`) e retorna seu resultado. Caso o `callback` lance uma exceção, uma função secundária (`fallback`) é executada, retornando um valor seguro como alternativa.

## Sintaxe

```typescript
function fallback<T, U = T>(callback: () => T, fallback: () => U): T | U;
```

### Parâmetros

| Nome        | Tipo               | Descrição                                                                  |
|-------------|--------------------|----------------------------------------------------------------------------|
| `callback`  | `() => T`          | A função principal a ser executada.                                        |
| `fallback`  | `() => U`          | A função de fallback executada caso o `callback` lance uma exceção.        |

### Retorno

| Tipo      | Descrição                                                                |
|-----------|--------------------------------------------------------------------------|
| `T`       | O resultado da execução do `callback`, caso não haja erros.              |
| `U`       | O resultado do `fallback`, caso o `callback` lance uma exceção.          |

## Exemplos

### Exemplo 1: Fornecendo um valor alternativo

```typescript
function operacaoArriscada() {
  if (Math.random() > 0.5) {
    throw new Error("Operação falhou");
  }
  return "Sucesso!";
}

function valorPadrao() {
  return "Valor alternativo";
}

const resultado = fallback(operacaoArriscada, valorPadrao);
console.log(resultado); // Saída: "Sucesso!" ou "Valor alternativo"
```

### Exemplo 2: Lidando com exceções de forma segura

```typescript
const parseJson = (str: string) => JSON.parse(str);
const jsonInvalido = "{ invalido: true }";

const resultadoSeguro = fallback(
  () => parseJson(jsonInvalido),
  () => ({ erro: "JSON inválido" })
);

console.log(resultadoSeguro); // Saída: { erro: "JSON inválido" }
```

## Notas

- Esta função é útil para manipular operações que podem lançar exceções de forma segura.
- A função `fallback` será executada somente se o `callback` lançar uma exceção.

## Código Fonte

::: code-group
```typescript
function fallback<T, U = T>(callback: () => T, fallback: () => U): T | U {
  try {
    return callback();
  } catch {
    return fallback();
  }
}
```

```javascript
function fallback(callback, fallback) {
  try {
    return callback();
  } catch {
    return fallback();
  }
}
```
:::

## Referências

- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)