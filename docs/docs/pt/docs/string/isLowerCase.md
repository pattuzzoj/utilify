# isLowerCase

Verifica se uma string contém pelo menos uma letra minúscula e nenhuma maiúscula.

## Sintaxe
```typescript
isLowerCase(str: string): boolean
```

## Parâmetros

| Nome   | Tipo     | Descrição                      |
|--------|----------|--------------------------------|
| `str`  | `string` | A string a ser verificada.     |

## Retorno

| Tipo      | Descrição                                                                 |
|-----------|--------------------------------------------------------------------------|
| `boolean` | `true` se a string contém pelo menos uma letra minúscula e nenhuma maiúscula, caso contrário `false`. |

## Exemplo
```typescript
isLowerCase("abc"); // true
isLowerCase("Abc"); // false
isLowerCase("123"); // false
isLowerCase(""); // false
```

## Notas
- Lança `TypeError` se o argumento não for uma string.
- Espaços são ignorados na verificação.

## Referências
- [MDN: Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)