# sleep

A função `sleep` cria uma pausa assíncrona no código por um período de tempo especificado.

## Sintaxe

```typescript
function sleep(timeout: number): Promise<void>
```

### Parâmetros

| Nome     | Tipo     | Descrição                          |
|----------|----------|------------------------------------|
| timeout  | `number` | O tempo de espera em milissegundos.|

### Retorno

| Tipo          | Descrição                    |
|---------------|------------------------------|
| `Promise<void>` | Promessa resolvida após o tempo especificado.|

## Exemplos

```typescript
async function exemplo() {
  console.log("Esperando 2 segundos...");
  await sleep(2000);
  console.log("Pausa concluída!");
}

exemplo();
```

## Notas

- Útil em contextos onde uma pausa temporária é necessária, como em testes ou para simular atrasos em chamadas de API.
- Como `sleep` retorna uma promessa, é necessário usar `await` ou trabalhar com `.then` para manipular a pausa corretamente.

## Código Fonte

::: code-group
```typescript
async function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
```

```javascript
async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
```
:::

## Referências

- [setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)