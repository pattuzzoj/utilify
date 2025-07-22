# generateUUID

Gera um UUID (Universally Unique Identifier) versão 4.

## Sintaxe
```typescript
generateUUID(): string
```

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-----------|
| —    | —    | Nenhum    |

## Retorno

| Tipo      | Descrição                       |
|-----------|---------------------------------|
| `string`  | Um UUID v4 no formato padrão     |

## Exemplo
```typescript
generateUUID(); // "e.g. 123e4567-e89b-12d3-a456-426614174000"
```

## Notas
- Utiliza a API `crypto.randomUUID` disponível em ambientes modernos.

## Referências
- [MDN: crypto.randomUUID](https://developer.mozilla.org/pt-BR/docs/Web/API/Crypto/randomUUID)
- [RFC 4122 - UUID](https://datatracker.ietf.org/doc/html/rfc4122)