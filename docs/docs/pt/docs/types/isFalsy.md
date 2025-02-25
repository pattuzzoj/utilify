# isFalsy  
Verifica se o valor fornecido é considerado "falsy" em JavaScript. A função retorna `true` se o valor for um dos seguintes: `undefined`, `null`, `false`, `NaN`, `0`, `0n`, ou uma string vazia `""`. Caso contrário, retorna `false`.

## Sintaxe
```typescript
function isFalsy(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for "falsy", caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando valores "falsy"
```typescript
isFalsy(undefined); // true
isFalsy(null); // true
isFalsy(false); // true
isFalsy(NaN); // true
isFalsy(0); // true
isFalsy(0n); // true
isFalsy(""); // true
```

### Exemplo 2: Verificando valores "truthy"
```typescript
isFalsy(42); // false
isFalsy("Hello"); // false
isFalsy([]); // false
isFalsy({}); // false
isFalsy(true); // false
```

## Notas
- A função compara diretamente o valor com os valores "falsy" comuns em JavaScript, utilizando o método `includes` em um array.
- É importante notar que `false`, `undefined`, `null`, `NaN`, `0`, `0n` e `""` são valores que, quando convertidos para um contexto booleano, são tratados como `false`. Portanto, são chamados de "falsy values".

## Código Fonte
::: code-group

```typescript
function isFalsy(value: any): boolean {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}
```

```javascript
function isFalsy(value) {
  return [undefined, null, false, NaN, 0, 0n, ""].includes(value);
}
```
:::

## Referências
- [MDN: Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)