# LibreNG UI

**LibreNG UI** is an open source (MIT) UI component library for **Angular 22+** — 80+ rich, accessible components, a token-based theming engine with four built-in presets, and a full documentation showcase.

**Live demo & docs: https://libreng-ui.vercel.app**

It is a community-maintained fork of [PrimeNG](https://github.com/primefaces/primeng) v21 — the last version released by PrimeTek under the MIT license — migrated to Angular 22 and TypeScript 6. Component APIs and selectors are unchanged, so existing PrimeNG v21 applications migrate with a find-and-replace. PrimeNG and the Prime brand belong to PrimeTek Informatics; this project is not affiliated with or endorsed by PrimeTek.

## Packages

| Package | Description |
|---|---|
| [`@libreng/ui`](https://www.npmjs.com/package/@libreng/ui) | The component library (80+ Angular components) |
| [`@libreng/themes`](https://www.npmjs.com/package/@libreng/themes) | Theme presets — Aura, Lara, Nora, Material — fully self-contained |
| [`@libreng/mcp`](https://www.npmjs.com/package/@libreng/mcp) | Model Context Protocol server for AI-assisted development |
| `@libreng/styled` / `@libreng/utils` / `@libreng/styles` / `@libreng/motion` | The theming/styling engine (forked from the MIT `@primeuix` v2 line, fully in-repo) |

## Requirements

- **Angular** `^22.0.0`
- **Node.js** `>= 22.22.3`
- **TypeScript** `>= 6.0`

## Getting started

### 1. Install

```bash
npm install @libreng/ui @libreng/themes
# or
pnpm add @libreng/ui @libreng/themes
# or
yarn add @libreng/ui @libreng/themes
```

### 2. Configure the provider and a theme

Add `providePrimeNG` with a theme preset to your `app.config.ts`:

```ts
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from '@libreng/ui/config';
import Aura from '@libreng/themes/aura';

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

Available presets: `@libreng/themes/aura`, `@libreng/themes/lara`, `@libreng/themes/nora`, `@libreng/themes/material`. Build your own with `definePreset`:

```ts
import { definePreset } from '@libreng/themes';
import Aura from '@libreng/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            500: '{indigo.500}'
        }
    }
});
```

### 3. Use a component

Every component has its own entry point — import only what you use:

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

### 4. Icons (optional)

The `pi pi-*` icon classes come from [primeicons](https://www.npmjs.com/package/primeicons) (MIT):

```bash
npm install primeicons
```

```css
/* styles.css */
@import 'primeicons/primeicons.css';
```

## Migrating from PrimeNG v21

LibreNG UI keeps the entire public API of PrimeNG v21 — `p-*` selectors, `p-*` CSS classes, `providePrimeNG`, the `PrimeNG` config service, pass-through, templates and theming all work as before. Migration is three steps:

**1. Swap the packages**

```bash
npm uninstall primeng @primeng/themes
npm install @libreng/ui @libreng/themes
```

**2. Replace the import paths** (project-wide find and replace)

| Find | Replace with |
|---|---|
| `from 'primeng/` | `from '@libreng/ui/` |
| `from '@primeng/themes` | `from '@libreng/themes` |
| `from '@primeuix/themes` | `from '@libreng/themes` |

**3. Update your toolchain** — LibreNG UI targets Angular 22, so run `ng update @angular/core@22 @angular/cli@22` first if your app is still on Angular 21. Coming from PrimeNG v19/v20? Follow the [v21 migration guide](https://github.com/JackAndJack26/libreng-ui) in the showcase docs first, then switch packages.

No template, selector, CSS class or configuration changes are required.

## Documentation

The showcase application in [`apps/showcase`](./apps/showcase) documents every component with live demos, API tables, theming tokens and pass-through options. Run it locally:

```bash
pnpm install
pnpm dev          # http://localhost:4200
```

## Contributing & development

This is a pnpm workspace (npm/yarn will not work for development):

```bash
pnpm install              # install all workspace dependencies
pnpm dev                  # run the showcase
pnpm run build:lib        # build @libreng/ui into packages/primeng/dist
pnpm run build:themes     # build @libreng/themes
pnpm run test:unit        # run the unit test suite (7000+ tests)
pnpm run format           # format with prettier
```

### How the engine packages are generated

`@libreng/styled`, `@libreng/utils`, `@libreng/styles` and `@libreng/motion` are not compiled from source on every build. Their `dist/` folders are **deterministic copies of the last MIT `@primeuix` artifacts** stored in [`vendor/`](./vendor) (tarball URLs and sha1 checksums recorded in `vendor/README.md`), with the package specifiers renamed to the `@libreng` scope by [`scripts/engine-dist.mjs`](./scripts/engine-dist.mjs). The dists are committed, so a fresh clone builds with no extra step; regenerate them any time with:

```bash
pnpm run build:engine
```

Each engine package also carries the original TypeScript sources (recovered from the published sourcemaps) in its `src/` folder — that is the starting point if a bug fix or feature ever requires compiling the engine from source.

Bug reports and pull requests are welcome on the [issue tracker](https://github.com/JackAndJack26/libreng-ui/issues) and [discussions](https://github.com/JackAndJack26/libreng-ui/discussions).

## License

[MIT](./LICENSE.md) — based on PrimeNG, Copyright (c) 2016-2026 PrimeTek. The `vendor/` directory contains unmodified snapshots (with sources) of the last MIT releases of the `@primeuix` runtime packages this library builds on; see [`vendor/README.md`](./vendor/README.md) for provenance.
