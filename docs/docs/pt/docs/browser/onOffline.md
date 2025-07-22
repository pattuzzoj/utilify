# onOffline

A função `onOffline` adiciona um ouvinte para o evento de desconexão da internet no navegador.

## Sintaxe

```typescript
onOffline(listener: () => void): void;
```

### Parâmetros

| Nome        | Tipo      | Descrição                                 |
|-------------|-----------|-------------------------------------------|
| `listener`  | `função`  | Função chamada quando ficar offline       |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
onOffline(() => {
  alert("Você está offline!");
});
```

## Notas

* Útil para detectar perda de conexão e adaptar a interface.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/onLine