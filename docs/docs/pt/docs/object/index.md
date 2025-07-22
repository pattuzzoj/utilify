# Object

O módulo `object` fornece um conjunto abrangente de funções utilitárias para manipulação de objetos em JavaScript/TypeScript. Estas funções facilitam operações comuns como clonagem profunda, acesso a propriedades aninhadas, mesclagem de objetos, transformações de estrutura e verificações de estado.

Principais recursos:
- Manipulação segura de objetos aninhados
- Transformações de estrutura (flatten/unflatten)
- Operações de imutabilidade (freeze/seal)
- Utilitários de verificação e comparação
- Funções de seleção e omissão de propriedades

## Visão Geral

[clone](./clone.md)
```typescript
clone<T>(value: T): T
```
Realiza uma cópia profunda de qualquer valor, incluindo objetos, arrays e tipos primitivos.

[flattenObj](./flattenObj.md)
```typescript
flattenObj(obj): Record<string, any>
```
Transforma um objeto aninhado em um objeto plano, com caminhos completos como chaves.

[freeze](./freeze.md)
```typescript
freeze(obj: Record<PropertyKey, any>): Record<PropertyKey, any>
```
Congela recursivamente um objeto e todos os seus objetos internos, tornando-os imutáveis.

[get](./get.md)
```typescript
get<T>(obj: T, path: string | string[], defaultValue?: any): any
```
Acessa o valor de uma propriedade aninhada em um objeto, com suporte a valor padrão.

[has](./has.md)
```typescript
has<T>(obj: T, path: string | string[]): boolean
```
Verifica se um objeto possui uma propriedade (aninhada) especificada por um caminho.

[isEmpty](./isEmpty.md)
```typescript
isEmpty(value): boolean
```
Verifica se um valor (objeto, array, string, Map ou Set) está vazio.

[isEqual](./isEqual.md)
```typescript
isEqual(value1, value2): boolean
```
Compara dois valores para determinar se são equivalentes em estrutura e conteúdo.

[isFrozen](./isFrozen.md)
```typescript
isFrozen(obj): boolean
```
Verifica se um objeto está congelado (imutável).

[isNotNullObject](./isNotNullObject.md)
```typescript
isNotNullObject(value): boolean
```
Verifica se um valor é um objeto não nulo.

[isPlainObject](./isPlainObject.md)
```typescript
isPlainObject(value): boolean
```
Verifica se um valor é um objeto simples, criado por literal ou por Object.

[isSealed](./isSealed.md)
```typescript
isSealed(obj): boolean
```
Verifica se um objeto está selado (não pode adicionar/remover propriedades).

[merge](./merge.md)
```typescript
merge(target, ...sources): object
```
Combina dois ou mais objetos em um novo objeto, realizando mesclagem profunda.

[omit](./omit.md)
```typescript
omit(obj, keys): object
```
Cria uma cópia de um objeto, excluindo as propriedades especificadas.

[pick](./pick.md)
```typescript
pick(obj, keys): object
```
Cria um novo objeto contendo apenas as propriedades especificadas do original.

[seal](./seal.md)
```typescript
seal(obj): object
```
Sela recursivamente um objeto, impedindo adição ou remoção de propriedades.

[set](./set.md)
```typescript
set(obj, path, value): object
```
Define o valor de uma propriedade em um objeto, suportando caminhos aninhados.

[unflattenObj](./unflattenObj.md)
```typescript
unflattenObj(obj): object
```
Reconstrói objetos aninhados a partir de um objeto com chaves planas.