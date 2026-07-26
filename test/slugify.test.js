import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('converts spaces to hyphens', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('lowercases the input', () => {
  assert.equal(slugify('RENUS'), 'renus');
});

test('strips accents', () => {
  assert.equal(slugify('Héllo Wörld'), 'hello-world');
});

test('collapses runs of symbols into a single hyphen', () => {
  assert.equal(slugify('rock & roll!!!'), 'rock-roll');
});

test('trims leading and trailing separators', () => {
  assert.equal(slugify('  --Hello--  '), 'hello');
});

test('returns an empty string when nothing survives', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('!!!'), '');
});

test('keeps digits', () => {
  assert.equal(slugify('Top 10 Tips'), 'top-10-tips');
});

test('coerces non-string input', () => {
  assert.equal(slugify(42), '42');
});
