/**
 * Checks whether the string is a file name.
 * @param string The string to be checked.
 * @returns `true` if the string is a file name, otherwise `false`.
 * @example isFileName("filename.txt"); // true
 * @example isFileName("filename"); // false
 */
export default function isFileName(string: string): boolean {
    string = string.trim();

    return string.length <= 255 && /^(?!.*[\\/:*?"<>|])(.*\..+)$/.test(string);
}
