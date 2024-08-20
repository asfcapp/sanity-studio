/**
 * Slugifies a given text string, converting it into a URL-friendly format.
 *
 * @param text The input text to be slugified.
 * @returns The slugified text.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase for consistency
    .normalize('NFD') // Normalize to decompose characters with accents into their base characters and combining marks
    .replace(/[\u0300-\u036f]/g, '') // Remove combining marks, which represent accents
    .replace(/[^a-z0-9-]/g, '') // Remove any characters that are not lowercase letters, numbers, or hyphens
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, '-'); // Replace multiple consecutive whitespace characters with a single hyphen
}
