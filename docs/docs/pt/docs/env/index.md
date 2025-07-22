# Env

O módulo `env` fornece funções utilitárias para detectar e interagir com o ambiente de execução do código, incluindo:

- Detecção do sistema operacional e runtime (Node.js, Deno, Bun, navegador)
- Verificação do ambiente (desenvolvimento/produção)
- Manipulação de variáveis de ambiente
- Detecção do tipo de contexto (servidor, navegador, workers)
- Identificação de dispositivos móveis

Todas as funções são otimizadas para funcionar em diferentes ambientes e retornam resultados consistentes independentemente da plataforma.

## Visão Geral

[equalsEnv](./equalsEnv.md)
```typescript
equalsEnv(env: string): boolean;
```
Verifica se o ambiente atual corresponde ao valor informado (`env`).

[getEnv](./getEnv.md)
```typescript
getEnv(key: string): string | undefined;
```
Obtém o valor de uma variável de ambiente.

[getOS](./getOS.md)
```typescript
getOS(): 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'unknown';
```
Detecta o sistema operacional atual.

[getRuntime](./getRuntime.md)
```typescript
getRuntime(): 'node' | 'deno' | 'bun' | 'browser' | 'unknown';
```
Detecta o runtime de execução.

[hasEnv](./hasEnv.md)
```typescript
hasEnv(key: string): boolean;
```
Verifica se uma variável de ambiente está definida.

[isBrowser](./isBrowser.md)
```typescript
isBrowser(): boolean;
```
Verifica se o código está rodando em um navegador.

[isBun](./isBun.md)
```typescript
isBun(): boolean;
```
Verifica se o código está rodando no ambiente Bun.

[isDedicatedWorker](./isDedicatedWorker.md)
```typescript
isDedicatedWorker(): boolean;
```
Verifica se o código está rodando em um Dedicated Worker.

[isDeno](./isDeno.md)
```typescript
isDeno(): boolean;
```
Verifica se o código está rodando no ambiente Deno.

[isDev](./isDev.md)
```typescript
isDev(): boolean;
```
Verifica se o ambiente está em modo de desenvolvimento.

[isMobile](./isMobile.md)
```typescript
isMobile(): boolean;
```
Verifica se o código está rodando em um dispositivo móvel.

[isNode](./isNode.md)
```typescript
isNode(): boolean;
```
Verifica se o código está rodando em Node.js.

[isProd](./isProd.md)
```typescript
isProd(): boolean;
```
Verifica se o ambiente está em modo de produção.

[isServer](./isServer.md)
```typescript
isServer(): boolean;
```
Verifica se o código está rodando em ambiente de servidor (não navegador).

[isServiceWorker](./isServiceWorker.md)
```typescript
isServiceWorker(): boolean;
```
Verifica se o código está rodando em um Service Worker.

[isWebWorker](./isWebWorker.md)
```typescript
isWebWorker(): boolean;
```
Verifica se o código está rodando em qualquer tipo de Web Worker.
