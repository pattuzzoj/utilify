# isBase64

A função `isBase64` verifica se uma string está no formato Base64 válido.

## Sintaxe

```typescript
function isBase64(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                      |
|------|----------|------------------------------------------------|
| value  | `string` | A string a ser verificada como Base64.          |

### Retorno

| Tipo     | Descrição                                      |
|----------|------------------------------------------------|
| `boolean` | Retorna `true` se a string for um Base64 válido, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isBase64("U29mdHdhcmU="));    // Saída: true
console.log(isBase64("U29m^dhd2Y="));     // Saída: false
console.log(isBase64("YWJjZA=="));        // Saída: true
console.log(isBase64("abc123"));          // Saída: false
```

## Notas

- A função utiliza uma expressão regular para verificar se a string segue o padrão de codificação Base64.
- Base64 é utilizado para representar dados binários em formato de texto, incluindo símbolos como `+`, `/`, e o caractere `=` no final para preenchimento.

## Código

::: code-group
```typescript
function isBase64(value: string): boolean {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}
```

```javascript
function isBase64(value) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
}
```
:::

## Referências

- [Base64 - Wikipedia](https://en.wikipedia.org/wiki/Base64)
- [RegExp.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)