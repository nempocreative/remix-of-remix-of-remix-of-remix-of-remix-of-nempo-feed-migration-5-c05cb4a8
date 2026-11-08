/** GGS Feed slide 27: Hari Pahlawan promo terms set by the owner. */
export const GGS_PAHLAWAN_PROMO = {
  discountPercent: 40,
  date: '10 November',
  professions: ['Guru', 'Dokter', 'Perawat', 'Polisi', 'Bidan'] as const,
};

export type GgsPahlawanProfession = (typeof GGS_PAHLAWAN_PROMO.professions)[number];
