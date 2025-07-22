# on

The `on` function adds an event listener to a target DOM element.

## Syntax

```typescript
on<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Document | Window,
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
```

### Parameters

| Name     | Type                                         | Description                              |
| -------- | -------------------------------------------- | ---------------------------------------- |
| `target`   | `HTMLElement` \| `Document` \| `Window`                | Target element for the event             |
| `type`     | `string`                                       | Event type (e.g., "click")              |
| `listener` | `(this: HTMLElement, ev: HTMLElementEventMap[K]) => any`                                     | Function called when the event occurs    |
| `options`  | `boolean` \| `AddEventListenerOptions` (optional)  | Additional options for the listener      |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
on(window, "resize", () => {
  console.log("Window resized");
});

on(document, "visibilitychange", () => {
  // ...
});
```

## Notes

* Useful for abstracting typed event addition.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener