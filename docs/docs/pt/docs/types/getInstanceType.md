# getInstanceType

A função `getInstanceType` retorna o nome do construtor (classe) de uma instância, ou `null` se não aplicável.

## Sintaxe

```typescript
getInstanceType(value: any): string | null;
```

### Parâmetros

| Nome    | Tipo    | Descrição                                  |
|---------|---------|--------------------------------------------|
| `value` | `any`   | Valor a ser inspecionado                   |

### Retorno

| Tipo             | Descrição                                   |
|------------------|---------------------------------------------|
| `string \| null` | Nome do construtor ou `null` se não aplicável |

## Exemplos

```typescript
getInstanceType([]); // => "Array"
getInstanceType(new Map()); // => "Map"
getInstanceType(123); // => null
```

## Notas

* Útil para identificar tipos de instâncias de objetos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf