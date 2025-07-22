# String

O módulo String fornece um conjunto abrangente de funções utilitárias para manipulação e transformação de strings. Desde operações básicas como capitalização e contagem de caracteres até transformações mais complexas como conversão para diferentes formatos de caso (camelCase, kebab-case, etc.), este módulo oferece ferramentas essenciais para o processamento eficiente de texto em suas aplicações.

Principais recursos:
- Manipulação de caso (maiúsculas/minúsculas)
- Contagem de caracteres e palavras
- Remoção de acentos e caracteres especiais
- Mascaramento de strings
- Conversão para diferentes formatos (camelCase, kebab-case, PascalCase, snake_case)
- Processamento de templates
- Manipulação de HTML
- Geração de slugs para URLs

## Visão Geral

### [capitalize](./capitalize.md)
```typescript
capitalize(str: string): string
```
Coloca a primeira letra da string em maiúsculo e o restante em minúsculo.

### [charCount](./charCount.md)
```typescript
charCount(str: string, char: string): number
```
Conta quantas vezes um caractere específico aparece em uma string.

### [escapeHtml](./escapeHtml.md)
```typescript
escapeHtml(str: string): string
```
Escapa caracteres especiais de HTML em uma string para suas respectivas entidades HTML.

### [interpolate](./interpolate.md)
```typescript
interpolate(str: string, data: Record<PropertyKey, any>, pattern?: RegExp): string
```
Substitui placeholders em uma string por valores de um objeto de dados.

### [invertCase](./invertCase.md)
```typescript
invertCase(str: string): string
```
Inverte o caso de cada caractere da string (maiúsculas viram minúsculas e vice-versa).

### [isLowerCase](./isLowerCase.md)
```typescript
isLowerCase(str: string): boolean
```
Retorna true se todos os caracteres alfabéticos da string estiverem em minúsculo.

### [isUpperCase](./isUpperCase.md)
```typescript
isUpperCase(str: string): boolean
```
Retorna true se todos os caracteres alfabéticos da string estiverem em maiúsculo.

### [maskString](./maskString.md)
```typescript
maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```
Mascara parte da string substituindo caracteres por um caractere definido.

### [removeAccents](./removeAccents.md)
```typescript
removeAccents(str: string): string
```
Remove acentos e diacríticos de caracteres na string.

### [slugify](./slugify.md)
```typescript
slugify(str: string): string
```
Converte a string em um slug amigável para URLs, removendo caracteres especiais e espaços.

### [stripHTML](./stripHTML.md)
```typescript
stripHTML(html: string): string
```
Remove todas as tags HTML da string.

### [template](./template.md)
```typescript
template(str: string, options?: TemplateOptions): (data: Record<string, any>) => string
```
Cria uma função de template para interpolação de strings com opções personalizadas.

### [toCamelCase](./toCamelCase.md)
```typescript
toCamelCase(str: string): string
```
Converte a string para o formato camelCase.

### [toKebabCase](./toKebabCase.md)
```typescript
toKebabCase(str: string): string
```
Converte a string para o formato kebab-case.

### [toPascalCase](./toPascalCase.md)
```typescript
toPascalCase(str: string): string
```
Converte a string para o formato PascalCase.

### [toSnakeCase](./toSnakeCase.md)
```typescript
toSnakeCase(str: string): string
```
Converte a string para o formato snake_case.

### [truncate](./truncate.md)
```typescript
truncate(text: string, size: number): string
```
Trunca a string para um comprimento máximo e adiciona sufixo se necessário.

### [wordCount](./wordCount.md)
```typescript
wordCount(str: string): number
```
Conta o número de palavras em uma string.