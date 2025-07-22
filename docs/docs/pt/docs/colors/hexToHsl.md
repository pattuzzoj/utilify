# hexToHsl

A função `hexToHsl` converte uma cor em formato hexadecimal para o formato HSL.

## Sintaxe

```typescript
hexToHsl(hex: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hex`   | `string`  | Cor em formato hexadecimal |

### Retorno

| Tipo      | Descrição                        |
|---------- |----------------------------------|
| `string`  | Cor convertida para o formato HSL |

## Exemplos

```typescript
hexToHsl("#ff0000");
// => "hsl(0, 100%, 50%)"
```

## Notas

* Lança um erro se o valor não for um hexadecimal válido.
* Útil para conversão entre modelos de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hsl