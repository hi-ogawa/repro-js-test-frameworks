const { expect, test } = require("@jest/globals")

test('large', () => {
  // change `fill(1)` to `fill(2)`
  const ar = new Array(100).fill(2);
  expect(ar).toMatchSnapshot();
});

test('compact', () => {
  const ar = new Array(100).fill(0);
  // change `1` to `2`
  expect([...ar, 2, ...ar]).toMatchSnapshot();
});
