import { NonEmptyArray } from '../types/array';

/**
 * Calculates the sum of multiple numbers.
 * @returns The sum of the numbers.
 * @example sum(0, 1, 2); // 3
 */
export default function sum(number: number, ...others: NonEmptyArray<number>): number {
  return others.reduce((previousValue, currentValue) => previousValue + currentValue, number);
}
