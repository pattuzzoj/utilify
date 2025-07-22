# share

A função `share` utiliza a API de compartilhamento nativa do navegador para compartilhar dados como título, texto, URL ou arquivos.

## Sintaxe

```typescript
share(data: ShareData): Promise<void>;
```

### Parâmetros

| Nome     | Tipo         | Descrição                                               |
|----------|--------------|---------------------------------------------------------|
| `data`   | `ShareData`  | Dados a serem compartilhados (título, texto, url, arquivos) |

### Retorno

| Tipo              | Descrição                                 |
|-------------------|-------------------------------------------|
| `Promise<void>`   | Promessa resolvida após o compartilhamento |

## Exemplos

```typescript
share({
  title: "Título",
  text: "Confira este link!",
  url: "https://exemplo.com"
});
```

## Notas

* Disponível apenas em navegadores que suportam a Web Share API.
* Pode lançar erro se o compartilhamento for cancelado ou não suportado.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/share