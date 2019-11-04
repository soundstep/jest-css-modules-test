# Issue demo

```
npm install
npm test
```

The issue:
```
npm test                                                                                                                                              10.3s  Mon  4 Nov 10:12:49 2019

> jest-css-modules-test@1.0.0 test /Users/romuquan/Documents/devserver/workspace/jest-css-modules-test
> jest

 FAIL  tests/unit/specs/one-test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/romuquan/Documents/devserver/workspace/jest-css-modules-test/node_modules/@my-org/my-module/styles.css:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){.my-style {
                                                                                             ^

    SyntaxError: Unexpected token .

      1 | import styles from './one-style.css';
    > 2 | import stylesFromModules from '@my-org/my-module/styles.css';
        | ^
      3 | console.log('styles from src', styles);
      4 | console.log('styles from node modules', stylesFromModules);
      5 |

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at Object.<anonymous> (src/one-file.js:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.497s
Ran all test suites.
npm ERR! Test failed.  See above for more details.
```
