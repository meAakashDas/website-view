import { ENTITY_RISEPAISA, ENTITY_AAKASH_DAS } from './entities.js';

export { ENTITY_RISEPAISA, ENTITY_AAKASH_DAS };

export const SITE_SETTINGS = {
  whatsapp: ENTITY_RISEPAISA.contact.whatsapp,
  siteName: ENTITY_RISEPAISA.name,
  tagline: ENTITY_RISEPAISA.tagline,
  social: ENTITY_RISEPAISA.social,
  contactLinks: {
    risepaisa: ENTITY_RISEPAISA.social,
    aakash: ENTITY_AAKASH_DAS.social,
  },
};

/**
 * Get site settings
 * @returns {typeof SITE_SETTINGS}
 */
export function getSettings() {
  return SITE_SETTINGS;
}

