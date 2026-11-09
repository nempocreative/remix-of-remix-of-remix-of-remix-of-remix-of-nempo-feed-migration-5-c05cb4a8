import type { RefObject } from 'react';
import feetPhoto from '@/assets/ggs-pedicure-before-after.jpg';
import backdrop from '@/assets/ggs-pedicure-backdrop.jpg';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsPedicureBeforeAfterSlide.css';

/** GGS Feed slide 28: pedicure before/after — one real photo, left foot before and right foot after. */
export function GgsPedicureBeforeAfterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggpd-root"
      aria-label="GGS Beauty — Feed slide 28, sebelum dan sesudah pedicure"
    >
      <img className="ggpd-backdrop" src={backdrop} alt="" aria-hidden="true" />

      <section className="ggpd-copy">
        <p className="ggpd-kicker">Pedicure Treatment</p>
        <h2 className="ggpd-title">
          <span>Kaki Terawat,</span>
          <em>Langkah Makin Pede</em>
        </h2>
        <p className="ggpd-sub">Lihat sendiri bedanya sebelum &amp; sesudah pedicure.</p>
      </section>

      <figure className="ggpd-frame">
        <img
          className="ggpd-photo"
          src={feetPhoto}
          alt="Dua kaki di atas handuk putih: kaki kiri sebelum pedicure tampak kusam dengan kuku kotor, kaki kanan sesudah pedicure tampak bersih dengan kuku mengilap"
        />
        <span className="ggpd-divider" aria-hidden="true" />
        <figcaption className="ggpd-label ggpd-label-before">
          <strong>Sebelum</strong>
          <span>Kusam &amp; kuku kotor</span>
        </figcaption>
        <figcaption className="ggpd-label ggpd-label-after">
          <strong>Sesudah</strong>
          <span>Bersih, cerah &amp; mengilap</span>
        </figcaption>
      </figure>

      <ul className="ggpd-points">
        <li>Kuku rapi &amp; bersih</li>
        <li>Kulit mati diangkat</li>
        <li>Kaki lembut &amp; segar</li>
      </ul>

      <img className="ggpd-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
