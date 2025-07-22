# Browser

O módulo Browser fornece uma coleção de utilitários para interagir com APIs do navegador web. Inclui funções para gerenciar o modo tela cheia, detectar o estado da conexão, manipular eventos do DOM, controlar a rolagem da página e acessar recursos nativos como compartilhamento. Também oferece métodos para verificar as preferências do usuário e capacidades do dispositivo.

## Visão Geral

[exitFullscreen](./exitFullscreen.md)
```typescript
exitFullscreen(): void
```
Sai do modo tela cheia, se suportado pelo navegador.

[getLanguage](./getLanguage.md)
```typescript
getLanguage(): string
```
Retorna o idioma preferido do navegador do usuário.

[getTheme](./getTheme.md)
```typescript
getTheme(): "light" | "dark"
```
Obtém o tema preferido do usuário (claro ou escuro).

[isCookieEnabled](./isCookieEnabled.md)
```typescript
isCookieEnabled(): boolean
```
Verifica se os cookies estão habilitados no navegador.

[isFullscreenEnabled](./isFullscreenEnabled.md)
```typescript
isFullscreenEnabled(): boolean
```
Verifica se a API de tela cheia está disponível.

[isOnline](./isOnline.md)
```typescript
isOnline(): boolean
```
Verifica se o navegador está conectado à internet.

[isShareable](./isShareable.md)
```typescript
isShareable(): boolean
```
Verifica se a API de compartilhamento nativa está disponível.

[isTabActive](./isTabActive.md)
```typescript
isTabActive(): boolean
```
Verifica se a aba do navegador está ativa (visível).

[isTouchDevice](./isTouchDevice.md)
```typescript
isTouchDevice(): boolean
```
Verifica se o dispositivo suporta eventos de toque.

[on](./on.md)
```typescript
on<K extends keyof HTMLElementEventMap>(target: HTMLElement | Document | Window, type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
```
Adiciona um ouvinte de evento a um elemento do DOM.

[onOffline](./onOffline.md)
```typescript
onOffline(listener: () => void): void
```
Adiciona um ouvinte para o evento de desconexão da internet.

[onOnline](./onOnline.md)
```typescript
onOnline(listener: () => void): void
```
Adiciona um ouvinte para o evento de reconexão da internet.

[onVisibilityChange](./onVisibilityChange.md)
```typescript
onVisibilityChange(listener: () => void): void
```
Adiciona um ouvinte para mudanças de visibilidade da aba.

[requestFullscreen](./requestFullscreen.md)
```typescript
requestFullscreen(element?: HTMLElement): void
```
Solicita que um elemento entre em modo tela cheia.

[scrollToElement](./scrollToElement.md)
```typescript
scrollToElement(target: string | HTMLElement, options?: ScrollIntoViewOptions): void
```
Rola suavemente até um elemento alvo na página.

[scrollToTop](./scrollToTop.md)
```typescript
scrollToTop(options?: ScrollToOptions): void
```
Rola suavemente até o topo da página.

[share](./share.md)
```typescript
share(data: ShareData): Promise<void>
```
Utiliza a API nativa para compartilhar dados como título, texto, URL ou arquivos.