# renus

Small, dependency-free string utilities for Node.js.

## Usage

```js
import { slugify } from './src/index.js';

slugify('Hello World');   // "hello-world"
slugify('Héllo Wörld!');  // "hello-world"
slugify('Top 10 Tips');   // "top-10-tips"
```

## Requirements

Node.js 18 or newer (tests use the built-in `node:test` runner).

## Running the tests

```
npm test
```
