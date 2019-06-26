const fs = require('fs-extra');
const concat = require('concat');

const isIEsupportNeeded = false; // true means a bigger build size (~2x)

(async function build() {
  const files = [
    `./dist/card-element/runtime-es2015.js`,
    `./dist/card-element/polyfills-es2015.js`,
    `./dist/card-element/scripts.js`,
    `./dist/card-element/main-es2015.js`,
  ].concat(!isIEsupportNeeded ? [] : [
    `./dist/card-element/runtime-es5.js`,
    `./dist/card-element/polyfills-es5.js`,
    `./dist/card-element/main-es5.js`,
  ]);

  await fs.ensureDir('elements');
  await concat(files, 'elements/card-element.js');
})();
