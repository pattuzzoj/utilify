# Object

The `object` module provides a comprehensive set of utility functions for manipulating objects in JavaScript/TypeScript. These functions facilitate common operations such as deep cloning, accessing nested properties, merging objects, structure transformations, and state checks.

Key features:
- Safe manipulation of nested objects
- Structure transformations (flatten/unflatten)
- Immutability operations (freeze/seal)
- Verification and comparison utilities
- Property selection and omission functions

## Overview

### [clone](./clone.md)
```typescript
clone<T>(value: T): T
```
Performs a deep copy of any value, including objects, arrays, and primitive types.

### [flattenObj](./flattenObj.md)
```typescript
flattenObj(obj): Record<string, any>
```
Transforms a nested object into a flat object, with full paths as keys.

### [freeze](./freeze.md)
```typescript
freeze(obj: Record<PropertyKey, any>): Record<PropertyKey, any>
```
Recursively freezes an object and all its internal objects, making them immutable.

### [get](./get.md)
```typescript
get<T>(obj: T, path: string | string[], defaultValue?: any): any
```
Accesses the value of a nested property in an object, with support for a default value.

### [has](./has.md)
```typescript
has<T>(obj: T, path: string | string[]): boolean
```
Checks if an object has a (nested) property specified by a path.

### [isEmpty](./isEmpty.md)
```typescript
isEmpty(value): boolean
```
Checks if a value (object, array, string, Map, or Set) is empty.

### [isEqual](./isEqual.md)
```typescript
isEqual(value1, value2): boolean
```
Compares two values to determine if they are equivalent in structure and content.

### [isFrozen](./isFrozen.md)
```typescript
isFrozen(obj): boolean
```
Checks if an object is frozen (immutable).

### [isNotNullObject](./isNotNullObject.md)
```typescript
isNotNullObject(value): boolean
```
Checks if a value is a non-null object.

### [isPlainObject](./isPlainObject.md)
```typescript
isPlainObject(value): boolean
```
Checks if a value is a plain object, created by literal or by Object.

### [isSealed](./isSealed.md)
```typescript
isSealed(obj): boolean
```
Checks if an object is sealed (cannot add/remove properties).

### [merge](./merge.md)
```typescript
merge(target, ...sources): object
```
Combines two or more objects into a new object, performing a deep merge.

### [omit](./omit.md)
```typescript
omit(obj, keys): object
```
Creates a copy of an object, excluding the specified properties.

### [pick](./pick.md)
```typescript
pick(obj, keys): object
```
Creates a new object containing only the specified properties from the original.

### [seal](./seal.md)
```typescript
seal(obj): object
```
Recursively seals an object, preventing addition or removal of properties.

### [set](./set.md)
```typescript
set(obj, path, value): object
```
Sets the value of a property in an object, supporting nested paths.

### [unflattenObj](./unflattenObj.md)
```typescript
unflattenObj(obj): object
```
Reconstructs nested objects from a flat object with path keys.