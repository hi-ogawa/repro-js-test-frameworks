import { expect, test } from "vitest";

// https://vitest.dev/guide/extending-matchers.html
// https://jestjs.io/docs/expect#expectextendmatchers

interface CustomMatchers<R = unknown> {
  myStringContaining(other: string): R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

expect.extend({
  myStringContaining(received: unknown, other: string) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(received)} ${
          this.isNot ? "not " : ""
        }to contain ${this.utils.printExpected(other)}`,
      pass: typeof received === "string" && received.includes(other),
    };
  },
});

test("custom ok", () => {
  expect("hello").toEqual(expect.myStringContaining("ll"));
  expect("hello").myStringContaining("ll");
  expect("hello").toEqual(expect.not.myStringContaining("xx"));
  expect("hello").not.myStringContaining("xx");
});

test("custom error 1", () => {
  expect("hello").toEqual(expect.myStringContaining("xx"));
});

test("custom error 1.5", () => {
  expect({ foo: "hello" }).toEqual({ foo: expect.myStringContaining("xx") });
});

test("custom error 2", () => {
  expect("hello").toEqual(expect.not.myStringContaining("ll"));
});

test("custom error 3", () => {
  expect("hello").myStringContaining("xx");
});

test("custom error 4", () => {
  expect("hello").not.myStringContaining("ll");
});

test("builtin ok", () => {
  expect("hello").toEqual(expect.stringContaining("ll"));
  expect("hello").toEqual(expect.not.stringContaining("xx"));
})

test("builtin error 1", () => {
  expect("hello").toEqual(expect.stringContaining("xx"));
});

test("builtin error 2", () => {
  expect("hello").toEqual(expect.not.stringContaining("ll"));
});

test("throw ok", () => {
  expect(() => { throw "hello" }).toThrow(expect.stringContaining("ll"))
  expect(() => { throw "hello" }).toThrow(expect.not.stringContaining("xx"))
})

test("throw error 1", () => {
  expect(() => { throw "hello" }).toThrow(expect.myStringContaining("xx") as any)
})

test("throw error 2", () => {
  expect(() => { throw "hello" }).toThrow(expect.not.myStringContaining("ll") as any)
})

test("throw error 3", () => {
  expect(() => { throw "hello" }).toThrow(expect.stringContaining("xx") as any)
})

test("throw error 4", () => {
  expect(() => { throw "hello" }).toThrow(expect.not.stringContaining("ll") as any)
})
