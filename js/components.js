// ==============================================
// risePaisa - Shared UI Components
// ==============================================
import { getSettings } from './data/settings.js';
import { ROUTES, buildCanonicalUrl } from './routes.js';

const WHATSAPP_NUMBER = '+9779761145115'; // legacy fallback
const SITE_NAME = 'risePaisa';

// ── SVG Icons ────────────────────────────────────
const ICONS = {
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,

  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,

  instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>`,

  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,

  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,

  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,

  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,

  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,

  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,

  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,

  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,

  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,

  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,

  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,

  bookOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,

  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,

  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,

  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,

  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,

  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  
  wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
  trendingUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  chartBar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="8" y1="6" x2="8.01" y2="6"/><line x1="16" y1="6" x2="16.01" y2="6"/><line x1="12" y1="6" x2="12.01" y2="6"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="12" y1="14" x2="12.01" y2="14"/><line x1="16" y1="10" x2="16.01" y2="10"/><line x1="16" y1="14" x2="16.01" y2="14"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="8" y1="14" x2="8.01" y2="14"/></svg>`,
  receipt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h5"/></svg>`,
  shieldCheck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  handCoins: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><circle cx="18" cy="6" r="3"/></svg>`,
  smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  umbrella: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12a10.06 10.06 0 0 0-20 0Z"/><path d="M12 12v8a2 2 0 0 0 4 0"/><path d="M12 2v1"/></svg>`,
  graduationCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  helpCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  bookmarkFilled: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  checkSquare: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  square: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  pieChart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  alertCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
};

