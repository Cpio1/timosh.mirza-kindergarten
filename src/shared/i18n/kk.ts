/** Kazakh — the default language. Proper names (Timosh Mirza, WhatsApp, Instagram, 2GIS) stay as they are. */
export const kk = {
  htmlLang: "kk",
  short: "KZ",
  skip: "Негізгі мазмұнға өту",

  nav: {
    home: "Басты бет",
    about: "Біз туралы",
    groups: "Топтар",
    meals: "Тамақтану",
    gallery: "Галерея",
    documents: "Құжаттар",
    contacts: "Байланыс",
  },

  header: {
    language: "Тілді таңдау",
    call: "Қоңырау шалу",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    home: "Timosh Mirza — басты бет",
    navLabel: "Сайт бөлімдері",
  },

  hero: {
    place: "Көлді ауылы · Қарасай ауданы",
    subtitle: "Қазақ тілінде тәрбие беретін балабақша. Мұнда балалар күн сайын ойнап, үйреніп, бірге өседі.",
    contact: "Хабарласу",
    more: "Толығырақ",
    stats: [
      { value: "12", label: "топ" },
      { value: "300", label: "бала" },
      { value: "1,5–6", label: "жас" },
    ],
    photoAlt: "Timosh Mirza балабақшасы",
    placeholder: "Фотосурет жақында қосылады",
    hoursLabel: "Күн сайын бізді күтеді",
    hoursNote: "Жұмыс уақыты",
  },

  about: {
    eyebrow: "Біз туралы",
    title: "Ана тілінде өсетін балалар мекені",
    text: "Timosh Mirza — Алматы облысы, Қарасай ауданы, Көлді ауылындағы балабақша. Мұнда 1,5 жастан 6 жасқа дейінгі 300 бала 12 топта тәрбиеленеді.",
    facts: [
      { key: "language", value: "Қазақ тілінде", label: "оқыту және тәрбие тілі" },
      { key: "hours", value: "07:00–17:00", label: "жұмыс уақыты" },
      { key: "ages", value: "1,5–6 жас", label: "тәрбиеленушілердің жасы" },
      { key: "meals", value: "5 мезгіл", label: "күнделікті тамақтану" },
    ],
    photoAlt: "Timosh Mirza балабақшасындағы күн",
  },

  groups: {
    eyebrow: "Топтар",
    title: "12 топ — бір үлкен отбасы",
    lead: "Балабақшада 1,5 жастан 6 жасқа дейінгі балаларға арналған 12 топ бар. Барлық топтарда тәрбие қазақ тілінде жүргізіледі.",
    facts: [
      { value: "12", label: "топ" },
      { value: "300", label: "тәрбиеленуші" },
      { value: "1,5–6", label: "жас аралығы" },
      { value: "07:00–17:00", label: "жұмыс уақыты" },
    ],
    note: "Балаңызға қай топ сәйкес келетінін және бос орындарды телефон арқылы нақтылаңыз.",
    cta: "Қоңырау шалу",
    dial: "топ",
  },

  meals: {
    eyebrow: "Тамақтану",
    title: "Күніне бес мезгіл тамақ",
    lead: "Балабақшада балалар күн бойы бес рет тамақтанады — таңертеңнен бастап кешке дейін.",
    note: "Ас мәзірі туралы толық ақпаратты балабақшадан біле аласыз.",
    times: "мезгіл",
    count: "5",
    morning: "07:00",
    evening: "17:00",
    mealLabel: (n: number) => `${n}-мезгіл`,
  },

  gallery: {
    eyebrow: "Галерея",
    title: "Балабақша өмірінен",
    more: "Тағы көрсету",
    less: "Жасыру",
    empty: "Фотосуреттер жақында қосылады",
    emptyHint: "Әзірге балабақша өмірін Instagram парақшамыздан көре аласыз.",
    instagram: "Instagram-да қарау",
    viewer: "Фотосуреттерді қарау",
    close: "Жабу",
    prev: "Алдыңғы",
    next: "Келесі",
    photoAlt: (n: number) => `Timosh Mirza балабақшасы — ${n}-фото`,
    open: (n: number) => `${n}-фотоны үлкейтіп қарау`,
    videoLabel: (n: number) => `${n}-бейнежазба`,
  },

  documents: {
    eyebrow: "Құжаттар / Документы",
    title: "Балабақша құжаттары",
    text: "Балабақшаның ресми құжаттарымен Google Drive қалтасында танысуға болады.",
    open: "Google Drive қалтасын ашу",
    soon: "Сілтеме жақында қосылады",
  },

  contacts: {
    eyebrow: "Байланыс",
    title: "Бізге хабарласыңыз",
    lead: "Сұрақтарыңыз болса, қоңырау шалыңыз немесе WhatsApp-қа жазыңыз.",
    address: "Мекенжай",
    addressLines: ["Алмалы көшесі, 15", "Көлді ауылы, Қарасай ауданы", "Алматы облысы, Қазақстан"],
    phone: "Телефон",
    whatsapp: "WhatsApp-қа жазу",
    whatsappText: "Сәлеметсіз бе! Timosh Mirza балабақшасы туралы білгім келеді.",
    instagram: "Instagram",
    hours: "Жұмыс уақыты",
    map: "2GIS-те ашу",
    mapAlt: "Timosh Mirza балабақшасы 2GIS картасында",
    mapBadge: "Көлді ауылы",
  },

  footer: {
    tagline: "Көлді ауылындағы қазақ тілді балабақша",
    up: "Жоғары оралу",
  },
};

export type Dictionary = typeof kk;
