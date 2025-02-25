# isUUID

A função `isUUID` verifica se uma string fornecida é um UUID válido (agnóstico à versão).

## Sintaxe

```typescript
function isUUID(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                  |
|------|----------|--------------------------------------------|
| value  | `string` | A string a ser validada como um UUID.      |

### Retorno

| Tipo      | Descrição                                           |
|-----------|-----------------------------------------------------|
| `boolean` | Retorna `true` se a string for um UUID válido, caso contrário, `false`. |

## Exemplos

```typescript
console.log(isUUID("123e4567-e89b-12d3-a456-426614174000")); // Saída: true
console.log(isUUID("nao-e-um-uuid")); // Saída: false
console.log(isUUID("123e4567-e89b-12d3-a456")); // Saída: false
```

## Notas

- Um UUID é uma string de 36 caracteres no formato `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`.
- A função é agnóstica à versão do UUID e não valida versões específicas.
- A validação é realizada usando uma expressão regular que corresponde ao padrão de UUID.

## Código Fonte

::: code-group
```typescript
function isUUID(value: string): boolean {
  return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(value);
}
```

```javascript
function isUUID(value) {
  return /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/.test(value);
}
```
::: 

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)