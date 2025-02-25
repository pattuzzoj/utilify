# parallel

A função `parallel` executa várias funções assíncronas de forma concorrente, aguardando que todas sejam concluídas antes de resolver a promessa. Ela recebe um array de funções que retornam promessas e as executa em paralelo.

## Sintaxe

```typescript
function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]>;
```

### Parâmetros

| Nome        | Tipo                                    | Descrição                                                       |
|-------------|-----------------------------------------|-------------------------------------------------------------------|
| `callbacks` | `(() => Promise<any>)[]`                | Um array de funções que retornam promessas.                      |

### Retorno

| Tipo               | Descrição                                             |
|--------------------|-------------------------------------------------------|
| `Promise<any[]>`    | Uma promessa que é resolvida com um array dos resultados de cada callback. |

## Exemplos

### Exemplo 1: Buscando dados de várias APIs

```typescript
const fetchUser = () => fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

async function fetchData() {
  const [user, posts] = await parallel(fetchUser, fetchPosts);
  console.log(user);
  console.log(posts);
}

fetchData();
```

- `fetchUser` e `fetchPosts` são funções assíncronas que buscam dados de uma API.
- `parallel` executa ambas as funções de forma concorrente e aguarda ambas resolverem.
- Os resultados são exibidos quando ambas as promessas são resolvidas.

### Exemplo 2: Executando várias promessas

```typescript
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  const results = await parallel(
    () => delay(1000).then(() => 'Primeira tarefa concluída'),
    () => delay(500).then(() => 'Segunda tarefa concluída'),
    () => delay(2000).then(() => 'Terceira tarefa concluída')
  );
  console.log(results);  // Saída: ["Primeira tarefa concluída", "Segunda tarefa concluída", "Terceira tarefa concluída"]
}

run();
```

- A função `parallel` executa as três promessas de atraso de forma concorrente e, uma vez que todas terminam, os resultados são retornados como um array.

## Notas

- Se qualquer uma das promessas for rejeitada, o `Promise.all` irá rejeitar a promessa principal.
- Todos os callbacks são executados de forma concorrente, não sequencial.

## Código Fonte

::: code-group
```typescript
async function parallel(...callbacks: (() => Promise<any>)[]) {
  return Promise.all(callbacks.map(callback => callback()));
}
```

```javascript
async function parallel(...callbacks) {
  return Promise.all(callbacks.map(callback => callback()));
}
```
:::

## Referências

- [Promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)