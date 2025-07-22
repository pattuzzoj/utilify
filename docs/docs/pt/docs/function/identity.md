# identity

Retorna o valor recebido sem modificações.

## Sintaxe
```typescript
identity<T>(value: T): T
```

## Parâmetros

| Nome     | Tipo   | Descrição              |
|----------|--------|------------------------|
| `value`  | `T`    | O valor a ser retornado.|

## Retorno

| Tipo   | Descrição                        |
|--------|-----------------------------------|
| `T`    | O mesmo valor recebido como argumento. |

## Exemplo
```typescript
identity(42); // 42
identity("abc"); // "abc"
```

## Notas
- Útil como função padrão ou em pipelines funcionais.

## Referências
- [MDN: Identity function](https://developer.mozilla.org/pt-BR/docs/Glossary/Identity_function)