/**
 * Checks whether the string is `"true"`.
 * @param string The string to be checked.
 * @returns `true` if the string is `"true"`, otherwise `false`.
 * @example isTrue("true"); // true
 * @example isTrue("false"); // false
 */
export default function isTrue(string: string): boolean {
  return string === "true";
}
