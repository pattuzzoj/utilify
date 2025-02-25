# isHsl

A função `isHsl` verifica se uma string fornecida é uma cor HSL ou HSLA válida.

## Assinatura

```typescript
function isHsl(hsl: string): boolean;
```

### Parâmetros

| Nome  | Tipo    | Descrição                                          |
|-------|---------|----------------------------------------------------|
| `hsl` | `string`| A string a ser verificada, representando uma cor HSL ou HSLA. |

### Retorno

| Tipo    | Descrição                                                   |
|---------|-------------------------------------------------------------|
| `boolean` | Retorna `true` se a string for uma cor HSL ou HSLA válida, caso contrário `false`. |

## Exemplos

```typescript
console.log(isHsl("120, 100%, 50%")); // true
console.log(isHsl("120, 100%, 50%, 0.5")); // true
console.log(isHsl("120, 100%, 50%, 1.5")); // false
```

## Notas

- A função suporta formatos HSL e HSLA.

## Código Fonte

::: code-group
```typescript
function isHsl(hsl: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    hsl
  );
}
```

```javascript
function isHsl(hsl) {
  return /^(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(hsl);
}
```
:::

## Referências

- [Expressões Regulares - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)