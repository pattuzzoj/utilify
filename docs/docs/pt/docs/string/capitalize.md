# capitalize

A função `capitalize` transforma a primeira letra de uma string em maiúscula e mantém as demais em minúscula.

## Sintaxe

```typescript
function capitalize(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                      |
|-------|----------|------------------------------------------------|
| str   | `string` | A string que terá sua primeira letra capitalizada. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string com a primeira letra em maiúscula e as demais inalteradas. |

## Exemplos

```typescript
console.log(capitalize("hello"));  // Saída: "Hello"
console.log(capitalize("world"));  // Saída: "World"
console.log(capitalize("javaScript")); // Saída: "JavaScript"
```

## Notas

- A função utiliza o método `charAt(0)` para acessar o primeiro caractere da string e `toUpperCase()` para transformá-lo em maiúsculo.
- Em seguida, usa `concat()` para juntar a letra maiúscula com o restante da string, obtido por `slice(1)`.

## Código Fonte

::: code-group
```typescript
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
```

```javascript
function capitalize(str) {
  return str.charAt(0).toUpperCase().concat(str.slice(1));
}
```
::: 

## Referências

- [String.prototype.charAt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.prototype.toUpperCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)