# LibreNG UI

**LibreNG UI** is an open source (MIT) UI component library for Angular — 80+ rich components, themes, and a documentation showcase.

It is a community-maintained fork of [PrimeNG](https://github.com/primefaces/primeng) v21, the last version released by PrimeTek under the MIT license, migrated to **Angular 22** and **TypeScript 6**. PrimeNG and the Prime brand belong to PrimeTek Informatics; this project is not affiliated with or endorsed by PrimeTek.

## Packages

| Package | Description |
|---|---|
| `@libreng/ui` | The component library (80+ Angular components) |
| `@libreng/themes` | Theme presets (Aura, Lara, Nora, Material) |
| `@libreng/mcp` | Model Context Protocol server for the library |

## Requirements

- Node.js `>= 22.22.3`
- pnpm `9.x` (this is a pnpm workspace — npm/yarn will not work)

## Development

```bash
pnpm install          # install all workspace dependencies
pnpm dev              # run the showcase at http://localhost:4200
pnpm run build:lib    # build @libreng/ui into packages/primeng/dist
pnpm run test:unit    # run the unit test suite
```

## Usage

```ts
import { ButtonModule } from '@libreng/ui/button';
```

Component selectors and APIs are unchanged from PrimeNG v21 (`p-button`, `providePrimeNG`, ...), so migrating an existing PrimeNG v21 app is a matter of swapping the package name and import paths.

## License

MIT — see [LICENSE.md](./LICENSE.md). Based on PrimeNG, Copyright (c) 2016-2026 PrimeTek.
