# Instalação

**Utilify** pode ser instalado com facilidade por meio dos principais gerenciadores de pacotes, incluindo suporte completo ao [JSR](https://jsr.io/) — o registro oficial de módulos do Deno, compatível também com Node.js e outros runtimes modernos.

* **npm**
* **yarn**
* **pnpm**
* **JSR (Deno)**

Escolha o gerenciador de pacotes que você utiliza em seu projeto e siga uma das opções abaixo para instalar o pacote principal:

## Instalação do Pacote Principal

Se você deseja acessar todas as funcionalidades do **Utilify** de uma só vez, basta instalar o pacote **@utilify/core**. O **Utilify** é distribuído como um pacote único, contendo toda a coleção de utilitários. Essa abordagem simplifica a instalação, evita dependências fragmentadas e melhora a manutenção do seu projeto.

::: code-group

```bash [npm]
npm install @utilify/core
```

```bash [yarn]
yarn add @utilify/core
```

```bash [pnpm]
pnpm add @utilify/core
```

```bash [JSR (Deno)]
deno add jsr:@utilify/core
```

:::

### Sobre o JSR

O [JSR](https://jsr.io/) é o registro oficial de módulos do Deno. Ele permite instalar pacotes modernos com um único comando, mesmo em ambientes como Node.js, Bun ou compatíveis com npm.

#### Exemplos de uso do JSR:

::: code-group

```bash [Deno]
deno add jsr:@utilify/core
```

```bash [npm]
npx jsr add @utilify/core
```

```bash [bun]
bunx jsr add @utilify/core
```

```bash [pnpm]
pnpm add jsr:@utilify/core
```

```bash [yarn]
yarn add jsr:@utilify/core
```

:::

---

✅ Após a instalação, você pode importar qualquer função diretamente:

```ts
import { after, isString } from "@utilify/core";
```

O pacote é compatível com módulos ES (ESM) e pode ser usado tanto em projetos TypeScript quanto JavaScript.

---