// ── Navbar Component ─────────────────────────────
function renderNavbar(currentPath) {
  const desktopLinks = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.LEARN, label: 'Learn' },
    { path: ROUTES.COURSES, label: 'Courses' },
    { path: ROUTES.CALCULATORS, label: 'Calculators' },
    { path: ROUTES.RESOURCES, label: 'Resources', isTertiary: true },
    { path: ROUTES.BLOG, label: 'Blog', isTertiary: true },
    { path: ROUTES.ABOUT, label: 'About', isSecondary: true },
    { path: ROUTES.CONTACT, label: 'Contact', isSecondary: true },
  ];

  const mobileDrawerLinks = [
    { path: ROUTES.HOME, label: 'Home', icon: ICONS.compass },
    { path: ROUTES.COURSES, label: 'Courses', icon: ICONS.graduationCap },
    { path: ROUTES.LEARN, label: 'Learn Academy', icon: ICONS.bookOpen },
    { path: ROUTES.CALCULATORS, label: 'Calculators', icon: ICONS.calculator },
    { path: ROUTES.RESOURCES, label: 'Resources', icon: ICONS.layers },
    { path: ROUTES.BLOG, label: 'Articles & Blog', icon: ICONS.receipt },
    { path: ROUTES.ABOUT, label: 'About Us', icon: ICONS.users },
    { path: ROUTES.CONTACT, label: 'Contact', icon: ICONS.mail },
  ];

  const isCoursesActive = currentPath === ROUTES.COURSES || currentPath.startsWith('/courses');
  const isLearnActive = currentPath === ROUTES.LEARN || currentPath.startsWith('/learn');
  const isCalcsActive = currentPath === ROUTES.CALCULATORS || currentPath.startsWith('/calculators');

  const waLink = `https://wa.me/${getSettings().whatsapp}?text=${encodeURIComponent('I want to contact you.')}`;

  return `
    <nav class="navbar" id="navbar">
      <div class="navbar-inner">
        <!-- Brand Logo (Left) -->
        <a href="${ROUTES.HOME}" class="nav-logo" aria-label="${SITE_NAME} - Home">
          <div class="logo-text">rise<span>Paisa</span></div>
        </a>
        
        <!-- Desktop Nav Links (Center Desktop) -->
        <div class="nav-links">
          ${desktopLinks.map(l => {
            const isActive = currentPath === l.path || (l.path !== ROUTES.HOME && currentPath.startsWith(l.path));
            const classes = ['nav-link'];
            if (l.isSecondary) classes.push('nav-link-secondary');
            if (l.isTertiary) classes.push('nav-link-tertiary');
            if (isActive) classes.push('active');
            return `<a href="${l.path}" class="${classes.join(' ')}">${l.label}</a>`;
          }).join('')}
        </div>

        <!-- Mobile Center Quick Action Buttons (Center Mobile) -->
        <div class="mobile-quick-actions" role="navigation" aria-label="Quick Navigation">
          <a href="${ROUTES.COURSES}" class="mobile-quick-btn ${isCoursesActive ? 'active' : ''}">
            <span>Courses</span>
          </a>
          <a href="${ROUTES.LEARN}" class="mobile-quick-btn ${isLearnActive ? 'active' : ''}">
            <span>Learn</span>
          </a>
          <a href="${ROUTES.CALCULATORS}" class="mobile-quick-btn ${isCalcsActive ? 'active' : ''}">
            <span>Calculators</span>
          </a>
        </div>

        <!-- Desktop Action Cluster (Right Desktop) -->
        <div class="nav-auth-area">
          <button class="nav-search-btn" id="nav-search-btn" aria-label="Search (⌘K)" title="Search (⌘K)" type="button">
            ${ICONS.search}
          </button>
          <button class="theme-toggle-btn desktop-theme-toggle" id="theme-toggle-btn-desktop" aria-label="Toggle light and dark mode" title="Switch appearance" type="button">
            <span class="theme-icon theme-icon-sun" aria-hidden="true">${ICONS.sun}</span>
            <span class="theme-icon theme-icon-moon" aria-hidden="true">${ICONS.moon}</span>
          </button>
          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-primary nav-cta">
            ${ICONS.whatsapp} Contact Us
          </a>
        </div>

        <!-- Mobile Right: Compact Hamburger Toggle (Right Mobile) -->
        <div class="mobile-toggle-wrap">
          <button class="nav-toggle" id="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-menu" type="button">
            <span class="nav-toggle-bar"></span>
            <span class="nav-toggle-bar"></span>
            <span class="nav-toggle-bar"></span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Backdrop Overlay -->
      <div class="mobile-menu-overlay" id="mobile-menu-overlay" aria-hidden="true"></div>

      <!-- Mobile Slide-Out Drawer (Slides in smoothly from right) -->
      <aside class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <!-- Drawer Header -->
        <div class="mobile-drawer-header">
          <a href="${ROUTES.HOME}" class="drawer-logo" aria-label="${SITE_NAME} - Home">
            <div class="logo-text">rise<span>Paisa</span></div>
          </a>
          <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close navigation menu" type="button">
            ${ICONS.x}
          </button>
        </div>

        <div class="mobile-drawer-body">
          <!-- Prominent Quick Search inside Drawer -->
          <div class="mobile-drawer-search-wrap">
            <button type="button" class="mobile-drawer-search-btn" id="mobile-drawer-search-btn" aria-label="Search finance topics and calculators">
              <span class="mobile-drawer-search-icon">${ICONS.search}</span>
              <span class="mobile-drawer-search-text">Search topics, tools, lessons...</span>
              <kbd class="mobile-drawer-search-kbd">⌘K</kbd>
            </button>
          </div>

          <!-- Navigation Links List -->
          <nav class="mobile-nav-links" aria-label="Mobile Navigation Links">
            ${mobileDrawerLinks.map(l => {
              const isActive = currentPath === l.path || (l.path !== ROUTES.HOME && currentPath.startsWith(l.path));
              return `
                <a href="${l.path}" class="mobile-link ${isActive ? 'active' : ''}">
                  <span class="mobile-link-icon-wrap" aria-hidden="true">${l.icon}</span>
                  <span class="mobile-link-text">${l.label}</span>
                  <span class="mobile-link-arrow" aria-hidden="true">${ICONS.chevronRight}</span>
                </a>
              `;
            }).join('')}
          </nav>

          <!-- Appearance Theme Control -->
          <div class="mobile-menu-theme-row">
            <span class="mobile-menu-theme-label">Appearance</span>
            <div class="mobile-theme-segmented" role="radiogroup" aria-label="Appearance">
              <button type="button" class="mobile-theme-seg-btn" id="seg-btn-light" data-theme-val="light" aria-label="Light mode">
                <span class="theme-seg-icon" aria-hidden="true">${ICONS.sun}</span>
                <span>Light</span>
              </button>
              <button type="button" class="mobile-theme-seg-btn" id="seg-btn-dark" data-theme-val="dark" aria-label="Dark mode">
                <span class="theme-seg-icon" aria-hidden="true">${ICONS.moon}</span>
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Drawer Footer with WhatsApp Contact Button -->
        <div class="mobile-drawer-footer">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg mobile-drawer-wa-btn">
            ${ICONS.whatsapp} Chat on WhatsApp
          </a>
        </div>
      </aside>
    </nav>

    <!-- ── Global Search Modal ──────────────────────────────────────── -->
    <div class="search-modal-overlay" id="search-modal-overlay" role="dialog" aria-modal="true" aria-label="Search RisePaisa">
      <div class="search-modal" id="search-modal">
        <div class="search-modal-bar">
          <span class="search-modal-bar-icon" aria-hidden="true">${ICONS.search}</span>
          <input
            type="search"
            id="search-modal-input"
            class="search-modal-input"
            placeholder="Search finance topics..."
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            aria-label="Search RisePaisa"
            data-voice-ready="true"
            aria-autocomplete="list"
            aria-controls="search-modal-results"
          >
          <button class="search-modal-close" id="search-modal-close" type="button" aria-label="Close search">
            <kbd>Esc</kbd>
          </button>
        </div>
        <div class="search-modal-body" id="search-modal-body">
          <div id="search-modal-results" role="listbox" aria-label="Search suggestions"></div>
        </div>
        <div class="search-modal-footer" aria-hidden="true">
          <span class="search-modal-hint"><kbd>↵</kbd> to open</span>
          <span class="search-modal-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span class="search-modal-hint"><kbd>Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  `;
}

