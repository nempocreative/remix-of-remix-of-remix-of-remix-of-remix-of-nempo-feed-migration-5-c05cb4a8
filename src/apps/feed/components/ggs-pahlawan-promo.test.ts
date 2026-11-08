import { describe, expect, it } from 'vitest';
import { GGS_PAHLAWAN_PROMO } from './ggs-pahlawan-promo';

describe('GGS promo Hari Pahlawan', () => {
  it('memberi diskon 40%', () => {
    expect(GGS_PAHLAWAN_PROMO.discountPercent).toBe(40);
  });

  it('khusus guru, dokter, perawat, polisi, dan bidan', () => {
    expect([...GGS_PAHLAWAN_PROMO.professions]).toEqual(['Guru', 'Dokter', 'Perawat', 'Polisi', 'Bidan']);
  });
});
