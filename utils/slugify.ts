/**
 * Slugify has for purpose to converting it into a URL-friendly format.
 *
 * @param text The input text to be slugified.
 * @returns The slugified text.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalize to remove accents
    .replace(/[\u0300-\u036f]/g, '') // Remove remaining accents
    .replace(/[^a-z0-9-]/g, '') // Remove non-alphanumeric characters and hyphens
    .trim()
    .replace(/\s+/g, '-')
}
//Should be placed in utils and imported in schemas
