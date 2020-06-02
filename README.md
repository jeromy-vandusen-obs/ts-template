# TypeScript Template

A template for Node projects using TypeScript.

## Customization

Edit the `package.json` and `package-lock.json` files to change the project name and description.

## Additional Configuration

If the project will include client-side components, a few changes may be necessary.

### Styles

Install `ignore-styles`.

```bash
$ npm install --save-dev ignore-styles
```

Update the test script in `package.json` to use `ignore-styles`.

```json
"scripts": {
    "test": "mocha -r ts-node/register -r ignore-styles src/test/**/*.spec.ts"
}
```

### DOM

Install `jsdom` and `jsdom-global`.

```bash
$ npm install --save-dev jsdom jsdom-global
```

Update the test script in `package.json` to use `jsdom-global`.

```json
"scripts": {
    "test": "mocha -r ts-node/register -r ignore-styles -r jsdom-global/register src/test/**/*.spec.ts"
}
```

### Webpack Code Splitting

Install `cross-env`.

```bash
$ npm install --save-dev cross-env
```

Update the test script in `package.json` to use `cross-env`.

```json
"scripts": {
    "test": "cross-env TS_NODE_COMPILER_OPTIONS='{ \"module\": \"commonjs\" }' mocha -r ts-node/register -r ignore-styles -r jsdom-global/register src/test/**/*.spec.ts"
}
```