// ── Footer Component ─────────────────────────────
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${ROUTES.HOME}" class="nav-logo">

              <div class="logo-text">rise<span>Paisa</span></div>
            </a>
            <p>Nepal's most practical financial education platform. Practical NEPSE, taxation, and personal finance strategies built for real income growth in Nepal.</p>
            <div class="footer-social">
              <a href="https://www.youtube.com/@risePaisa" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
              <a href="https://www.tiktok.com/@risepaisa" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
              <a href="https://www.instagram.com/risepaisa/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="https://www.facebook.com/risepaisa/" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <a href="${ROUTES.HOME}">Home</a>
            <a href="${ROUTES.LEARN}">Learn Academy</a>
            <a href="${ROUTES.COURSES}">Courses</a>
            <a href="${ROUTES.CALCULATORS}">Calculators</a>
            <a href="${ROUTES.RESOURCES}">Resources</a>
            <a href="${ROUTES.BLOG}">Articles</a>
            <a href="${ROUTES.ABOUT}">About Us</a>
            <a href="${ROUTES.CONTACT}">Contact</a>
          </div>
          
          <div class="footer-section">
            <h4>Academy & Topics</h4>
            <a href="${ROUTES.LEARN_CATEGORY('investing')}">Investing</a>
            <a href="${ROUTES.LEARN_CATEGORY('nepse')}">NEPSE</a>
            <a href="${ROUTES.LEARN_CATEGORY('personal-finance')}">Personal Finance</a>
            <a href="${ROUTES.LEARN_CATEGORY('taxation')}">Taxation Nepal</a>
          </div>
          
          <div class="footer-section">
            <h4>Legal</h4>
            <a href="${ROUTES.PRIVACY}">Privacy Policy</a>
            <a href="${ROUTES.TERMS}">Terms & Conditions</a>
            <a href="${ROUTES.REFUND}">Refund Policy</a>
            <a href="${ROUTES.DISCLAIMER}">Disclaimer</a>
            <a href="${ROUTES.FAQ}">FAQ</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
          <span class="nepali-tag">🇳🇵 नेपालमै आधारित वित्तीय ज्ञान</span>
        </div>
      </div>
    </footer>
  `;
}

// ── WhatsApp Float Button ────────────────────────
function renderWhatsAppFloat() {
  const _wa = getSettings().whatsapp;
  return `
    <a href="https://wa.me/${_wa}?text=${encodeURIComponent('I want to contact you.')}" 
       target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp" id="whatsapp-float">
      ${ICONS.whatsapp}
    </a>
  `;
}

// ── Course Card Component ────────────────────────
function renderCourseCard(course) {
  const thumbMap = {
    1: 'assets/images/course-nepse.png',
    2: 'assets/images/course-finance.png',
    3: 'assets/images/course-tax.png',
    4: 'assets/images/course-mutual.png',
    5: 'assets/images/course-fintech.png',
  };
  const thumb = thumbMap[course.id] || 'assets/images/course-nepse.png';

  return `
    <article class="card course-card" id="course-card-${course.id}">
      <img src="${thumb}" alt="${course.title}" class="card-image" loading="lazy" decoding="async">
      <div class="card-body">
        <div class="card-badges">
          <span class="badge badge-primary">${course.category}</span>
          <span class="badge badge-outline">Curriculum</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.shortDescription}</p>
        <div class="card-meta">
          <div class="course-price"><span class="currency">NPR</span>${course.price.toLocaleString()}</div>
          <a href="${ROUTES.COURSE_DETAIL(course.slug)}" class="btn btn-primary">View Details</a>
        </div>
      </div>
    </article>
  `;
}

// ── Dedicated Professional Resource Card Component ──────────────
function renderResourceCard(resource) {
  const thumbMap = {
    1: 'assets/images/resource-notion.png',
    2: 'assets/images/resource-budget.png',
  };
  const thumb = thumbMap[resource.id] || 'assets/images/resource-notion.png';
  const isNotion = (resource.category || '').toLowerCase().includes('notion');
  const formatIcon = isNotion
    ? `<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.387c-.466.046-.56.28-.373.466l1.822 1.355zm.84 3.034v13.017c0 .653.373 1.027 1.168.98l14.195-.84c.794-.047.934-.513.934-1.073V5.981c0-.56-.374-.886-.934-.84l-14.429.84c-.653.047-.934.373-.934.981zm13.447.887v10.873c0 .28-.187.373-.42.373-.234 0-.467-.14-.654-.373l-6.44-8.82v8.587c0 .327-.14.467-.467.467h-1.027c-.327 0-.467-.14-.467-.467V7.848c0-.28.187-.373.42-.373.28 0 .514.14.7.42l6.44 8.774V8.128c0-.327.14-.467.467-.467h1.028c.327 0 .42.14.42.468z"/></svg>`
    : `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`;

  const itemsCount = resource.whatsIncluded ? resource.whatsIncluded.length : (resource.whatItContains ? resource.whatItContains.length : null);
  const timeLabel = resource.expectedTime || (resource.setupTime ? resource.setupTime.split('·')[0].trim() : '15 min');

  return `
    <article class="resource-card" id="resource-card-${resource.id}">
      <img src="${thumb}" alt="${resource.title}" class="card-image" loading="lazy" decoding="async">
      <div class="card-body">
        <div class="card-badges">
          <span class="badge badge-primary">${formatIcon} ${resource.category || 'Template'}</span>
          <span class="badge badge-outline">Ready to Use</span>
        </div>
        <h3>${resource.title}</h3>
        <p>${resource.shortDescription}</p>

        <div class="resource-meta-strip">
          <span class="resource-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${timeLabel} setup</span>
          </span>
          ${itemsCount ? `
            <span class="resource-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              <span>${itemsCount} modules</span>
            </span>
          ` : ''}
        </div>

        <div class="card-meta">
          <div class="course-price">
            <span class="currency">NPR</span>${resource.price.toLocaleString()}
          </div>
          <a href="${ROUTES.RESOURCE_DETAIL(resource.slug)}" class="btn btn-secondary btn-sm">View Details</a>
        </div>
      </div>
    </article>
  `;
}

