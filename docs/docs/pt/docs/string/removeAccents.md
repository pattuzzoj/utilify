# removeAccents

A função `removeAccents` remove os acentos de uma string, retornando uma versão da string sem os sinais diacríticos.

## Sintaxe

```typescript
function removeAccents(str: string): string
```

### Parâmetros

| Nome  | Tipo     | Descrição                                          |
|-------|----------|----------------------------------------------------|
| str   | `string` | A string da qual os acentos serão removidos.      |

### Retorno

| Tipo    | Descrição                                      |
|---------|------------------------------------------------|
| `string` | A string sem os acentos.                      |

## Exemplos

```typescript
console.log(removeAccents("Título com acentuação!")); // Saída: "Titulo com acentuacao!"
console.log(removeAccents("Café com leite"));         // Saída: "Cafe com leite"
console.log(removeAccents("Mário e João"));           // Saída: "Mario e Joao"
```

## Notas

- A função utiliza `normalize('NFD')` para decompor os caracteres em seus caracteres base e marcas diacríticas.
- Em seguida, utiliza `replace(/[\u0300-\u036f]/g, '')` para remover as marcas diacríticas, deixando apenas os caracteres base.

## Código Fonte

::: code-group
```typescript
function removeAccents(str: string): string {
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```

```javascript
function removeAccents(str) {
  return str
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');
}
```
::: 

## Referências

- [String.prototype.normalize()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)