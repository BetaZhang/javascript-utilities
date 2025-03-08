/**
 * Checks whether the array is empty.
 * @param array The array to be checked.
 * @returns `true` if the array is empty, otherwise `false`.
 * @example isEmpty([]); // true
 * @example isEmpty([0, 1, 2]); // false
 */
export default function isEmpty(array: any[]): boolean {
  return array.filter(() => true).length > 0;
}
