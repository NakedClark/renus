import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('converts spaces to hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('lowercases the input', () => {
  assert.equal(slugify('RENUS'), 'renus');
});
