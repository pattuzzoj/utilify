# template

Cria uma função de template que substitui placeholders em uma string por valores de um objeto de dados, suportando padrões personalizados e escape.

## Sintaxe
```typescript
template(str: string, options?: TemplateOptions): (data: Record<string, any>) => string
```

### TemplateOptions
| Propriedade | Tipo                                   | Descrição                                                                 |
|-------------|----------------------------------------|--------------------------------------------------------------------------|
| `pattern`   | `RegExp` (opcional)                    | Padrão personalizado para placeholders (padrão: `/\{\{(.*?)\}\}/g`).         |
| `escape`    | `(value: string, key: string) => string` (opcional) | Função para escapar valores antes da interpolação.                      |

## Parâmetros
| Parâmetro | Tipo                      | Descrição                                               |
|-----------|---------------------------|---------------------------------------------------------|
| `str`     | `string`                  | String com placeholders no formato `\{\{chave\}\}`.         |
| `options` | `TemplateOptions` (opcional) | Opções para padrão personalizado e escape.              |

## Retorno
| Tipo      | Descrição                                                                 |
|-----------|-------------------------------------------------------------------------|
| `(data: Record<string, any>) => string` | Função que recebe um objeto de dados e retorna a string interpolada. |

## Exemplo
```typescript
const fn = template("Olá, \{\{nome\}\}!", { escape: (v) => v.toUpperCase() });
fn({ nome: "Maria" }); // "Olá, MARIA!"
```

## Notas
- Lança `TypeError` se `str` não for string, `pattern` não for RegExp ou `escape` não for função.
- Placeholders sem valor correspondente permanecem inalterados.
- As barras invertidas (\) antes das chaves ( \{\{ e \}\} ) são caracteres de escape utilizados apenas para evitar conflitos com o compilador da documentação. Ao utilizar a função na prática, use chaves simples sem escape.

## Referências
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)