// ── Article Card Component ───────────────────────
function renderArticleCard(article) {
  const catClass = {
    'Personal Finance': 'cat-personal-finance',
    'NEPSE & Investing': 'cat-nepse',
    'Taxation': 'cat-taxation',
    'Fintech': 'cat-fintech',
    'Saving & Budgeting': 'cat-saving',
  };

  const thumbHtml = article.thumbnail
    ? `<img src="${article.thumbnail}" alt="${article.title}" class="article-card-thumb" loading="lazy" decoding="async">`
    : `<div class="article-card-thumb article-card-thumb--placeholder"></div>`;

  return `
    <article class="card article-card" id="article-card-${article.id}">
      ${thumbHtml}
      <div class="card-body">
        <div class="card-badges">
          <span class="badge badge-outline">${article.category}</span>
        </div>
        <h3><a href="${ROUTES.BLOG_POST(article.slug)}" style="color:inherit;text-decoration:none">${article.title}</a></h3>
        <p>${article.excerpt}</p>
        <div class="card-date" style="display:flex;align-items:center;gap:6px">
          <span style="display:inline-flex;width:14px;height:14px;flex-shrink:0;color:var(--color-text-muted)">${ICONS.clock}</span>
          ${article.readTime} · ${formatDate(article.date)}
        </div>
      </div>
    </article>
  `;
}

