import isFinite from "./isFinite";

/**
 * Checks whether the number is an infinite number.
 * @param number The number to be checked.
 * @returns `true` if the number is an infinite number, otherwise `false`.
 * @example isInfinite(Infinity); // true
 * @example isInfinite(0); // false
 */
export default function isInfinite(number: number) {
  return !isFinite(number);
}
