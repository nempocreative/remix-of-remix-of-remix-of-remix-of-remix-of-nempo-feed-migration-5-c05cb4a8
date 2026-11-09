// GGS Beauty Salon & Spa price list for the printed A4 menu.
// Source: the owner's "Price_cetak.pdf" (Canva, 6 A4 pages). Prices in Rupiah, written as on the print.

export type PriceItem = {
  name: string;
  price: string;
  /** Optional duration line shown under the name (bundling page). */
  duration?: string;
};

export type PriceSection = {
  title?: string;
  /** Italic sub-heading, e.g. "No Bleaching". */
  subtitle?: string;
  items: PriceItem[];
};

export type PricePage = {
  id: string;
  /** Big vertical word on the right side. */
  label: string;
  /** Vertical word size in PDF points (595.5 × 842.25 page). */
  labelSize: number;
  /** Body text size in points. */
  textSize: number;
  /** Section title size in points. */
  titleSize: number;
  /** Row height in points. */
  rowHeight: number;
  /** Right edge of the price column in points. */
  right: number;
  /** Top of the first section title in points. */
  top: number;
  sections: PriceSection[];
};

export const GGS_PRICE_CONTACT = {
  instagram: '@ggsbeauty.hair.co',
  whatsapp: '0823-4277-7723',
};

