## Abstract

Webpack/babel does not transform `class` and template literals,
if your javascript file extension is `.mjs`.

Currently I suspect the following npm packages,
plugin-transform-template-literals and plugin-transform-classes,
to not handle the `.mjs` file extension.

## Reproduce

In your terminal:

1. `npm i`
2. `./test.sh`

The last output will be **`not cool`**.

```
`<style>
not cool
```
