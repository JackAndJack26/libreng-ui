# LibreNG UI

LibreNG UI is a rich set of open source (MIT) UI components for Angular 22+ — a community-maintained fork of the MIT-licensed PrimeNG v21 by PrimeTek, with unchanged component APIs and selectors, migrated to Angular 22 and TypeScript 6.

Migrating from PrimeNG v21? Replace the package and swap `primeng/*` imports for `@libreng/ui/*` — everything else (`p-*` selectors, `providePrimeNG`, theming) stays the same.

## Installation

```bash
npm install @libreng/ui @primeuix/themes
# or: pnpm add / yarn add
```

## Setup

Add the provider and a theme preset to your `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from '@libreng/ui/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};
```

Available presets: `@primeuix/themes/aura`, `/lara`, `/nora`, `/material`.

## Usage

Import only the components you use — each has its own entry point:

```ts
import { Component } from '@angular/core';
import { ButtonModule } from '@libreng/ui/button';

@Component({
    standalone: true,
    imports: [ButtonModule],
    template: `<p-button label="Submit" />`
})
export class MyComponent {}
```

Optional icons (`pi pi-*`):

```bash
npm install primeicons
```

```css
/* styles.css */
@import 'primeicons/primeicons.css';
```

## Requirements

- Angular `^22.0.0`
- Node.js `>= 22.22.3`

## Documentation & Source

https://github.com/capivaramu/orbia-ui — the showcase app in `apps/showcase` documents all 80+ components with live demos.

## License

MIT — based on PrimeNG, Copyright (c) 2016-2026 PrimeTek. This project is not affiliated with or endorsed by PrimeTek.
