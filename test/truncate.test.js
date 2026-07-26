import test from 'node:test';
import assert from 'node:assert/strict';
import { truncate } from '../src/index.js';

test('returns short strings unchanged', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('returns strings of exactly maxLength unchanged', () => {
  assert.equal(truncate('hello', 5), 'hello');
});

test('truncates with the default ellipsis', () => {
  assert.equal(truncate('hello world', 8), 'hello w…');
});

test('result never exceeds maxLength', () => {
  assert.equal(truncate('hello world', 8).length, 8);
});

test('supports a custom ellipsis', () => {
  assert.equal(truncate('hello world', 8, '...'), 'hello...');
});

test('keeps the ellipsis when it fits maxLength exactly', () => {
  assert.equal(truncate('hello', 1), '…');
  assert.equal(truncate('hello', 3, '...'), '...');
});

test('cuts without ellipsis when maxLength is too small for it', () => {
  assert.equal(truncate('hello', 2, '...'), 'he');
});

test('maxLength of zero returns the empty string', () => {
  assert.equal(truncate('hello', 0), '');
});

test('never splits a surrogate pair', () => {
  assert.equal(truncate('ab😀cd', 4), 'ab…');
  assert.equal(truncate('a😀', 2, '...'), 'a');
});

test('measures length in UTF-16 code units', () => {
  assert.equal(truncate('😀😀', 3), '😀…');
  assert.equal(truncate('😀😀', 3).length, 3);
});

test('rejects a negative or non-integer maxLength', () => {
  assert.throws(() => truncate('hello', -1), RangeError);
  assert.throws(() => truncate('hello', 2.5), RangeError);
});

test('coerces non-string input', () => {
  assert.equal(truncate(123456, 4), '123…');
});
