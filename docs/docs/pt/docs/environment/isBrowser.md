# isBrowser

A função `isBrowser` verifica se o código está sendo executado em um ambiente de navegador, verificando a existência dos objetos `window` e `document`.

## Sintaxe

```typescript
function isBrowser(): boolean;
```

### Retorno

| Tipo     | Descrição                                                   |
|----------|-------------------------------------------------------------|
| `boolean`| Retorna `true` se o código estiver sendo executado em um navegador, caso contrário retorna `false`. |

## Exemplos

```typescript
console.log(isBrowser()); // true se estiver rodando no navegador, false se estiver em um servidor ou outro ambiente
```

## Notas

- A função verifica a presença dos objetos `window` e `document`, que são típicos de ambientes de navegador.
- Retorna `false` se o código estiver sendo executado em um ambiente que não seja de navegador, como um servidor.

## Código Fonte

::: code-group
```typescript
function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
```

```javascript
function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}
```
:::

## Referências

- [Window - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window)
- [Document - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)