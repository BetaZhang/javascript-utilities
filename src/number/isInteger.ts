/**
 * Checks whether the number is an integer.
 * @param number The number to be checked.
 * @returns `true` if the number is an integer, otherwise `false`.
 * @example isInteger(0); // true
 * @example isInteger(3.14); // false
 */
export default function isInteger(number: number) {
  return Number.isInteger(number);
}
