# getTheme

A função `getTheme` retorna o tema preferido do usuário, como "light" ou "dark", com base nas configurações do sistema ou navegador.

## Sintaxe

```typescript
getTheme(): "light" | "dark";
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo                  | Descrição                   |
| --------------------- | --------------------------- |
| `"light"` \| `"dark"` | Tema preferido do usuário   |

## Exemplos

```typescript
getTheme();
// => "dark"
```

## Notas

* Útil para adaptar a interface ao tema do usuário.
* Baseia-se em media queries do CSS.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/@media/prefers-color-scheme