# hslToHex

A função `hslToHex` converte uma cor em formato HSL ou HSLA para o formato hexadecimal.

## Sintaxe

```typescript
hslToHex(hsl: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hsl`   | `string`  | Cor em formato HSL ou HSLA |

### Retorno

| Tipo      | Descrição                                 |
|---------- |-------------------------------------------|
| `string`  | Cor convertida para o formato hexadecimal  |

## Exemplos

```typescript
hslToHex("hsl(0, 100%, 50%)");
// => "#ff0000"
```

## Notas

* Lança um erro se o valor não for um HSL válido.
* Útil para conversão entre modelos de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hsl
