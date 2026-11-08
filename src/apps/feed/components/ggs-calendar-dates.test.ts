import { describe, expect, it } from 'vitest';
import { CALENDAR_EVENTS, getCalendarEvent, isCalendarRedDate } from './ggs-calendar-dates';

describe('GGS calendar holidays and commemorations', () => {
  it.each([[0, 1], [4, 1], [5, 1], [7, 17], [11, 25]])('marks national fixed-date holiday %i/%i red', (month, day) => {
    expect(isCalendarRedDate(month, day)).toBe(true);
    expect(getCalendarEvent(month, day)?.holiday).toBe(true);
  });
  it('keeps Hari Pahlawan as a commemoration, not a public holiday', () => {
    expect(getCalendarEvent(10, 10)?.holiday).toBe(false);
    expect(isCalendarRedDate(10, 10)).toBe(false);
  });
  it('marks Sundays red but not ordinary weekdays or empty cells', () => {
    expect(isCalendarRedDate(0, 3)).toBe(true);
    expect(isCalendarRedDate(0, 4)).toBe(false);
    expect(isCalendarRedDate(0, null)).toBe(false);
  });
  it('includes all 18 national holiday dates from the 2027 SKB', () => {
    expect(CALENDAR_EVENTS.filter(event => event.holiday).map(event => [event.month + 1, event.day])).toEqual([
      [1, 1], [1, 5], [2, 6], [3, 8], [3, 10], [3, 11], [3, 26], [3, 28],
      [5, 1], [5, 6], [5, 17], [5, 20], [6, 1], [6, 6], [8, 15], [8, 17], [12, 25], [12, 26],
    ]);
  });
});