# unflattenObj
A função `unflattenObj` converte um objeto plano com chaves separadas por pontos em um objeto aninhado com base no separador.

## Sintaxe

```typescript
unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | O objeto plano com chaves separadas por pontos a ser convertido em uma estrutura aninhada. |
| `separator` | `string`                     | O separador usado para dividir as chaves em caminhos aninhados (o padrão é `.`). |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | O objeto aninhado gerado a partir do objeto plano.          |

## Exemplos

### Exemplo 1: Desfazer o "Flattening" Básico
```typescript
const obj = { "user.name": "Alice", "user.age": 30 };
const result = unflattenObj(obj);

console.log(result);
// { user: { name: "Alice", age: 30 } }
```

### Exemplo 2: Separador Personalizado
```typescript
const obj = { "user|name": "Alice", "user|age": 30 };
const result = unflattenObj(obj, "|");

console.log(result);
// { user: { name: "Alice", age: 30 } }
```

### Exemplo 3: Desfazendo o "Flattening" de um Objeto Já Aninhado
```typescript
const obj = { "user.name": "Alice", "address.city": "Wonderland", "address.zip": 12345 };
const result = unflattenObj(obj);

console.log(result);
// { user: { name: "Alice" }, address: { city: "Wonderland", zip: 12345 } }
```

## Notas
- A função utiliza uma expressão regular para verificar chaves que contêm o separador e as divide em múltiplos níveis no objeto aninhado.
- Se uma chave não contiver o separador, ela permanece como está no objeto resultante.

## Dependências
Sem dependências externas.

## Código Fonte
::: code-group

```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any> {
  let unflatObj = {} as any;
  const regex = new RegExp(`${separator}`);

  for (const key in obj) {
    if (regex.test(key)) {
      const paths = key.split(separator);
      let reference = unflatObj;

      paths.slice(0, -1).forEach((path) => {
        if (!(path in reference)) {
          reference[path] = {};
        }
        
        reference = reference[path];
      });

      reference[paths[paths.length - 1]] = obj[key];
    } else {
      unflatObj[key] = obj[key];
    }
  }

  return unflatObj;
}
```

```javascript
function unflattenObj(obj, separator = ".") {
  let unflatObj = {};
  const regex = new RegExp(`${separator}`);

  for (const key in obj) {
    if (regex.test(key)) {
      const paths = key.split(separator);
      let reference = unflatObj;

      paths.slice(0, -1).forEach((path) => {
        if (!(path in reference)) {
          reference[path] = {};
        }
        
        reference = reference[path];
      });

      reference[paths[paths.length - 1]] = obj[key];
    } else {
      unflatObj[key] = obj[key];
    }
  }

  return unflatObj;
}
```
:::

## Referências
Sem referências externas.