# getLanguage

A função `getLanguage` retorna o idioma preferido do navegador do usuário.

## Sintaxe

```typescript
getLanguage(): string;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo     | Descrição                                 |
| -------- | ----------------------------------------- |
| `string` | Código do idioma preferido (ex: "pt-BR")  |

## Exemplos

```typescript
getLanguage();
// => "pt-BR"
```

## Notas

* Útil para internacionalização e adaptação de conteúdo.
* Pode retornar apenas o código do idioma principal (ex: "en").

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/language