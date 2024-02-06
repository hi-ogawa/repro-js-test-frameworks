import { expect, it, describe, afterAll } from "bun:test";

it("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

describe('error', () => {
  afterAll(() => {
    boomSuite()
  })

  it('stack', () => {
    boom()
  })

  it('diff', () => {
    expect({ hello: 'x' }).toEqual({ hello: 'y' })
  })

  it('unhandled', () => {
    (async () => boomUnhandled())()
  })
})

function boom() {
  boomInner1()
}

function boomInner1() {
  throw new Error('boom')
}

function boomSuite() {
  throw new Error('boomSuite')
}

function boomUnhandled() {
  throw new Error('boomUnhandled')
}
