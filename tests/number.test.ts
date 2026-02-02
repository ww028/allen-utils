import { expect, test } from "vitest";
import { add, multiply } from "../src/number";

// 测试加法函数
test("add function", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

// 测试乘法函数
test("multiply function", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(0, 5)).toBe(0);
  expect(multiply(-2, 4)).toBe(-8);
});
