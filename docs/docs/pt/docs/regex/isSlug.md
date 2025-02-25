# isSlug

A função `isSlug` verifica se uma string fornecida é um slug válido.

## Sintaxe

```typescript
function isSlug(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                          |
|------|----------|------------------------------------|
| value  | `string` | A string a ser validada como slug. |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se a string for um slug válido, caso contrário, `false`. |

## Exemplos

```typescript
console.log(isSlug("slug-valido")); // Saída: true
console.log(isSlug("slug-valido-123")); // Saída: true
console.log(isSlug("Slug Inválido")); // Saída: false
console.log(isSlug("slug_invalido")); // Saída: false
console.log(isSlug("slug--invalido")); // Saída: false
```

## Notas

- Um slug válido:
  - Contém apenas letras minúsculas (`a-z`), números (`0-9`) e hifens (`-`).
  - Não contém hifens consecutivos.
  - Não começa ou termina com um hifen.
- A função utiliza uma expressão regular para validar o formato do slug.

## Código Fonte

::: code-group
```typescript
function isSlug(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
```

```javascript
function isSlug(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
```
::: 

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)