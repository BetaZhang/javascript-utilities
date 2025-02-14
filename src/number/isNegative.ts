/**
 * Checks whether the number is a negative number.
 * @param number The number to be checked.
 * @returns `true` if the number is a negative number, otherwise `false`.
 * @example isNegative(-1); // true
 * @example isNegative(0); // false
 */
export default function isNegative(number: number) {
  return Math.sign(number) === -1;
}
