import { describe, expect, it } from 'vitest';
import { GGS_PRICE_CONTACT, GGS_PRICE_PAGES, findGgsPrice } from './price-list';

describe('GGS A4 price list', () => {
  it('has the six pages of the printed menu', () => {
    expect(GGS_PRICE_PAGES).toHaveLength(6);
  });

  it('keeps nail art prices from the owner file', () => {
    expect(findGgsPrice('Press On Nail')).toBe('50.000 - 100.000');
    expect(findGgsPrice('Kuku palsu fullcateye + Chrome')).toBe('250.000');
    expect(findGgsPrice('Remover nail')).toBe('25.000');
  });

  it('keeps hair prices from the owner file', () => {
    expect(findGgsPrice('Cuci rambut')).toBe('25.000');
    expect(findGgsPrice('Potong cuci curly')).toBe('70.000');
    expect(findGgsPrice('Creambath L’Oréal warna')).toBe('175.000');
    expect(findGgsPrice('Treatment kutu dewasa')).toBe('175.000');
  });

  it('keeps colouring bleaching ranges separate from no bleaching', () => {
    const page = GGS_PRICE_PAGES.find((p) => p.id === 'colouring-creambath')!;
    expect(page.sections[0].items[2].price).toBe('350.000 - 600.000');
    expect(page.sections[1].items[2].price).toBe('550.000 - 800.000');
  });

  it('keeps massage and bundling prices from the owner file', () => {
    expect(findGgsPrice('Pijat urut tradisional khusus pria')).toBe('Start 100K');
    expect(findGgsPrice('MeniPedi')).toBe('120.000');
    expect(findGgsPrice('Body massage + reflexy + kerok')).toBe('195.000');
  });

  it('prints the salon contact', () => {
    expect(GGS_PRICE_CONTACT.whatsapp).toBe('0823-4277-7723');
    expect(GGS_PRICE_CONTACT.instagram).toBe('@ggsbeauty.hair.co');
  });
});
