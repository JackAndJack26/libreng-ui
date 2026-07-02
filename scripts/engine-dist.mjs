// Builds an engine package (@libreng/styled|utils|styles|motion) by copying the
// vendored MIT dist and renaming the @primeuix specifiers to @libreng. The
// reconstructed sources in each package's src/ are the base for future changes.
import fs from 'fs-extra';
import path from 'path';

// pnpm runs package scripts with cwd = the package directory
const pkgDir = process.cwd();
const name = path.basename(pkgDir);
const workspace = path.resolve(pkgDir, '../..');
const vendorDist = path.join(workspace, 'vendor', `primeuix-${name}`, 'dist');
const outDist = path.join(pkgDir, 'dist');

fs.removeSync(outDist);
fs.copySync(vendorDist, outDist);

const RENAMES = [
    [/@primeuix\/styled/g, '@libreng/styled'],
    [/@primeuix\/utils/g, '@libreng/utils'],
    [/@primeuix\/styles/g, '@libreng/styles'],
    [/@primeuix\/motion/g, '@libreng/motion']
];

function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(mjs|cjs|js|d\.mts|d\.ts)$/.test(e.name)) {
            let s = fs.readFileSync(p, 'utf8');
            for (const [re, to] of RENAMES) s = s.replace(re, to);
            fs.writeFileSync(p, s);
        }
    }
}
walk(outDist);

fs.copySync(path.join(workspace, 'vendor', `primeuix-${name}`, 'LICENSE'), path.join(pkgDir, 'LICENSE'));
console.log(`@libreng/${name}: dist built from vendored MIT artifacts`);
