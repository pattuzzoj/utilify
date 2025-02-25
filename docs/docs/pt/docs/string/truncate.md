# truncate

A função `truncate` trunca uma string até um tamanho especificado e adiciona "..." no final, caso a string exceda esse tamanho.

## Sintaxe

```typescript
function truncate(text: string, size: number): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| text  | `string` | A string a ser truncada.                           |
| size  | `number` | O comprimento máximo da string antes de truncá-la. |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string truncada, com "..." adicionado, se a string exceder o comprimento especificado. |

## Exemplos

```typescript
console.log(truncate("Hello, World!", 5));        // Saída: "Hello..."
console.log(truncate("JavaScript", 4));            // Saída: "Java..."
console.log(truncate("Short", 10));                // Saída: "Short"
console.log(truncate("Another test example", 7)); // Saída: "Anothe..."
```

## Notas

- A função utiliza `slice(0, size)` para extrair a substring até o tamanho especificado.
- Se a string exceder o tamanho especificado, `"..."` será concatenado à string truncada.

## Código Fonte

::: code-group
```typescript
function truncate(text: string, size: number): string {
  return text.slice(0, size).concat("...");
}
```

```javascript
function truncate(text, size) {
  return text.slice(0, size).concat("...");
}
```
::: 

## Referências

- [String.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)