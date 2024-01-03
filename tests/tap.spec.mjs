import { test, before } from 'tap'

before(() => {
  throw new Error('error')
})

test("test", async() => {
})

test("test2", { skip: true }, async() => {
})

test("test3", async() => {
})

test("test4", async() => {
})

test("test5", async() => {
})
