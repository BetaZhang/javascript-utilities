import { NonEmptyArray } from "../types/array";

export default function intersection(
  array: any[],
  ...others: NonEmptyArray<any[]>
): any[] {
  return others.reduce((previousValue, currentValue) => {
    return Array.from(
      new Set(previousValue).intersection(new Set(currentValue)),
    );
  }, array);
}
