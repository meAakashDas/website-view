// ==============================================
// risePaisa — Static Site Configuration & Settings
// 100% frontend static configuration (no backend/CMS required)
// ==============================================

export const SITE_SETTINGS = {
  whatsapp: '+9779761145115',
  siteName: 'risePaisa',
  tagline: "Nepal's Financial Education Platform",
  social: {
    youtube: 'https://www.youtube.com/@risePaisa',
    tiktok: 'https://www.tiktok.com/@risepaisa',
    instagram: 'https://www.instagram.com/risepaisa/',
    facebook: 'https://www.facebook.com/risepaisa/',
  },
  contactLinks: {
    risepaisa: {
      tiktok: 'https://www.tiktok.com/@risepaisa',
      instagram: 'https://www.instagram.com/risepaisa/',
      facebook: 'https://www.facebook.com/risepaisa/',
      youtube: 'https://www.youtube.com/@risePaisa',
      twitter: 'https://x.com/risePaisa',
      linkedin: 'https://np.linkedin.com/company/risepaisa-nepal',
    },
    aakash: {
      tiktok: 'https://www.tiktok.com/@aakashdas_',
      instagram: 'https://www.instagram.com/aakashdas_',
      facebook: 'https://www.facebook.com/AakasshDas/',
      youtube: 'https://www.youtube.com/@me.aakashdas',
      twitter: 'https://x.com/meaakashdas',
      linkedin: 'https://www.linkedin.com/in/aakashdas',
    },
  },
};

/**
 * Get site settings
 * @returns {typeof SITE_SETTINGS}
 */
export function getSettings() {
  return SITE_SETTINGS;
}
