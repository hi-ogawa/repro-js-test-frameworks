import { describe, test } from "vitest";
import { expect } from '@playwright/test';

describe("Test", async () => {
  test("test", async() => {
    await expect(1).toEqual(1);
  })
})