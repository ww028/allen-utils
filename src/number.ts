// src/numbers.ts
/**
 * 数字处理模块（中文标题）
 * @namespace 数字处理 // 核心：命名空间指定中文分组名
 */
/**
 * 加法函数
 * @param a 第一个加数
 * @param b 第二个加数
 * @returns 两数之和
 * @example
 * ```ts
 * 数字处理.add(1, 2); // 返回 3
 * ```
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 乘法函数
 * @param a 第一个乘数
 * @param b 第二个乘数
 * @returns 两数之积
 * @example
 * ```ts
 * 数字处理.multiply(2, 3); // 返回 6
 * ```
 */
export function multiply(a: number, b: number): number {
  return a * b;
}
