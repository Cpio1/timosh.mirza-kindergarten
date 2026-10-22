/**
 * Confirmed facts about the kindergarten. Everything on the site is built from this file
 * and the dictionaries in `shared/i18n` — nothing else should be invented
 * (no group names, prices, menus, awards or licences).
 */

export const kindergarten = {
  brand: "Timosh Mirza",
  ages: { from: 1.5, to: 6 },
  groupsCount: 12,
  pupilsCount: 300,
  meals: 5,
  hours: { opens: "07:00", closes: "17:00" },
  phone: { display: "+7 701 338 03 13", tel: "+77013380313", wa: "77013380313" },
  instagram: {
    handle: "@timosh.mirza",
    url: "https://www.instagram.com/timosh.mirza/",
  },
  /**
   * «Құжаттар / Документы»: the documents live in a shared Google Drive folder, the site only
   * links to it. Paste the folder's share link here (Drive → Share → "Anyone with the link").
   * While it is empty, the button shows "the link will appear soon" instead of a dead link.
   */
  documents: {
    driveUrl: "",
  },
  /**
   * 2GIS organisation card «Тимош Мырза, частный детский сад» in Кольди, Карасайский район.
   * The point is 2GIS's own position of that card (not hand-picked coordinates).
   * NB: 2GIS lists the card at «улица Алмалы, 23», while the kindergarten gives «Алмалы, 15»
   * (2GIS has no building 15 on that street). The site shows the kindergarten's address;
   * the marker stays on the 2GIS card until the address is confirmed.
   */
  twoGis: {
    firmId: "70000001052169305",
    lat: 43.323987,
    lng: 76.706422,
  },
} as const;

const { twoGis, phone } = kindergarten;

export const links = {
  tel: `tel:${phone.tel}`,
  whatsapp: (text: string) => `https://wa.me/${phone.wa}?text=${encodeURIComponent(text)}`,
  twoGisCard: `https://2gis.kz/almaty/firm/${twoGis.firmId}`,
  /** Keyless 2GIS static map with a marker on the kindergarten. */
  twoGisStatic: (w: number, h: number, zoom = 16) =>
    `https://static.maps.2gis.com/1.0?zoom=${zoom}&size=${w},${h}&markers=${twoGis.lng},${twoGis.lat}`,
} as const;

/** Section ids, shared by both layouts so anchors survive switching between them. */
export const sectionIds = ["home", "about", "groups", "meals", "gallery", "documents", "contacts"] as const;
export type SectionId = (typeof sectionIds)[number];

/** Header navigation (order matters). */
export const navSections = ["about", "groups", "meals", "gallery", "documents", "contacts"] as const satisfies readonly SectionId[];
