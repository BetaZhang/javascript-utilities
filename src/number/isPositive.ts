/**
 * Checks whether the number is a positive number.
 * @param number The number to be checked.
 * @returns `true` if the number is a positive number, otherwise `false`.
 * @example isPositive(1); // true
 * @example isPositive(0); // false
 */
export default function isPositive(number: number) {
  return Math.sign(number) === 1;
}
