# isLeapYear  
Verifica se um ano é bissexto. Um ano é bissexto se for divisível por 4, exceto se for divisível por 100, a menos que também seja divisível por 400.

## Sintaxe
```typescript
isLeapYear(year: number): boolean
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                          |
|-----------|----------|----------------------------------------------------|
| `year`    | `number` | O ano a ser verificado para determinar se é bissexto. |

### Retorno

| Tipo      | Descrição                                            |
|-----------|------------------------------------------------------|
| `boolean` | Retorna `true` se o ano for bissexto, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Ano bissexto
```typescript
isLeapYear(2024); // true
```

### Exemplo 2: Ano não bissexto
```typescript
isLeapYear(2023); // false
```

### Exemplo 3: Ano bissexto devido à regra do 400
```typescript
isLeapYear(2000); // true
```

### Exemplo 4: Ano não bissexto devido à regra do 100
```typescript
isLeapYear(1900); // false
```

## Notas
- A função segue as regras do calendário gregoriano para determinar se um ano é bissexto:
  - Um ano é bissexto se for divisível por 4.
  - Se o ano for divisível por 100, ele não é bissexto, a menos que seja também divisível por 400.
  
## Código Fonte
::: code-group

```typescript
function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```

```javascript
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```
:::

## Referências
- [MDN: `Date.prototype.getFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)