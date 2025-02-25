# memo

A função `memo` é utilizada para armazenar em cache os resultados de uma função com base nos argumentos passados. Isso ajuda a evitar recomputações desnecessárias, melhorando o desempenho. O cache pode ser opcionalmente configurado para expirar após um tempo especificado.

## Sintaxe

```typescript
function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any;
```

### Parâmetros

| Nome           | Tipo                  | Descrição                                                                                     |
|-----------------|-----------------------|-----------------------------------------------------------------------------------------------|
| `callback`      | `(...args: any[]) => any` | A função cujos resultados serão armazenados em cache.                                         |
| `cacheTimeout`  | `number` (opcional)   | Tempo em milissegundos após o qual o cache será invalidado para uma chamada específica.       |

### Retorno

| Tipo             | Descrição                                             |
|------------------|-------------------------------------------------------|
| `(...args: any[]) => any` | Uma nova função que utiliza o cache para otimizar chamadas repetidas. |

## Exemplos

### Exemplo 1: Uso básico do cache

```typescript
import memo from "@utilify/utils";

const soma = (a: number, b: number) => {
  console.log("Executando soma...");
  return a + b;
};

const somaMemo = memo(soma);

console.log(somaMemo(1, 2)); // Executa soma e retorna 3
console.log(somaMemo(1, 2)); // Retorna 3 sem executar novamente
```

### Exemplo 2: Configurando um timeout para o cache

```typescript
const somaMemoComTimeout = memo(soma, 5000);

console.log(somaMemoComTimeout(1, 2)); // Executa soma e retorna 3
setTimeout(() => {
  console.log(somaMemoComTimeout(1, 2)); // Recalcula após 5 segundos
}, 6000);
```

## Dependências

- [djb2](./djb2.md): Função utilizada para gerar um hash único com base nos argumentos.

## Código Fonte

::: code-group
```typescript
import { djb2 } from "@utilify/utils";

function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any {
  const cache = new Map();

  return (...args: any[]): any => {
    const key = djb2(JSON.stringify(args));

    if (!cache.has(key)) {
      cache.set(key, callback(...args));

      if (cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }

    return cache.get(key);
  };
}
```

```javascript
import { djb2 } from "@utilify/utils";

function memo(callback, cacheTimeout) {
  const cache = new Map();

  return (...args) => {
    const key = djb2(JSON.stringify(args));

    if (!cache.has(key)) {
      cache.set(key, callback(...args));

      if (cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }

    return cache.get(key);
  };
}
```
:::

## Referências

- [Map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map): Objeto utilizado para armazenar os dados em cache.
- [JSON.stringify()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Método usado para converter os argumentos em uma string para geração do hash.