# clone
A função `clone` cria uma cópia superficial de um objeto ou array. Ela retorna uma nova instância, mas com os mesmos valores do original.

## Sintaxe

```typescript
clone<T extends Record<string, any>>(value: T): T;
clone<T extends any[]>(value: T): T;
clone<T>(value: T): T;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `value`   | `T extends Record<string, any>` | Um objeto a ser clonado.                                    |
| `value`   | `T extends any[]`              | Um array a ser clonado.                                     |
| `value`   | `T`                            | Pode ser qualquer tipo a ser clonado (objeto ou array).     |

### Retorno

| Tipo       | Descrição                                                   |
|------------|-------------------------------------------------------------|
| `T`        | A cópia superficial do valor fornecido. A cópia será do tipo do valor original. |

## Exemplos

### Exemplo 1: Clonando um Objeto
```typescript
const usuario = { id: 1, nome: "Alice" };
const cloneUsuario = clone(usuario);
console.log(cloneUsuario); // { id: 1, nome: "Alice" }
```

### Exemplo 2: Clonando um Array
```typescript
const numeros = [1, 2, 3];
const cloneNumeros = clone(numeros);
console.log(cloneNumeros); // [1, 2, 3]
```

### Exemplo 3: Alterando o Clone
```typescript
const pessoa = { nome: "Bob", idade: 30 };
const clonePessoa = clone(pessoa);
clonePessoa.idade = 31;

console.log(pessoa.idade); // 30
console.log(clonePessoa.idade); // 31
```

## Notas
- Esta função realiza uma cópia superficial (shallow copy), o que significa que os objetos ou arrays internos ainda são referenciados.
- Para realizar uma cópia profunda (deep copy), seria necessário usar uma abordagem diferente, como recursão ou métodos especializados como `JSON.parse(JSON.stringify(value))`.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function clone<T extends Record<string, any>>(value: T): T;
function clone<T extends any[]>(value: T): T;
function clone<T>(value: T): T {
	const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
```

```javascript
function clone(value) {
	const clonedValue = Array.isArray(value) ? [] : {};

	for (const key in value) {
		clonedValue[key] = value[key];
	}

	return clonedValue;
}
```
:::

## Referências
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)