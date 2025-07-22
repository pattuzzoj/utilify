# Installation

**Utilify** can be easily installed using the main package managers, with full support for [JSR](https://jsr.io/) — the official Deno module registry, also compatible with Node.js and other modern runtimes.

* **npm**
* **yarn**
* **pnpm**
* **JSR (Deno)**

Choose the package manager you use in your project and follow one of the options below to install the main package:

## Main Package Installation

If you want access to all **Utilify** features at once, simply install the **@utilify/core** package. **Utilify** is distributed as a single package containing the entire utility collection. This approach simplifies installation, avoids fragmented dependencies, and improves your project's maintainability.

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

### About JSR

[JSR](https://jsr.io/) is the official Deno module registry. It allows you to install modern packages with a single command, even in environments like Node.js, Bun, or npm-compatible runtimes.

#### JSR Usage Examples:

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

✅ After installation, you can import any function directly:

```ts
import { after, isString } from "@utilify/core";
```

The package is compatible with ES modules (ESM) and can be used in both TypeScript and JavaScript projects.

---