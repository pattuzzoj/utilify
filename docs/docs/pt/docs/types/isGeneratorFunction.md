# isGeneratorFunction

A função `isGeneratorFunction` verifica se o valor fornecido é uma função geradora.

## Sintaxe

```typescript
isGeneratorFunction(value: any): value is GeneratorFunction;
```

### Parâmetros

| Nome  | Tipo | Descrição                |
|-------|------|--------------------------|
| value | any  | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean`   | Verdadeiro se for uma função geradora     |

## Exemplos

```typescript
isGeneratorFunction(function* () {}); // => true
isGeneratorFunction(() {}); // => false
```

## Notas

* Útil para validação de funções antes de usar for-of ou yield.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*