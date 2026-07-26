# renus

Small, dependency-free string utilities for Node.js.

## Usage

```js
import { slugify, capitalize, truncate } from './src/index.js';

slugify('Hello World');   // "hello-world"
slugify('Héllo Wörld!');  // "hello-world"
slugify('Top 10 Tips');   // "top-10-tips"

capitalize('hello world');          // "Hello world"

truncate('hello world', 8);         // "hello w…"
truncate('hello world', 8, '...');  // "hello..."
```

## Requirements

Node.js 18 or newer (tests use the built-in `node:test` runner).

## Running the tests

```
npm test
```

## License

[MIT](LICENSE)
