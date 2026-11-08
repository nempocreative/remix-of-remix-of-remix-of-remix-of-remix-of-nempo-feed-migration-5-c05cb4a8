export const CALENDAR_YEAR = 2027;

export type CalendarEvent = {
  month: number;
  day: number;
  name: string;
  holiday: boolean;
};

// Fixed Gregorian dates. Religious dates and collective leave need the 2027 SKB.
export const CALENDAR_EVENTS: CalendarEvent[] = [
  { month: 0, day: 1, name: 'Tahun Baru', holiday: true },
  { month: 3, day: 21, name: 'Hari Kartini', holiday: false },
  { month: 4, day: 1, name: 'Hari Buruh', holiday: true },
  { month: 4, day: 2, name: 'Hari Pendidikan Nasional', holiday: false },
  { month: 5, day: 1, name: 'Hari Lahir Pancasila', holiday: true },
  { month: 7, day: 17, name: 'Hari Kemerdekaan RI', holiday: true },
  { month: 9, day: 28, name: 'Sumpah Pemuda', holiday: false },
  { month: 10, day: 10, name: 'Hari Pahlawan', holiday: false },
  { month: 10, day: 25, name: 'Hari Guru Nasional', holiday: false },
  { month: 11, day: 22, name: 'Hari Ibu', holiday: false },
  { month: 11, day: 25, name: 'Natal', holiday: true },
];

export function getCalendarEvent(month: number, day: number | null) {
  return CALENDAR_EVENTS.find(event => event.month === month && event.day === day);
}

export function isCalendarRedDate(month: number, day: number | null) {
  if (day === null) return false;
  return new Date(Date.UTC(CALENDAR_YEAR, month, day)).getUTCDay() === 0 ||
    getCalendarEvent(month, day)?.holiday === true;
}