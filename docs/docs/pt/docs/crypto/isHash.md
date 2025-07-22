# isHash

Verifica se uma string é um hash válido para o algoritmo especificado.

## Sintaxe
```typescript
isHash(hash: string, algorithm: HashAlgorithm = 'SHA-256'): boolean
```

## Parâmetros

| Nome         | Tipo            | Descrição                                                                 |
|--------------|-----------------|---------------------------------------------------------------------------|
| `hash`       | `string`        | A string a ser verificada                                                 |
| `algorithm`  | `HashAlgorithm` | (Opcional) Algoritmo de hash esperado. Pode ser `'SHA-1'`, `'SHA-256'`, `'SHA-384'` ou `'SHA-512'`. Padrão: `'SHA-256'` |

## Retorno

| Tipo       | Descrição                                                                 |
|------------|---------------------------------------------------------------------------|
| `boolean`  | Retorna `true` se a string corresponder ao formato e tamanho do hash para o algoritmo especificado, caso contrário, retorna `false`. |

## Exemplo
```typescript
isHash("a3f5...", "SHA-256"); // true ou false, dependendo do comprimento
isHash("da39a3ee5e6b4b0d3255bfef95601890afd80709", "SHA-1"); // true
isHash("notahash", "SHA-256"); // false
isHash(12345 as any); // lança TypeError
```

## Notas
- Lança um `TypeError` se o valor não for uma string.
- Lança um erro se o algoritmo não for suportado.
- O hash deve conter apenas caracteres hexadecimais.

## Referências
- [MDN: Hash](https://developer.mozilla.org/pt-BR/docs/Web/Security/Information_security_basics/Cryptographic_hash_functions)