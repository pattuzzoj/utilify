# customError

A função `customError` cria uma classe de erro personalizada com um nome específico, facilitando a identificação de diferentes tipos de erros em sua aplicação.

## Sintaxe

```typescript
customError(name: string): typeof Error;
```

### Parâmetros

| Nome  | Tipo     | Descrição                                 |
|-------|----------|-------------------------------------------|
| `name`| `string` | O nome que será atribuído à classe de erro |

### Retorno

| Tipo           | Descrição                                                        |
|----------------|------------------------------------------------------------------|
| `typeof Error` | Uma classe que estende `Error` com o nome personalizado informado |

## Exemplos

```typescript
const NotFoundError = customError("NotFoundError");
throw new NotFoundError("Recurso não encontrado");
// => lança um erro com nome "NotFoundError" e mensagem "Recurso não encontrado"

const AuthError = customError("AuthError");
throw new AuthError("Acesso negado");
// => lança um erro com nome "AuthError" e mensagem "Acesso negado"
```

## Notas

* A classe gerada herda de `Error` e define o nome conforme o parâmetro informado.
* Utiliza `Error.captureStackTrace` (quando disponível) para remover a própria função do stack trace, facilitando o debug.
* Útil para criar diferentes tipos de erros sem repetir código boilerplate.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
