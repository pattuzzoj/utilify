## interpolate

A função `interpolate` substitui placeholders em uma string por valores de um dicionário de dados.

### Sintaxe

```typescript
interpolate(str: string, data: Record<PropertyKey, any>, pattern?: RegExp): string
```

### Parâmetros

| Parâmetro | Tipo                        | Descrição                                                        |
| :-------- | :-------------------------- | :--------------------------------------------------------------- |
| `str`     | `string`                    | String contendo placeholders no formato `\{\{chave\}\}`.             |
| `data`    | `Record<PropertyKey, any>`  | Dicionário de dados para interpolação.                           |
| `pattern` | `RegExp` (opcional)         | Padrão personalizado para placeholders (padrão: `/\{\{(.*?)\}\}/g`). |

### Retorno

| Tipo     | Descrição                                                        |
|----------|------------------------------------------------------------------|
| `string` | Retorna uma nova string com os placeholders substituídos pelos valores correspondentes em `data`. |

### Exemplo

```typescript
const template = "Olá, \{\{nome\}\}!";
const data = { nome: "Maria" };
interpolate(template, data); // "Olá, Maria!"
```

### Notas

- Placeholders devem estar no formato `\{\{chave\}\}` por padrão.
- Se o valor não existir em `data`, o placeholder é mantido.
- As barras invertidas (\) antes das chaves ( \{\{ e \}\} ) são caracteres de escape utilizados apenas para evitar conflitos com o compilador da documentação. Ao utilizar a função na prática, use chaves simples sem escape.

### Referências
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
