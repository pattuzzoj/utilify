# slugify

A função `slugify` converte uma string para um formato de URL amigável, removendo caracteres especiais, transformando tudo em minúsculas, e substituindo os espaços por hífens.

## Sintaxe

```typescript
function slugify(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string a ser convertida para o formato slug.     |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string convertida para o formato slug.       |

## Exemplos

```typescript
console.log(slugify("Hello World!"));            // Saída: "hello-world"
console.log(slugify("JavaScript is fun!"));      // Saída: "javascript-is-fun"
console.log(slugify("  Extra spaces here!  "));  // Saída: "extra-spaces-here"
console.log(slugify("Título com acentuação!"));  // Saída: "titulo-com-acentuacao"
```

## Notas

- A função utiliza `trim()` para remover os espaços no início e no final da string.
- Em seguida, utiliza `replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")` para remover caracteres especiais.
- Transforma toda a string para minúsculas com `toLowerCase()`.
- Substitui os espaços por hífens com `replace(/\s+/g, '-')`.
- Normaliza a string com `normalize('NFD')` e remove os acentos com `replace(/[\u0300-\u036f]/g, '')`.

## Código Fonte

::: code-group
```typescript
function slugify(str: string): string {
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```

```javascript
function slugify(str) {
  return str
  .trim()
  .replace(/[!@#$%^&*()\-=+[\]{}|\\~;:'",.<>?\/]/g, "")
  .toLowerCase()
  .replace(/\s+/g, '-')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```
::: 

## Referências

- [String.prototype.trim()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.prototype.toLowerCase()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.normalize()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)