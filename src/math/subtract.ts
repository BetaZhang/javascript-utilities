/**
 * Calculates the difference of multiple numbers.
 * @param numbers The numbers to subtract.
 * @returns The difference of the numbers.
 * @example subtract(0, 1, 2); // -3
 */
export default function subtract(...numbers: number[]): number {
  return numbers.reduce((previousValue, currentValue) => previousValue - currentValue);
}
