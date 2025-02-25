# isUpperCase

A função `isUpperCase` verifica se todos os caracteres alfabéticos de uma string são maiúsculos, ignorando os espaços em branco.

## Sintaxe

```typescript
function isUpperCase(str: string): boolean
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser verificada.                         |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `boolean` | Retorna `true` se todos os caracteres alfabéticos forem maiúsculos, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isUpperCase("HELLO"));        // Saída: true
console.log(isUpperCase("Hello World"));  // Saída: false
console.log(isUpperCase("JAVA"));         // Saída: true
console.log(isUpperCase("lower case"));   // Saída: false
```

## Notas

- A função utiliza uma expressão regular para verificar se a string não contém letras minúsculas, após remover os espaços em branco com `replace(/\s+/g, "")`.
- A expressão regular `/^(?!.*[a-z]).*[A-Z].*$/` assegura que a string contenha pelo menos uma letra maiúscula e nenhuma letra minúscula.

## Código Fonte

::: code-group
```typescript
function isUpperCase(str: string): boolean {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}
```

```javascript
function isUpperCase(str) {
  return /^(?!.*[a-z]).*[A-Z].*$/.test(str.replace(/\s+/g, ""));
}
```
::: 

## Referências

- [RegExp](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)