function renderShareButtons(title, url = '') {
  const encodedTitle = encodeURIComponent(title);
  const origin = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : 'https://risepaisa.com';
  const encodedUrl = encodeURIComponent(origin + '/' + (url || '').replace(/^\//, ''));

  return `
    <div class="share-buttons">
      <span style="font-size:var(--text-sm);color:var(--color-text-muted)">Share:</span>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" rel="noopener" class="share-btn" aria-label="Share on Facebook">${ICONS.facebook}</a>
      <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}" target="_blank" rel="noopener" class="share-btn" aria-label="Share on Twitter">${ICONS.twitter}</a>
      <a href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}" target="_blank" rel="noopener" class="share-btn" aria-label="Share on WhatsApp">${ICONS.whatsapp}</a>
    </div>
  `;
}

// ── Utility: Format Date ─────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ── Utility: Update Page Meta ────────────────────
function setPageMeta(title, description, path = (typeof window !== 'undefined' ? window.location?.pathname || '/' : '/')) {
  if (!title) {
    document.title = `${SITE_NAME} | Nepal's Financial Education Platform`;
  } else if (title.includes(SITE_NAME)) {
    document.title = title;
  } else {
    document.title = `${title} | ${SITE_NAME}`;
  }

  let meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', description || '');

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title || SITE_NAME);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description || '');

  const canonicalUrl = buildCanonicalUrl(path);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
}

// ── Theme Switcher Engine ────────────────────────
function getStoredTheme() {
  try {
    return localStorage.getItem('rp_theme');
  } catch (e) {
    return null;
  }
}

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem('rp_theme', theme);
  } catch (e) {}

  window.dispatchEvent(new CustomEvent('rp-theme-changed', { detail: { theme } }));
}

function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
}

