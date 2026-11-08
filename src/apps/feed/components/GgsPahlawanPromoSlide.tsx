import type { RefObject } from 'react';
import { Baby, BookOpen, HeartPulse, ShieldCheck, Stethoscope, type LucideIcon } from 'lucide-react';
import nursePoster from '@/assets/ggs-pahlawan-perawat-salon.jpg';
import nurseVideo from '@/assets/videos/ggs-pahlawan-perawat-salon.mp4.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import { GGS_PAHLAWAN_PROMO, type GgsPahlawanProfession } from './ggs-pahlawan-promo';
import './GgsPahlawanPromoSlide.css';

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
      <figure className="ggph-frame">
        <video
          className="ggph-video"
          src={nurseVideo.url}
          poster={nursePoster}
          aria-label="Stylist GGS berseragam perawat tersenyum sambil memegang gunting, sisir, dan hair dryer"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </figure>

      <section className="ggph-copy">
        <p className="ggph-kicker">
          <span className="ggph-flag" aria-hidden="true" />
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
          {professions.map((name) => {
            const Icon = ICONS[name];
            return (
              <li key={name}>
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
