import { test } from '@playwright/test';

test.describe("Test", () => {
  test.beforeAll(() => {
    throw new Error('error')
  })

  test("test", async() => {
  })

  test.skip("test2", async() => {
  })

  test("test3", async() => {
  })

  test("test4", async() => {
  })

  test("test5", async() => {
  })
})