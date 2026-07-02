import fs from 'fs-extra';
import path from 'path';
import { clearPackageJson, copyDependencies, materializeCatalogVersions, renameDTSFile, resolvePath } from '../../../scripts/build-helper.mjs';

const { __dirname, __workspace, INPUT_DIR, OUTPUT_DIR } = resolvePath(import.meta.url);

copyDependencies(INPUT_DIR + '/presets/', OUTPUT_DIR);
renameDTSFile(OUTPUT_DIR, 'index');

//fs.copySync(path.resolve(__dirname, '../src/index.d.ts'), `${OUTPUT_DIR}/index.d.ts`);
fs.copySync(path.resolve(__dirname, '../types'), `${OUTPUT_DIR}/types`);
fs.copySync(path.resolve(__dirname, '../package.json'), `${OUTPUT_DIR}/package.json`);
fs.copySync(path.resolve(__dirname, '../README.md'), `${OUTPUT_DIR}/README.md`);
fs.copySync(path.resolve(__workspace, './LICENSE.md'), `${OUTPUT_DIR}/LICENSE.md`);

clearPackageJson(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));

materializeCatalogVersions(path.resolve(__dirname, `../${OUTPUT_DIR}/package.json`));

// Generate declaration files for the preset entry points (the source is plain
// data; presets are typed with the local loose Preset type for consumers).
import { globSync } from 'glob';

for (const mjs of globSync(`${OUTPUT_DIR}/**/index.mjs`)) {
    const dts = mjs.replace(/index\.mjs$/, 'index.d.ts');
    if (fs.existsSync(dts)) continue;
    const rel = path.relative(path.dirname(mjs), OUTPUT_DIR) || '.';
    const depth = rel === '.' ? 0 : rel.split(path.sep).length;
    if (depth === 1) {
        fs.writeFileSync(dts, `import type { Preset } from '../types';\ndeclare const preset: Preset;\nexport default preset;\n`);
    } else {
        fs.writeFileSync(dts, `declare const tokens: any;\nexport default tokens;\n`);
    }
}
