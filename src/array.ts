// src/arrays.ts
/**
 * 数组处理模块（中文标题）
 * @namespace 数组处理 // 核心：命名空间指定中文分组名
 */
export namespace 数组处理 {
  /**
   * 计算数字数组的总和
   * @param arr 待求和的数字数组
   * @returns 数组所有元素的和
   * @example
   * ```ts
   * 数组处理.sumArray([1, 2, 3]); // 返回 6
   * ```
   */
  export function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * 查找数组中的最大值
   * @param arr 数字数组
   * @throws {Error} 数组为空时抛出错误
   * @returns 数组中的最大值
   * @example
   * ```ts
   * 数组处理.maxArray([1, 5, 3]); // 返回 5
   * ```
   */
  export function maxArray(arr: number[]): number {
    if (arr.length === 0) {
      throw new Error("数组不能为空");
    }
    return Math.max(...arr);
  }
}
