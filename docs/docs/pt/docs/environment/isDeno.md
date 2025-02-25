# isDeno

A função `isDeno` verifica se o ambiente de execução atual é o [Deno](https://deno.land), um runtime seguro para JavaScript e TypeScript.

## Sintaxe

```typescript
function isDeno(): boolean;
```

### Retorno

| Tipo      | Descrição                                                         |
|-----------|-------------------------------------------------------------------|
| `boolean` | Retorna `true` se o runtime for Deno, caso contrário, `false`.    |

## Exemplos

```typescript
console.log(isDeno()); // true se estiver rodando no Deno, false caso contrário
```

## Notas

- A função utiliza o objeto global `Deno` para determinar se o runtime é o Deno. Especificamente, verifica se `Deno` existe e possui a propriedade `version`.
- Útil para executar código específico para Deno ou para identificar o ambiente de execução.

## Código Fonte

::: code-group
```typescript
function isDeno(): boolean {
  return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
```

```javascript
function isDeno() {
  return typeof Deno === 'object' && Object.hasOwn(Deno, 'version');
}
```
:::

## Referências

- [Documentação do Deno](https://deno.land/manual)
- [Object.hasOwn - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)