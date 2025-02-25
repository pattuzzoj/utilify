# maskString

A função `maskString` aplica uma máscara a uma parte específica de uma string, deixando o início e o final da string inalterados.

## Sintaxe

```typescript
function maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```

### Parâmetros

| Nome       | Tipo     | Descrição                                                        |
|------------|----------|------------------------------------------------------------------|
| str        | `string` | A string na qual a máscara será aplicada.                       |
| mask       | `string` | O caractere ou conjunto de caracteres usados para aplicar a máscara. |
| maskStart  | `number` | O índice de início da parte da string que será mascarada.       |
| maskLength | `number` | O comprimento da parte da string que será mascarada.            |

### Retorno

| Tipo    | Descrição                                         |
|---------|---------------------------------------------------|
| `string` | A string com a parte mascarada.                   |

## Exemplos

```typescript
console.log(maskString("123456789", "*", 3, 4)); // Saída: "1234****89"
console.log(maskString("Hello World", "#", 6, 5)); // Saída: "Hello #####"
console.log(maskString("abcdef", "X", 1, 2)); // Saída: "aXXdef"
```

## Notas

- A função usa `Math.min(maskLength, str.length - maskStart)` para garantir que o comprimento da máscara não ultrapasse o final da string.
- A string é dividida em três partes: o início (`start`), a parte a ser mascarada (`masked`), e o final (`end`), e então as partes são concatenadas novamente.

## Código Fonte

::: code-group
```typescript
function maskString(str: string, mask: string, maskStart: number, maskLength: number) {
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}
```

```javascript
function maskString(str, mask, maskStart, maskLength) {
  maskLength = Math.min(maskLength, str.length - maskStart);

  const start = str.slice(0, maskStart);
  const end = str.slice(maskStart + maskLength);
  const masked = mask.repeat(maskLength);

  return start + masked + end;
}
```
::: 

## Referências

- [String.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.repeat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)