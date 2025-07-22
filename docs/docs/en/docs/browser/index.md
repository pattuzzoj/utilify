# Browser

The Browser module provides a collection of utilities for interacting with web browser APIs. It includes functions for managing fullscreen mode, detecting connection status, handling DOM events, controlling page scrolling, and accessing native features like sharing. It also offers methods to check user preferences and device capabilities.

## Overview

[exitFullscreen](./exitFullscreen.md)
```typescript
exitFullscreen(): void
```
Exits fullscreen mode, if supported by the browser.

[getLanguage](./getLanguage.md)
```typescript
getLanguage(): string
```
Returns the user's preferred browser language.

[getTheme](./getTheme.md)
```typescript
getTheme(): "light" | "dark"
```
Gets the user's preferred theme (light or dark).

[isCookieEnabled](./isCookieEnabled.md)
```typescript
isCookieEnabled(): boolean
```
Checks if cookies are enabled in the browser.

[isFullscreenEnabled](./isFullscreenEnabled.md)
```typescript
isFullscreenEnabled(): boolean
```
Checks if the fullscreen API is available.

[isOnline](./isOnline.md)
```typescript
isOnline(): boolean
```
Checks if the browser is connected to the internet.

[isShareable](./isShareable.md)
```typescript
isShareable(): boolean
```
Checks if the native sharing API is available.

[isTabActive](./isTabActive.md)
```typescript
isTabActive(): boolean
```
Checks if the browser tab is active (visible).

[isTouchDevice](./isTouchDevice.md)
```typescript
isTouchDevice(): boolean
```
Checks if the device supports touch events.

[on](./on.md)
```typescript
on<K extends keyof HTMLElementEventMap>(target: HTMLElement | Document | Window, type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
```
Adds an event listener to a DOM element.

[onOffline](./onOffline.md)
```typescript
onOffline(listener: () => void): void
```
Adds a listener for the offline event.

[onOnline](./onOnline.md)
```typescript
onOnline(listener: () => void): void
```
Adds a listener for the online event.

[onVisibilityChange](./onVisibilityChange.md)
```typescript
onVisibilityChange(listener: () => void): void
```
Adds a listener for tab visibility changes.

[requestFullscreen](./requestFullscreen.md)
```typescript
requestFullscreen(element?: HTMLElement): void
```
Requests an element to enter fullscreen mode.

[scrollToElement](./scrollToElement.md)
```typescript
scrollToElement(target: string | HTMLElement, options?: ScrollIntoViewOptions): void
```
Smoothly scrolls to a target element on the page.

[scrollToTop](./scrollToTop.md)
```typescript
scrollToTop(options?: ScrollToOptions): void
```
Smoothly scrolls to the top of the page.

[share](./share.md)
```typescript
share(data: ShareData): Promise<void>
```
Uses the native API to share data such as title, text, URL, or files.