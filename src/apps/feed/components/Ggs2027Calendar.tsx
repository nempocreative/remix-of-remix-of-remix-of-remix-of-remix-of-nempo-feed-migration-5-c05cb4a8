import type { RefObject } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import { CALENDAR_EVENTS, getCalendarEvent, isCalendarRedDate } from './ggs-calendar-dates';
import calendarBackground from '@/assets/ggs-calendar-painted-background.jpg';

const YEAR = 2027;
const assetBase = "/nempo-feed/";

const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

const weekdays = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'];

function getMonthDates(monthIndex: number) {
  const firstWeekday = new Date(Date.UTC(YEAR, monthIndex, 1)).getUTCDay();
  const daysInMonth = new Date(
    Date.UTC(YEAR, monthIndex + 1, 0),
  ).getUTCDate();

  return Array.from({ length: 42 }, (_, cellIndex) => {
    const day = cellIndex - firstWeekday + 1;
    return day < 1 || day > daysInMonth ? null : day;
  });
}

export function Ggs2027Calendar({
  exportRef,
}: {
  exportRef: RefObject<HTMLElement | null>;
}) {
  return (
    <main ref={exportRef} className="ggcal-root"
      aria-label="Kalender GGS Beauty tahun 2027 ukuran 50 kali 70 sentimeter, seluruh dua belas bulan dalam satu lembar">
      <img className="ggcal-background" src={calendarBackground} alt="" aria-hidden="true" width={1408} height={1920} draggable={false} />
      <div className="ggcal-background-wash" aria-hidden="true" />
      <header className="ggcal-header">
        <div className="ggcal-brand"><img src={`${assetBase}assets/ggs-beauty-logo.png`} alt="Logo GGS Beauty" draggable={false} /></div>
        <div className="ggcal-year"><h1>{YEAR}</h1><span>Kalender</span></div>
        <p className="ggcal-motto">Grooming<br /><em>is Better.</em></p>
      </header>
      <section className="ggcal-photos" aria-label="Perawatan dan salon GGS Beauty">
        <figure className="ggcal-photo ggcal-photo-main">
          <img src={`${assetBase}assets/ggs-calendar-hair-treatment.webp`} alt="Perawatan rambut salon" draggable={false} />
        </figure>
        <figure className="ggcal-photo ggcal-photo-spa">
          <img src={`${assetBase}assets/ggs-calendar-service-documentation.webp`} alt="Perawatan spa GGS Beauty" draggable={false} />
        </figure>
        <figure className="ggcal-photo ggcal-photo-salon">
          <img src={`${assetBase}assets/ggs-beauty-storefront-documentation.webp`} alt="Tampak depan salon GGS Beauty" draggable={false} />
        </figure>
      </section>
      <div className="ggcal-photo-caption"><span>Beauty in Every Detail</span><span>Your Beauty, Our Priority</span></div>
      <div className="ggcal-months" aria-label="Dua belas bulan kalender 2027">
        {months.map((month, monthIndex) => (
          <section key={month} aria-label={`${month} ${YEAR}`} className="ggcal-month">
            <div className="ggcal-month-heading">
              <h2>{month}</h2><span>{String(monthIndex + 1).padStart(2, '0')}</span>
            </div>
            <div className="ggcal-weekdays">
              {weekdays.map((weekday, weekdayIndex) => (
                <span key={`${month}-${weekday}`} className={weekdayIndex === 0 ? 'ggcal-sunday' : ''}>{weekday}</span>
              ))}
            </div>
            <div className="ggcal-dates">
              {getMonthDates(monthIndex).map((day, cellIndex) => (
                <span key={`${month}-${cellIndex}`} aria-hidden={day === null}
                  title={getCalendarEvent(monthIndex, day)?.name}
                  aria-label={day === null ? undefined : `${day} ${month}${getCalendarEvent(monthIndex, day) ? ` · ${getCalendarEvent(monthIndex, day)?.name}` : ''}`}
                  className={`${isCalendarRedDate(monthIndex, day) ? 'ggcal-sunday' : ''} ${getCalendarEvent(monthIndex, day)?.holiday === false ? 'ggcal-commemoration' : ''}`}>{day}</span>
              ))}
            </div>
            <div className="ggcal-events">
              {CALENDAR_EVENTS.filter(event => event.month === monthIndex)
                .filter(event => !(event.month === 2 && event.day === 11))
                .map(event => <span key={event.day} className={event.holiday ? 'ggcal-event-holiday' : 'ggcal-event-note'}><b>{event.month === 2 && event.day === 10 ? '10–11' : event.day}</b> {event.name}</span>)}
            </div>
          </section>
        ))}
      </div>
      <footer className="ggcal-footer">
        <small className="ggcal-legend"><span>Merah: Minggu &amp; libur nasional</span><span>Garis bawah: hari peringatan (bukan libur)</span></small>
        <small className="ggcal-source">Libur nasional: SKB 2027 · Idul Fitri &amp; Idul Adha mengikuti ketetapan Kemenag · Cuti bersama tidak ditampilkan</small>
        <div className="ggcal-contact-row">
          <a href="https://wa.me/6282342777723" target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />0823-4277-7723</a>
          <a href="https://www.instagram.com/ggsbeauty.hair.co/" target="_blank" rel="noopener noreferrer"><FaInstagram aria-hidden="true" />@ggsbeauty.hair.co</a>
        </div>
        <address><MapPin aria-hidden="true" />Jl. Cimanuk No. 309, Sukagalih, Garut</address>
        <p>Together We Grow</p>
      </footer>
    </main>
  );
}
