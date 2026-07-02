# Vendored dependencies

Local snapshots of the last **MIT-licensed** versions of the PrimeTek runtime
packages that `@libreng/ui` depends on. PrimeTek moved these lines to the
proprietary PrimeUI license starting with `@primeuix/*` v3 and `primeicons` v8,
so no newer MIT releases will exist. These copies guarantee the monorepo builds
forever, independently of the npm registry, and serve as the base if we ever
need to fork and patch them (as `@libreng/styled`, `@libreng/utils`, ...).

These directories are an **archival snapshot only** — day-to-day installs
resolve the same immutable versions from the npm registry (published versions
cannot be removed from npm). Do not wire them as workspace links: pnpm
workspace links break on Windows network/mapped drives.

If the registry ever becomes unavailable, activate the snapshot explicitly
with pnpm overrides in the root package.json, e.g.:

```json
"pnpm": { "overrides": { "@primeuix/utils": "file:./vendor/primeuix-utils" } }
```

## Provenance

Each directory is the unmodified content of the official npm tarball:

| Directory | Package | Version | License | Source tarball | sha1 |
|---|---|---|---|---|---|
| `primeuix-styled` | `@primeuix/styled` | 0.7.4 | MIT | registry.npmjs.org/@primeuix/styled/-/styled-0.7.4.tgz | `d2108a7fad297dea60d549b2c10ed744dc0cbc0e` |
| `primeuix-utils` | `@primeuix/utils` | 0.7.2 | MIT | registry.npmjs.org/@primeuix/utils/-/utils-0.7.2.tgz | `0ded7f74bddf191f0e16aea34b593a7fcffa94b5` |
| `primeuix-styles` | `@primeuix/styles` | 2.0.3 | MIT | registry.npmjs.org/@primeuix/styles/-/styles-2.0.3.tgz | `e42d14c138fe092683228d65a3f6de17de70d6a0` |
| `primeuix-motion` | `@primeuix/motion` | 0.0.10 | MIT | registry.npmjs.org/@primeuix/motion/-/motion-0.0.10.tgz | `9af4238226042d80518dd343c6481d03582e374a` |
| `primeuix-themes` | `@primeuix/themes` | 2.0.3 | MIT | registry.npmjs.org/@primeuix/themes/-/themes-2.0.3.tgz | `c3919d49e818b3bbac611ab8d89a52d4ffed6815` |
| `primeicons` | `primeicons` | 7.0.0 | MIT | registry.npmjs.org/primeicons/-/primeicons-7.0.0.tgz | `6b25c3fdcb29bb745a3035bdc1ed5902f4a419cf` |

Copyright (c) PrimeTek Informatics — each package retains its original MIT
`LICENSE` file. Do not edit these directories in place; fork them into
`packages/` under a new name if changes are needed.

## Reconstructed TypeScript sources (`source/`)

`source/<package>/src/**` contains the original TypeScript sources of each
package, reconstructed from the `sourcesContent` embedded in the published
sourcemaps of the MIT tarballs above (615 files, byte-identical to what
PrimeTek compiled). This is the starting point for forking any of these
packages into `packages/` under the `@libreng` scope if a bug fix or feature
is ever needed.

Caveats: type-only declaration sources are not embedded in JS sourcemaps —
the full public type surface is preserved by the published `.d.ts`/`.d.mts`
files in each `dist/`. Build configs (tsup/vite) are not included either;
recreate them like the ones used by `packages/themes`/`packages/mcp`.
`primeicons` needs no reconstruction: its npm package already ships the
sources (SVGs, fonts, CSS).
