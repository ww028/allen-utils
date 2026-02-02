import { expect, test } from "vitest";
import { sumArray } from "../src/array";

// 测试加法函数
test("sumArray function", () => {
  expect(sumArray([1, 2])).toBe(3);
});
