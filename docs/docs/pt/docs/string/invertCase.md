# invertCase

A função `invertCase` inverte a caixa de cada caractere em uma string. Ela converte as letras minúsculas em maiúsculas e as maiúsculas em minúsculas, deixando os caracteres não alfabéticos inalterados.

## Sintaxe

```typescript
function invertCase(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| str   | `string` | A string cuja caixa dos caracteres será invertida. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string com a caixa de cada caractere invertida. |

## Exemplos

```typescript
console.log(invertCase("Hello World"));  // Saída: "hELLO wORLD"
console.log(invertCase("JavaScript"));   // Saída: "jAVAsCRIPT"
console.log(invertCase("12345"));        // Saída: "12345" (sem alteração)
```

## Notas

- A função utiliza `split("")` para dividir a string em um array de caracteres.
- Em seguida, usa o método `map()` para verificar cada caractere, utilizando `isLowerCase` e `isUpperCase` para determinar se deve ser convertido para maiúscula ou minúscula, respectivamente.
- O resultado é então reunido de volta em uma string usando `join("")`.

## Código Fonte

::: code-group
```typescript
import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

function invertCase(str: string): string {
  return str.split("").map((str) => {
    if (isLowerCase(str)) {
      return str.toUpperCase();
    } else if (isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}
```

```javascript
import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

function invertCase(str) {
  return str.split("").map((str) => {
    if (isLowerCase(str)) {
      return str.toUpperCase();
    } else if (isUpperCase(str)) {
      return str.toLowerCase();
    }

    return str;
  }).join("");
}
```
::: 

## Referências

- [String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)