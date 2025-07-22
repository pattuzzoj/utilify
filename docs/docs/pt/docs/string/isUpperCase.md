# isUpperCase

Verifica se uma string contém pelo menos uma letra maiúscula e nenhuma minúscula.

## Sintaxe
```typescript
isUpperCase(str: string): boolean
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser verificada.     |

## Retorno

| Tipo      | Descrição                                                                 |
|-----------|--------------------------------------------------------------------------|
| `boolean` | `true` se a string contém pelo menos uma letra maiúscula e nenhuma minúscula, caso contrário `false`. |

## Exemplo
```typescript
isUpperCase("ABC"); // true
isUpperCase("aBC"); // false
isUpperCase("123"); // false
isUpperCase(""); // false
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços são ignorados na verificação.

## Referências
- [MDN: Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)