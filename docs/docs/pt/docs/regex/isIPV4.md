# isIPV4

A função `isIPV4` verifica se uma string é um endereço IPv4 válido.

## Sintaxe

```typescript
function isIPV4(value: string): boolean
```

### Parâmetros

| Nome | Tipo     | Descrição                                |
|------|----------|------------------------------------------|
| value  | `string` | A string a ser validada como um endereço IPv4. |

### Retorno

| Tipo     | Descrição                                   |
|----------|---------------------------------------------|
| `boolean` | Retorna `true` se a string representar um endereço IPv4 válido, caso contrário, retorna `false`. |

## Exemplos

```typescript
console.log(isIPV4("192.168.1.1"));             // Saída: true
console.log(isIPV4("255.255.255.255"));         // Saída: true
console.log(isIPV4("192.168.1.999"));           // Saída: false
console.log(isIPV4("::1"));                     // Saída: false
console.log(isIPV4("192.168.1.1:8080"));       // Saída: true
```

## Notas

- A função utiliza uma expressão regular para verificar o formato válido de um endereço IPv4.
- Ela também valida a possibilidade de um número de porta após o endereço IPv4 (ex: `192.168.1.1:8080`).

## Código Fonte

::: code-group
```typescript
function isIPV4(value: string): boolean {
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
}
```

```javascript
function isIPV4(value) {
  return /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/.test(value);
}
```
::: 

## Referências

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guia/Express%C3%B5es_Regulares)
- [string.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Refer%C3%AAncia/Objetos/RegExp/test)