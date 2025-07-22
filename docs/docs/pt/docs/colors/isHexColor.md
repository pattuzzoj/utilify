# isHexColor

A função `isHexColor` verifica se uma string representa uma cor hexadecimal válida.

## Sintaxe

```typescript
isHexColor(hex: string): boolean;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hex`   | `string`  | Cor em formato hexadecimal |

### Retorno

| Tipo       | Descrição                                 |
|------------|-------------------------------------------|
| `boolean`  | Retorna `true` se for uma cor hexadecimal  |

## Exemplos

```typescript
isHexColor("#ff0000");
// => true

isHexColor("#f00");
// => true

isHexColor("rgb(255, 0, 0)");
// => false
```

## Notas

* Aceita formatos curtos (#fff) e longos (#ffffff), com ou sem canal alfa.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hex