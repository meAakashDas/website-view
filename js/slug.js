// ==============================================
// risePaisa — Reusable Slug Generation & Validation Engine
// Standardized slug system: lowercase, hyphen-delimited, collision-safe
// ==============================================

/**
 * Generate a clean, SEO-friendly, human-readable slug from text
 * 
 * Rules:
 * 1. Convert to lowercase
 * 2. Replace spaces and whitespace with hyphens
 * 3. Remove duplicate hyphens
 * 4. Strip special characters, punctuation, and non-alphanumeric symbols
 * 5. Trim leading and trailing hyphens
 * 6. Collision avoidance: automatically append readable suffix (-2, -3) if duplicate
 * 
 * @param {string} text - Raw string (e.g. "How Mutual Funds Work in Nepal!")
 * @param {Array<string>|Set<string>} [existingSlugs=[]] - Array or Set of existing slugs
 * @returns {string} Clean unique slug (e.g. "how-mutual-funds-work-in-nepal")
 */
export function generateSlug(text, existingSlugs = []) {
  if (!text || typeof text !== 'string') {
    return 'untitled';
  }

  // 1. Lowercase & trim
  let slug = text.toLowerCase().trim();

  // 2. Remove accents/diacritics if any
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 3. Replace ampersands with 'and'
  slug = slug.replace(/&+/g, 'and');

  // 4. Remove all characters except alphanumeric, spaces, and hyphens
  slug = slug.replace(/[^a-z0-9\s-]/g, '');

  // 5. Replace spaces and multiple whitespace with single hyphen
  slug = slug.replace(/\s+/g, '-');

  // 6. Collapse consecutive hyphens
  slug = slug.replace(/-+/g, '-');

  // 7. Strip leading and trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '');

  // Fallback if completely empty
  if (!slug) {
    slug = 'untitled';
  }

  // 8. Collision avoidance with clean human-readable numeric suffix
  const slugSet = existingSlugs instanceof Set
    ? existingSlugs
    : new Set(Array.isArray(existingSlugs) ? existingSlugs : []);

  if (!slugSet.has(slug)) {
    return slug;
  }

  let counter = 2;
  while (slugSet.has(`${slug}-${counter}`)) {
    counter++;
  }

  return `${slug}-${counter}`;
}

/**
 * Validate whether a string conforms to the RisePaisa clean slug standard
 * @param {string} slug - String to validate
 * @returns {boolean}
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') return false;
  // Lowercase alphanumeric and hyphens, no consecutive hyphens, no leading/trailing hyphens
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}