export const GGS_PRICE_PAGES: PricePage[] = [
  {
    id: 'nail-art',
    label: 'NAIL ART',
    labelSize: 47.4,
    textSize: 18.6,
    titleSize: 20.6,
    rowHeight: 40.5,
    right: 401,
    top: 187,
    sections: [
      {
        title: 'NAIL ART & DESIGN',
        items: [
          { name: 'Press On Nail', price: '50.000 - 100.000' },
          { name: 'Kuku Asli Polos/Glitter', price: '50.000' },
          { name: 'Kuku Asli Motif', price: '60.000' },
          { name: 'Kuku asli Cat Eye', price: '100.000' },
          { name: 'Kuku asli fullcateye + Chrome', price: '150.000' },
          { name: 'Fake nail', price: '100.000' },
          { name: 'Motif', price: '5.000 - 10.000' },
          { name: 'Kuku palsu fullcateye + Chrome', price: '250.000' },
          { name: 'Motif sulit', price: '10.000 - 15.000' },
          { name: 'Kuku asli kaki', price: '50.000' },
          { name: 'Tambah aksesoris', price: '2.000 - 3.000' },
          { name: 'Tambah nail 1 jari', price: '10.000' },
          { name: 'Remover nail', price: '25.000' },
        ],
      },
    ],
  },
  {
    id: 'haircuts',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: 17.5,
    titleSize: 19.5,
    rowHeight: 37.9,
    right: 382,
    top: 187,
    sections: [
      {
        title: 'HAIRCUTS & STYLING',
        items: [
          { name: 'Cuci rambut', price: '25.000' },
          { name: 'Cuci blow', price: '50.000' },
          { name: 'Cuci catok', price: '50.000' },
          { name: 'Cuci catok/curly rambut sambung', price: '60.000' },
          { name: 'Cuci curly', price: '55.000' },
          { name: 'Curly rambut', price: '45.000' },
          { name: 'Catok rambut pendek', price: '40.000' },
          { name: 'Catok rambut panjang', price: '45.000' },
          { name: 'Catok rambut sambung', price: '60.000' },
          { name: 'Potong cuci catok', price: '65.000' },
          { name: 'Potong cuci curly', price: '70.000' },
          { name: 'Potong cuci blow', price: '60.000' },
          { name: 'Potong rambut', price: '50.000' },
          { name: 'Potong poni', price: '20.000' },
        ],
      },
    ],
  },
  {
    id: 'colouring-creambath',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: 15.6,
    titleSize: 17.4,
    rowHeight: 34,
    right: 347,
    top: 187,
    sections: [
      {
        title: 'COLOURING FULL WARNA',
        subtitle: 'No Bleaching',
        items: [
          { name: 'Pendek', price: '200.000 - 250.000' },
          { name: 'Sedang', price: '250.000 - 450.000' },
          { name: 'Panjang', price: '350.000 - 600.000' },
        ],
      },
      {
        subtitle: 'Bleaching',
        items: [
          { name: 'Pendek', price: '350.000 - 450.000' },
          { name: 'Sedang', price: '400.000 - 600.000' },
          { name: 'Panjang', price: '550.000 - 800.000' },
        ],
      },
      {
        title: 'CREAMBATH',
        items: [
          { name: 'Creambath cultusia', price: '80.000' },
          { name: 'Creambath CBD', price: '120.000' },
          { name: 'Creambath makarizo', price: '120.000' },
          { name: 'Creambath L’Oréal', price: '150.000' },
          { name: 'Creambath L’Oréal warna', price: '175.000' },
        ],
      },
    ],
  },
  {
    id: 'hair-treatment',
    label: 'HAIR & STYLE',
    labelSize: 37.4,
    textSize: 14.3,
    titleSize: 15.8,
    rowHeight: 30.6,
    right: 321,
    top: 179,
    sections: [
      {
        title: 'HAIR TREATMENT',
        items: [
          { name: 'Treatment ketombe', price: '120.000' },
          { name: 'Treatment kutu anak (1-5 th)', price: '120.000' },
          { name: 'Treatment kutu dewasa', price: '175.000' },
          { name: 'Treatment rambut bercabang', price: '100.000' },
          { name: 'Masker', price: '50.000' },
        ],
      },
      {
        title: 'KERATIN TREATMENT',
        items: [
          { name: 'Pendek (tipis - tebal)', price: '550.000' },
          { name: 'Sedang (tipis-tebal)', price: '650.000 - 700.000' },
          { name: 'Panjang', price: '600.000 - 800.000' },
        ],
      },
      {
        title: 'KERATIN SMOOTHING',
        items: [
          { name: 'Pendek', price: '350.000' },
          { name: 'Sedang', price: '450.000 - 550.000' },
          { name: 'Panjang', price: '600.000 - 800.000' },
        ],
      },
      {
        title: 'COLOURING HIGHLIGHT',
        items: [
          { name: 'Pendek', price: '350.000' },
          { name: 'Sedang', price: '450.000 - 700.000' },
          { name: 'Panjang', price: '650.000 - 1.000.000' },
        ],
      },
    ],
  },
  {
    id: 'massage-body',
    label: 'MASSAGE.',
    labelSize: 47.4,
    textSize: 15.8,
    titleSize: 17.5,
    rowHeight: 34,
    right: 349,
    top: 179,
    sections: [
      {
        title: 'MASSAGE SERVICE',
        items: [
          { name: 'Full body massage 60 menit', price: '90.000' },
          { name: 'Full body massage 90 menit', price: '120.000' },
          { name: 'Reflexion 60 menit', price: '95.000' },
          { name: 'Pijat urut tradisional khusus pria', price: 'Start 100K' },
        ],
      },
      {
        title: 'BODY TREATMENT',
        items: [
          { name: 'Ratus', price: '50.000' },
          { name: 'Waxing ketiak', price: '50.000' },
          { name: 'Masker ketiak', price: '30.000' },
          { name: 'Lulur + masker badan', price: '80.000' },
        ],
      },
      {
        title: 'FACE TREATMENT',
        items: [{ name: 'Totok wajah + masker 45 menit', price: '65.000' }],
      },
      {
        title: 'MENIPEDI',
        items: [
          { name: 'MeniPedi', price: '120.000' },
          { name: 'Menicure', price: '70.000' },
          { name: 'Pedicure', price: '80.000' },
        ],
      },
    ],
  },
  {
    id: 'bundling',
    label: 'MASSAGE.',
    labelSize: 47.4,
    textSize: 20,
    titleSize: 22.2,
    rowHeight: 71,
    right: 428,
    top: 179,
    sections: [
      {
        title: 'BUNDLING PACKAGE',
        items: [
          { name: 'Body massage + reflexy', price: '140.000', duration: '90 menit' },
          { name: 'Body massage + kerok', price: '145.000', duration: '90 menit' },
          { name: 'Body massage + scrub + masker badan', price: '180.000', duration: '120 menit' },
          { name: 'Body massage + totok wajah', price: '155.000', duration: '90 menit' },
          { name: 'Body massage + reflexy + scrub', price: '200.000', duration: '120 menit' },
          { name: 'Body massage + reflexy + totok wajah', price: '200.000', duration: '120 menit' },
          { name: 'Body massage + reflexy + kerok', price: '195.000', duration: '120 menit' },
        ],
      },
    ],
  },
];

/** Looks up a printed price by service name (first match across all pages). */
export function findGgsPrice(name: string): string | undefined {
  for (const page of GGS_PRICE_PAGES) {
    for (const section of page.sections) {
      const item = section.items.find((it) => it.name === name);
      if (item) return item.price;
    }
  }
  return undefined;
}
