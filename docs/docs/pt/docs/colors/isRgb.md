# isRgb

A função `isRgb` verifica se uma string fornecida é uma cor RGB ou RGBA válida.

## Assinatura

```typescript
function isRgb(rgb: string): boolean;
```

### Parâmetros

| Nome  | Tipo    | Descrição                                          |
|-------|---------|----------------------------------------------------|
| `rgb` | `string`| A string a ser verificada, representando uma cor RGB ou RGBA. |

### Retorno

| Tipo    | Descrição                                                   |
|---------|-------------------------------------------------------------|
| `boolean` | Retorna `true` se a string for uma cor RGB ou RGBA válida, caso contrário `false`. |

## Exemplos

```typescript
console.log(isRgb("255, 0, 0")); // true
console.log(isRgb("255, 0, 0, 0.5")); // true
console.log(isRgb("255, 0, 0, 1.5")); // false
```

## Notas

- A função suporta formatos RGB e RGBA.

## Código Fonte

::: code-group
```typescript
function isRgb(rgb: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    rgb
  );
}
```

```javascript
function isRgb(rgb) {
  return /^(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(rgb);
}
```
:::

## Referências

- [Expressões Regulares - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

---

Caso precise de mais algum ajuste, estou à disposição!