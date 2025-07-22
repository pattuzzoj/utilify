## escapeHtml

A função `escapeHtml` escapa caracteres especiais de HTML em uma string para suas respectivas entidades HTML.

### Sintaxe
```typescript
escapeHtml(str: string): string
```

### Parâmetros
| Nome   | Tipo     | Descrição                           |
|--------|----------|-------------------------------------|
| `str`  | `string` | A string de entrada a ser escapada. |

### Retorno
| Tipo     | Descrição                                   |
|----------|---------------------------------------------|
| `string` | A string escapada com entidades HTML.        |

### Exemplo
```typescript
escapeHtml('<div class="teste">"Olá" & \'Mundo\'</div>');
// Saída: '&lt;div class=&quot;teste&quot;&gt;&quot;Olá&quot; &amp; &#39;Mundo&#39;&lt;/div&gt;'
```

### Notas
- Escapa os seguintes caracteres: `&`, `<`, `>`, `"` e `'`.
- Lança `TypeError` se a entrada não for uma string.

### Referências
- [MDN: String.prototype.replace()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace)