import { test, before, describe } from 'node:test'

describe('Test', () => {
  before(() => {
    throw new Error('error')
  })

  test("test", async() => {
    // await expect(1).toEqual(1);
  })

  test("test2", { skip: true }, async() => {
    // await expect(1).toEqual(1);
  })

  test("test3", async() => {
    // await expect(1).toEqual(1);
  })

  test("test4", async() => {
    // await expect(1).toEqual(1);
  })

  test("test5", async() => {
    // await expect(1).toEqual(1);
  })
})