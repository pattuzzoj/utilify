# randomColor

A função `randomColor` gera uma cor aleatória no formato especificado: hexadecimal, RGB ou HSL, com opção de canal alfa.

## Sintaxe

```typescript
randomColor(format?: "hex" | "rgb" | "hsl", alpha?: boolean): string;
```

### Parâmetros

| Nome     | Tipo      | Descrição                                                      |
| -------- | --------- | ------------------------------------------------------------- |
| `format` | `string`  | (Opcional) Formato de saída: "hex", "rgb" ou "hsl"           |
| `alpha`  | `boolean` | (Opcional) Se verdadeiro, inclui canal alfa                    |

### Retorno

| Tipo      | Descrição                                 |
| --------- | ----------------------------------------- |
| `string`  | Cor aleatória no formato especificado      |

## Exemplos

```typescript
randomColor();
// => "rgb(123, 45, 67)"

randomColor("hex");
// => "#a1b2c3"

randomColor("hsl", true);
// => "hsla(210, 50%, 60%, 0.7)"
```

## Notas

* Lança um erro se o formato não for válido.
* Útil para gerar cores dinâmicas em interfaces.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value