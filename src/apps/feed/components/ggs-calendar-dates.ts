export const CALENDAR_YEAR = 2027;

export type CalendarEvent = {
  month: number;
  day: number;
  name: string;
  holiday: boolean;
};

// National holidays: SKB 1205/2026, 3/2026, 2/2026, announced 16 September 2026.
// https://www.kemenkopmk.go.id/pemerintah-tetapkan-18-hari-libur-nasional-dan-8-cuti-bersama-tahun-2027
// Eid dates remain subject to the Ministry of Religious Affairs determination.
// Collective leave is excluded: it is optional for private employers, including GGS.
export const CALENDAR_EVENTS: CalendarEvent[] = [
  { month: 0, day: 1, name: 'Tahun Baru', holiday: true },
  { month: 0, day: 5, name: 'Isra Mikraj', holiday: true },
  { month: 1, day: 6, name: 'Tahun Baru Imlek', holiday: true },
  { month: 2, day: 8, name: 'Nyepi', holiday: true },
  { month: 2, day: 10, name: 'Idul Fitri', holiday: true },
  { month: 2, day: 11, name: 'Idul Fitri', holiday: true },
  { month: 2, day: 26, name: 'Wafat Yesus Kristus', holiday: true },
  { month: 2, day: 28, name: 'Paskah', holiday: true },
  { month: 3, day: 21, name: 'Hari Kartini', holiday: false },
  { month: 4, day: 1, name: 'Hari Buruh', holiday: true },
  { month: 4, day: 2, name: 'Hari Pendidikan Nasional', holiday: false },
  { month: 4, day: 6, name: 'Kenaikan Yesus Kristus', holiday: true },
  { month: 4, day: 17, name: 'Idul Adha', holiday: true },
  { month: 4, day: 20, name: 'Waisak', holiday: true },
  { month: 5, day: 1, name: 'Hari Lahir Pancasila', holiday: true },
  { month: 5, day: 6, name: 'Tahun Baru Islam', holiday: true },
  { month: 7, day: 15, name: 'Maulid Nabi', holiday: true },
  { month: 7, day: 17, name: 'Hari Kemerdekaan RI', holiday: true },
  { month: 9, day: 28, name: 'Sumpah Pemuda', holiday: false },
  { month: 10, day: 10, name: 'Hari Pahlawan', holiday: false },
  { month: 10, day: 25, name: 'Hari Guru Nasional', holiday: false },
  { month: 11, day: 22, name: 'Hari Ibu', holiday: false },
  { month: 11, day: 25, name: 'Natal', holiday: true },
  { month: 11, day: 26, name: 'Isra Mikraj', holiday: true },
];

export function getCalendarEvent(month: number, day: number | null) {
  return CALENDAR_EVENTS.find(event => event.month === month && event.day === day);
}

export function isCalendarRedDate(month: number, day: number | null) {
  if (day === null) return false;
  return new Date(Date.UTC(CALENDAR_YEAR, month, day)).getUTCDay() === 0 ||
    getCalendarEvent(month, day)?.holiday === true;
}