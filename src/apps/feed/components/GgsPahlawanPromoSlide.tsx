import type { RefObject } from 'react';
import { Baby, BookOpen, HeartPulse, ShieldCheck, Stethoscope, type LucideIcon } from 'lucide-react';
import guruPhoto from '@/assets/ggs-pahlawan-guru-cutout.png';
import dokterPhoto from '@/assets/ggs-pahlawan-dokter-cutout.png';
import perawatPhoto from '@/assets/ggs-pahlawan-perawat-cutout.png';
import polwanPhoto from '@/assets/ggs-pahlawan-polwan-cutout.png';
import bidanPhoto from '@/assets/ggs-pahlawan-bidan-cutout.png';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_PAHLAWAN_PROMO, type GgsPahlawanProfession } from './ggs-pahlawan-promo';
import './GgsPahlawanPromoSlide.css';

const PHOTOS: Record<GgsPahlawanProfession, { src: string; label: string }> = {
  Guru: { src: guruPhoto, label: 'para Guru' },
  Dokter: { src: dokterPhoto, label: 'para Dokter' },
  Perawat: { src: perawatPhoto, label: 'para Perawat' },
  Polisi: { src: polwanPhoto, label: 'para Polisi' },
  Bidan: { src: bidanPhoto, label: 'para Bidan' },
};

const ICONS: Record<GgsPahlawanProfession, LucideIcon> = {
  Guru: BookOpen,
  Dokter: Stethoscope,
  Perawat: HeartPulse,
  Polisi: ShieldCheck,
  Bidan: Baby,
};

/** GGS Feed slide 27: Hari Pahlawan discount for teachers, doctors, nurses, police and midwives. */
export function GgsPahlawanPromoSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { discountPercent, date, professions } = GGS_PAHLAWAN_PROMO;
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggph-root"
      aria-label={`GGS Beauty — promo Hari Pahlawan, diskon ${discountPercent}% untuk ${professions.join(', ')}`}
    >
      <div className="ggph-deco" aria-hidden="true"><span className="ggph-ring" /><span className="ggph-ring ggph-ring-2" /><span className="ggph-word">PAHLAWAN</span></div>
      <figure className="ggph-frame">
        <div className="ggph-stage">
          <div className="ggph-crop">
          {professions.map((name, i) => (
            <img
              key={name}
              className="ggph-shot"
              style={{ animationDelay: `${-((15 - i * 3) % 15)}s` }}
              src={PHOTOS[name].src}
              alt={`Stylist GGS berseragam ${name.toLowerCase()} memegang alat salon`}
            />
          ))}
          </div>
          <div className="ggph-progress" aria-hidden="true">
            {professions.map((name, i) => (
              <span key={name}><i className={`ggph-fill ggph-fill-${i}`} /></span>
            ))}
          </div>
          <div className="ggph-captions" aria-hidden="true">
            {professions.map((name, i) => (
              <p key={name} className="ggph-cap" style={{ animationDelay: `${-((15 - i * 3) % 15)}s` }}>
                <b>0{i + 1} / 05</b>
                <span>Untuk {PHOTOS[name].label}</span>
              </p>
            ))}
          </div>
        </div>
      </figure>

      <section className="ggph-copy">
        <p className="ggph-kicker">
          Hari Pahlawan · {date}
        </p>
        <h2 className="ggph-title">
          <span>Terima kasih,</span>
          <em>Pahlawan Kita</em>
        </h2>
        <p className="ggph-sub">Kalian yang setiap hari mendidik, merawat, dan menjaga — sekarang giliran kalian dirawat.</p>

        <div className="ggph-deal">
          <p className="ggph-deal-label">Diskon</p>
          <p className="ggph-deal-value">
            {discountPercent}
            <small>%</small>
          </p>
        </div>

        <p className="ggph-for">Khusus untuk</p>
        <ul className="ggph-list">
          {professions.map((name, i) => {
            const Icon = ICONS[name];
            return (
              <li key={name} style={{ animationDelay: `${-((15 - i * 3) % 15)}s` }}>
                <Icon className="ggph-icon" strokeWidth={1.8} aria-hidden="true" />
                {name}
              </li>
            );
          })}
        </ul>
        <p className="ggph-note">Tunjukkan kartu identitas profesi saat datang.</p>
      </section>

      <img className="ggph-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