function initTheme() {
  const saved = getStoredTheme();
  if (!saved) {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  } else {
    document.documentElement.setAttribute('data-theme', saved);
  }

  // Bind click handlers to all theme buttons
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    if (btn._hasThemeHandler) return;
    btn._hasThemeHandler = true;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
  });

  // Listen for system theme changes if user hasn't explicitly chosen
  if (!window._rpSystemThemeListenerBound) {
    window._rpSystemThemeListenerBound = true;
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getStoredTheme()) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}

let _navbarInitialized = false;
let _searchModalInitialized = false;

/**
 * High-efficiency active link updater that does not destroy or recreate DOM
 */
function updateNavbarActive(currentPath) {
  if (!currentPath) return;

  // Update desktop navbar links
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  // Update mobile drawer links
  document.querySelectorAll('.mobile-menu .mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = currentPath === href || (href !== '/' && currentPath.startsWith(href));
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// ── Navbar Interactivity ─────────────────────────
function initNavbar() {
  // Ensure theme engine is active and buttons are bound
  initTheme();

  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');
  const navbar = document.getElementById('navbar');

  let _savedScrollY = 0;
  function lockScroll() {
    _savedScrollY = window.scrollY || window.pageYOffset || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${_savedScrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  }

  function unlockScroll() {
    const prevTop = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    const y = Math.abs(parseInt(prevTop || '0', 10));
    window.scrollTo(0, isNaN(y) || y === 0 ? _savedScrollY : y);
  }

  function openMobileMenu() {
    if (!mobileMenu) return;
    toggle?.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    overlay?.classList.add('open');
    lockScroll();
  }

  function closeMobileMenu() {
    if (mobileMenu && (mobileMenu.classList.contains('open') || overlay?.classList.contains('open'))) {
      toggle?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      overlay?.classList.remove('open');
      unlockScroll();
    }
  }

  // If already initialized once, close any open mobile menu and exit cleanly
  if (_navbarInitialized) {
    closeMobileMenu();
    return;
  }
  _navbarInitialized = true;

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });

    overlay?.addEventListener('click', () => {
      closeMobileMenu();
    });

    // Close menu on any link click inside drawer
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Drawer search button trigger
    const drawerSearchBtn = document.getElementById('mobile-drawer-search-btn');
    if (drawerSearchBtn) {
      drawerSearchBtn.addEventListener('click', () => {
        closeMobileMenu();
        setTimeout(() => {
          openSearchModal();
        }, 120);
      });
    }

    // Segmented theme control inside mobile drawer
    const segLight = document.getElementById('seg-btn-light');
    const segDark = document.getElementById('seg-btn-dark');

    function syncSegmentedUI(theme) {
      const cur = theme || getCurrentTheme();
      if (segLight) {
        segLight.classList.toggle('active', cur === 'light');
        segLight.setAttribute('aria-checked', String(cur === 'light'));
      }
      if (segDark) {
        segDark.classList.toggle('active', cur === 'dark');
        segDark.setAttribute('aria-checked', String(cur === 'dark'));
      }
    }

    syncSegmentedUI();
    window.addEventListener('rp-theme-changed', (e) => syncSegmentedUI(e.detail?.theme));

    segLight?.addEventListener('click', () => setTheme('light'));
    segDark?.addEventListener('click', () => setTheme('dark'));

    // Close menu on escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Close menu on resize past desktop breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }, { passive: true });
  }

  // Scroll behavior for navbar (RAF throttled to avoid main-thread scroll overhead)
  if (navbar) {
    let isScrolled = false;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 50;
          if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            navbar.classList.toggle('scrolled', isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Search Modal ──────────────────────────────────────────────────
  initSearchModal();
}

// ── Search Modal Logic ────────────────────────────────────────────────
let _searchModalOpen = false;
let _searchDebounce = null;
let _selectedIndex = -1;
let _suggestionCount = 0;

function openSearchModal() {
  const overlay = document.getElementById('search-modal-overlay');
  const input = document.getElementById('search-modal-input');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  _searchModalOpen = true;
  _selectedIndex = -1;
  setTimeout(() => input?.focus(), 60);
  // Show popular searches by default
  renderModalPopular();
}

function closeSearchModal() {
  const overlay = document.getElementById('search-modal-overlay');
  const input = document.getElementById('search-modal-input');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  _searchModalOpen = false;
  _selectedIndex = -1;
  if (input) input.value = '';
  const resultsEl = document.getElementById('search-modal-results');
  if (resultsEl) resultsEl.innerHTML = '';
}

function renderModalPopular() {
  const POPS = [
    'SIP', 'IPO', 'Income Tax', 'MeroShare', 'Fixed Deposit',
    'NEPSE', 'Mutual Fund', 'Emergency Fund', 'Home Loan', 'Dividend',
  ];
  const el = document.getElementById('search-modal-results');
  if (!el) return;
  el.innerHTML = `
    <div class="search-modal-empty">
      <p class="search-modal-empty-title">Popular searches</p>
      <div class="search-modal-popular-grid">
        ${POPS.map(t => `<button class="search-modal-popular-chip" type="button" data-modal-search="${t}">${t}</button>`).join('')}
      </div>
    </div>
  `;
  _suggestionCount = 0;
}

const TYPE_COLORS = {
  lesson: 'var(--color-accent)',
  guide: '#10b981',
  calculator: '#f59e0b',
  glossary: '#8b5cf6',
  resource: '#06b6d4',
  category: '#ec4899',
};

const TYPE_ICONS_INLINE = {
  lesson: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  calculator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/></svg>',
  glossary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>',
  resource: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  category: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
};

function highlightInline(text, query) {
  if (!text || !query) return text || '';
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    return text.replace(new RegExp(`(${safe})`, 'gi'), '<mark class="search-highlight">$1</mark>');
  } catch { return text; }
}

function renderModalResults(results, query) {
  const el = document.getElementById('search-modal-results');
  if (!el) return;

  if (!results.length) {
    el.innerHTML = `
      <div class="search-modal-empty">
        <p class="search-modal-empty-title">No results for "<strong>${query.replace(/</g, '&lt;')}</strong>" - try a different term</p>
        <div class="search-modal-popular-grid">
          <button class="search-modal-popular-chip" data-modal-search="SIP" type="button">SIP</button>
          <button class="search-modal-popular-chip" data-modal-search="IPO" type="button">IPO</button>
          <button class="search-modal-popular-chip" data-modal-search="Income Tax" type="button">Income Tax</button>
          <button class="search-modal-popular-chip" data-modal-search="Dividend" type="button">Dividend</button>
        </div>
      </div>
    `;
    _suggestionCount = 0;
    return;
  }

  _suggestionCount = results.length;
  el.innerHTML = `
    <div class="search-modal-suggestions" role="listbox">
      ${results.map((item, i) => `
        <a href="${item.url}" class="search-suggestion-item" role="option" data-idx="${i}" style="--type-color: ${TYPE_COLORS[item.type] || 'var(--color-accent)'}">
          <span class="search-suggestion-icon">${TYPE_ICONS_INLINE[item.type] || ''}</span>
          <span class="search-suggestion-content">
            <span class="search-suggestion-title">${highlightInline(item.title, query)}</span>
            <span class="search-suggestion-crumb">${item.breadcrumb || ''}</span>
          </span>
          <span class="search-suggestion-chip">${item.type}</span>
        </a>
      `).join('')}
    </div>
    <a href="/search?q=${encodeURIComponent(query)}" class="search-see-all">
      <span>See all results for "${query.replace(/</g, '&lt;')}"</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </a>
  `;
  _selectedIndex = -1;
}

function updateModalSelection(idx) {
  const items = document.querySelectorAll('#search-modal-results .search-suggestion-item');
  items.forEach((el, i) => el.classList.toggle('selected', i === idx));
  if (idx >= 0 && items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
}

function initSearchModal() {
  if (_searchModalInitialized) return;
  _searchModalInitialized = true;

  // Import search lazily to avoid blocking initial paint
  let searchModule = null;
  async function getSearch() {
    if (searchModule) return searchModule;
    try {
      searchModule = await import('./search.js');
      return searchModule;
    } catch { return null; }
  }

  // Open triggers
  function handleOpenTrigger() {
    openSearchModal();
    // Warm up the search index
    getSearch().then(m => m?.buildSearchIndex?.());
  }

  document.getElementById('nav-search-btn')?.addEventListener('click', handleOpenTrigger);
  document.getElementById('mobile-search-btn')?.addEventListener('click', handleOpenTrigger);

  // Keyboard shortcut: ⌘K / Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (_searchModalOpen) closeSearchModal();
      else handleOpenTrigger();
    }
    if (e.key === 'Escape' && _searchModalOpen) {
      closeSearchModal();
    }
  });

  // Close triggers
  document.getElementById('search-modal-close')?.addEventListener('click', closeSearchModal);
  document.getElementById('search-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'search-modal-overlay') closeSearchModal();
  });

  // Live search input
  document.getElementById('search-modal-input')?.addEventListener('input', async (e) => {
    const q = e.target.value.trim();
    clearTimeout(_searchDebounce);
    if (!q) { renderModalPopular(); return; }
    _searchDebounce = setTimeout(async () => {
      const m = await getSearch();
      if (!m) return;
      const results = m.quickSearch(q);
      renderModalResults(results, q);
    }, 180);
  });

  // Enter → navigate to search page
  document.getElementById('search-modal-input')?.addEventListener('keydown', (e) => {
    const input = e.target;
    const items = document.querySelectorAll('#search-modal-results .search-suggestion-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _selectedIndex = Math.min(_selectedIndex + 1, items.length - 1);
      updateModalSelection(_selectedIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _selectedIndex = Math.max(_selectedIndex - 1, 0);
      updateModalSelection(_selectedIndex);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (_selectedIndex >= 0 && items[_selectedIndex]) {
        const url = items[_selectedIndex].getAttribute('href');
        closeSearchModal();
        if (window._rpNavigateTo) window._rpNavigateTo(url);
        else window.location.href = url;
      } else if (input.value.trim()) {
        const q = input.value.trim();
        closeSearchModal();
        const dest = `/search?q=${encodeURIComponent(q)}`;
        if (window._rpNavigateTo) window._rpNavigateTo(dest);
        else window.location.href = dest;
      }
    }
  });

  // Popular chip clicks inside modal
  document.getElementById('search-modal-results')?.addEventListener('click', (e) => {
    const chip = e.target.closest('[data-modal-search]');
    if (!chip) return;
    const term = chip.dataset.modalSearch;
    const input = document.getElementById('search-modal-input');
    if (input) {
      input.value = term;
      input.dispatchEvent(new Event('input'));
    }
  });
}


// ── Accordion Interactivity ──────────────────────
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

      // Toggle clicked
      if (!wasActive) {
        item.classList.add('active');
      }
    });
  });
}

// ── Animate on Scroll (simple IntersectionObserver) ─
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ── Stat Counter Animation ───────────────────────
function initStatCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ── getWhatsApp helper (for pages that need dynamic WA number) ──
export function getWhatsApp() { return getSettings().whatsapp; }

// Export for use in other modules
export {
  WHATSAPP_NUMBER, SITE_NAME, ICONS,
  renderNavbar, renderFooter, renderWhatsAppFloat,
  renderCourseCard, renderResourceCard, renderArticleCard, renderShareButtons,
  formatDate, setPageMeta,
  initNavbar, updateNavbarActive, initAccordions, initScrollAnimations, initStatCounters,
  initTheme, setTheme, getCurrentTheme, toggleTheme
};
