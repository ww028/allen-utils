// src/arrays.ts
/**
 * 数组处理工具模块
 * @module Arrays
 */

/**
 * 计算数字数组的总和
 * @param arr 待求和的数字数组
 * @returns 数组所有元素的和
 * @example
 * ```ts
 * sumArray([1, 2, 3]); // 返回 6
 * sumArray([]); // 返回 0
 * ```
 */
export function sumArray(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
