# onOnline

A função `onOnline` adiciona um ouvinte para o evento de reconexão da internet no navegador.

## Sintaxe

```typescript
onOnline(listener: () => void): void;
```

### Parâmetros

| Nome        | Tipo      | Descrição                                 |
|-------------|-----------|-------------------------------------------|
| `listener`  | `função`  | Função chamada quando voltar online       |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
onOnline(() => {
  alert("Você voltou a ficar online!");
});
```

## Notas

* Útil para detectar reconexão e adaptar a interface.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/onLine