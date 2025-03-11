/**
 * Calculates the sum of multiple numbers.
 * @param numbers The numbers to sum.
 * @returns The sum of the numbers.
 * @example sum(0, 1, 2); // 3
 */
export default function sum(...numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
