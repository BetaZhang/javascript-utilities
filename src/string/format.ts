/**
 * Formats the string by replacing placeholders with specified values.
 * @param string The string to be formatted, containing placeholders (e.g., `{key}` or `{0}`).
 * @param formats The values used to replace the placeholders.
 * - If an array is provided, placeholders should be in the form `{0}`, `{1}`, etc., where the numbers correspond to array indices.
 * - If an object is provided, placeholders should be in the form `{key}`, where the keys correspond to the object's keys.
 * @returns The formatted string.
 */
export default function format(string: string, formats: string[] | Record<string, string>): string {
    Object.entries(formats).forEach(([key, value]) => {
        string = string.replaceAll(`{${key}}`, value)
    });

    return string;
}
