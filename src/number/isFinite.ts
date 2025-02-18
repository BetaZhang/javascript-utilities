/**
 * Checks whether the number is a finite number.
 * @param number The number to be checked.
 * @returns `true` if the number is a finite number, otherwise `false`.
 * @example isFinite(0); // true
 * @example isFinite(Infinity); // false
 */
export default function isFinite(number: number) {
  return Number.isFinite(number);
}
