# noop

A função `noop` (No Operation) é uma função de marcador de posição que não realiza nenhuma ação quando chamada. Geralmente, é utilizada como função padrão ou stub em situações onde uma função é necessária, mas nenhuma ação precisa ser executada.

## Sintaxe

```typescript
function noop(): void;
```

### Parâmetros

- Nenhum

### Retorno

| Tipo  | Descrição                                 |
|-------|-------------------------------------------|
| `void`| Esta função não retorna nada.             |

## Exemplos

### Exemplo 1: Usando `noop` como uma função padrão

```typescript
const callback = noop;
callback(); // Não faz nada
```

### Exemplo 2: Passando `noop` em ouvintes de eventos onde nenhuma ação é necessária

```typescript
const button = document.getElementById("button");
button.addEventListener("click", noop); // Nenhuma ação será tomada ao clicar no botão
```

## Notas

- `noop` é útil em situações onde uma função é requerida sintaticamente, mas nenhuma funcionalidade real precisa ser implementada.
- É tipicamente utilizada para melhorar a performance, evitando definições de funções desnecessárias ou fornecendo um valor de fallback para parâmetros de callback opcionais.

## Código Fonte

::: code-group
```typescript
function noop(): void {}
```

```javascript
function noop() {}
```
:::

## Referências

- [Function.prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function)