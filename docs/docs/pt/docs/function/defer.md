# defer

A função `defer` executa uma função de callback assim que o evento atual da pilha de chamadas for finalizado, utilizando a resolução de uma Promise. Isso garante que a execução do código seja postergada até que o JavaScript tenha completado a execução do código síncrono atual.

## Sintaxe

```typescript
function defer(callback: () => void): void;
```

### Parâmetros

| Nome       | Tipo                  | Descrição                                    |
|------------|-----------------------|----------------------------------------------|
| `callback` | `() => void`           | A função que será executada de forma assíncrona. |

### Retorno

| Tipo       | Descrição                                          |
|------------|----------------------------------------------------|
| `void`     | Não retorna nada. A função `callback` será chamada em uma próxima fase da fila de execução. |

## Exemplos

### Exemplo 1: Uso básico de defer

```typescript
console.log('Antes');

defer(() => {
  console.log('Executado depois');
});

console.log('Depois');
```

**Saída:**
```
Antes
Depois
Executado depois
```

### Exemplo 2: Defer para atraso na execução

```typescript
const delayedAction = () => {
  console.log('Ação adiada');
};

defer(delayedAction);
```

**Saída:**
```
Ação adiada
```

A função `delayedAction` será executada após a execução do código atual na pilha.

## Notas

- `defer` utiliza a Promise para agendar a execução da função, garantindo que ela ocorra de forma assíncrona, após a execução do código síncrono atual.
- Isso é útil quando você deseja garantir que uma função seja chamada apenas depois que o restante do código síncrono for executado.

## Código

::: code-group
```typescript
function defer(callback: () => void): void {
  Promise.resolve().then(callback);
}
```

```javascript
function defer(callback) {
  Promise.resolve().then(callback);
}
```
:::

## Referências

- [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [then](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)