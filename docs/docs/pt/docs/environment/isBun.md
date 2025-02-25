# isBun

A função `isBun` verifica se o ambiente de execução atual é o [Bun](https://bun.sh), um runtime moderno para JavaScript.

## Sintaxe

```typescript
function isBun(): boolean;
```

### Retorno

| Tipo      | Descrição                                                           |
|-----------|---------------------------------------------------------------------|
| `boolean` | Retorna `true` se o runtime for Bun, caso contrário, `false`.       |

## Exemplos

```typescript
console.log(isBun()); // true se estiver rodando no Bun, false caso contrário
```

## Notas

- A função utiliza o objeto global `Bun` para determinar se o runtime é o Bun. Especificamente, verifica se `Bun` existe e possui a propriedade `version`.
- Útil para otimizações ou funcionalidades específicas do runtime.

## Código Fonte

::: code-group
```typescript
function isBun(): boolean {
  return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
```

```javascript
function isBun() {
  return typeof Bun === 'object' && Object.hasOwn(Bun, 'version');
}
```
:::

## Referências

- [Documentação do Bun](https://bun.sh/docs)
- [Object.hasOwn - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)