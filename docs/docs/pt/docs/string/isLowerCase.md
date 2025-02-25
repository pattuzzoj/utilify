# isLowerCase

A função `isLowerCase` verifica se todos os caracteres alfabéticos de uma string são minúsculos, ignorando espaços em branco.

## Sintaxe

```typescript
function isLowerCase(str: string): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser verificada.                         |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `boolean` | Retorna `true` se todos os caracteres alfabéticos forem minúsculos, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isLowerCase("hello"));        // Saída: true
console.log(isLowerCase("Hello World"));  // Saída: false
console.log(isLowerCase("javaScript"));   // Saída: false
console.log(isLowerCase("lower case"));   // Saída: true
```

## Notas

- A função utiliza uma expressão regular para verificar se a string não contém letras maiúsculas, após remover os espaços em branco com `replace(/\s+/g, "")`.
- A expressão regular `/^(?!.*[A-Z]).*[a-z].*$/` assegura que a string contenha pelo menos uma letra minúscula e nenhuma letra maiúscula.

## Código Fonte

::: code-group
```typescript
function isLowerCase(str: string): boolean {
  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}
```

```javascript
function isLowerCase(str) {
  return /^(?!.*[A-Z]).*[a-z].*$/.test(str.replace(/\s+/g, ""));
}
```
::: 

## Referências

- [RegExp](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)