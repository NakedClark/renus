import test from 'node:test';
import assert from 'node:assert/strict';
import { capitalize } from '../src/index.js';

test('uppercases the first letter only', () => {
  assert.equal(capitalize('hello world'), 'Hello world');
});

test('leaves an already-capitalized string unchanged', () => {
  assert.equal(capitalize('Hello'), 'Hello');
});

test('returns the empty string unchanged', () => {
  assert.equal(capitalize(''), '');
});

test('leaves the rest of the string unchanged, including its case', () => {
  assert.equal(capitalize('hELLO'), 'HELLO');
});

test('leaves caseless characters unchanged', () => {
  assert.equal(capitalize('你好'), '你好');
});

test('uppercases a cased astral first character as a full code point', () => {
  assert.equal(capitalize('\u{10437}abc'), '\u{1040F}abc');
});

test('does not corrupt a leading astral character', () => {
  assert.equal(capitalize('😀abc'), '😀abc');
});

test('coerces non-string input', () => {
  assert.equal(capitalize(42), '42');
});
