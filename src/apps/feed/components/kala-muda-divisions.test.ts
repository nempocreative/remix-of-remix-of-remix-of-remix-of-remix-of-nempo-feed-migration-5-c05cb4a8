import { describe, expect, it } from 'vitest';
import { DIVISION_SLIDES, divisionForSlide, KALA_MUDA_DIVISIONS } from './kala-muda-divisions';
import { INFO_DIVISIONS } from './kala-muda-recruit-timeline';

describe('Kala Muda division slides', () => {
  it('starts at slide 38 with one slide per division', () => {
    expect(DIVISION_SLIDES).toEqual([38, 39, 40, 41, 42, 43]);
  });

  it('follows the slide 36 division order', () => {
    expect(KALA_MUDA_DIVISIONS.map((d) => d.name)).toEqual([...INFO_DIVISIONS]);
    expect(divisionForSlide(38)?.name).toBe('Designer');
    expect(divisionForSlide(43)?.name).toBe('Event Management');
  });

  it('is not shown on slides outside 38–43', () => {
    expect(divisionForSlide(37)).toBeUndefined();
    expect(divisionForSlide(44)).toBeUndefined();
  });

  it('explains every division in detail', () => {
    KALA_MUDA_DIVISIONS.forEach((d) => {
      expect(d.tasks).toHaveLength(4);
      expect(d.skills.length).toBeGreaterThanOrEqual(4);
      expect(d.tools.length).toBeGreaterThanOrEqual(3);
    });
  });
});
