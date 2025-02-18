import isPositive from "../number/isPositive";

/**
 * Splits an array into smaller chunks of a specified size.
 * @param array The array to be chunked.
 * @param size The length of each chunk.
 * @returns A new array containing the chunks.
 * @example chunk([1, 2, 3, 4]); // [[1], [2], [3], [4]]
 * @example chunk([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
 * @example chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 */
export default function chunk(array: any[], size: number = 1): any[][] {
  const result = [];

  if (isPositive(size)) {
    size = Math.floor(size);

    for (let index = 0; index < array.length; index += size) {
      result.push(array.slice(index, index + size));
    }
  }

  return result;
}
