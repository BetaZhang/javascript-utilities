/**
 * Removes the element of the specified index from the array.
 * @param array The array.
 * @param index The element index.
 * @returns The element if the element was removed, otherwise `undefined`.
 * @example remove([0, 1, 2, 3, 4], 0); // 0
 * @example remove([0, 1, 2, 3, 4], -1); // 4
 * @example remove([0, 1, 2, 3, 4], 5); // undefined
 */
function remove(array: any[], index: number): any[] {
    return array.splice(index, 1).at(0);
}
