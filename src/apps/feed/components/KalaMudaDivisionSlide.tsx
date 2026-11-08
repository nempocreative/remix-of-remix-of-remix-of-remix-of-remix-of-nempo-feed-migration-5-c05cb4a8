import type { RefObject } from 'react';
import { CalendarCheck, Camera, Check, Code2, Megaphone, Palette, Sparkles, Wrench, Zap, type LucideIcon } from 'lucide-react';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { KALA_MUDA_DIVISIONS, type KalaMudaDivision, type KalaMudaDivisionIcon } from './kala-muda-divisions';
import './KalaMudaRecruitSlide.css';
import './KalaMudaDivisionSlide.css';

const ICONS: Record<KalaMudaDivisionIcon, LucideIcon> = {
  palette: Palette,
  code: Code2,
  sparkles: Sparkles,
  camera: Camera,
  megaphone: Megaphone,
  calendar: CalendarCheck,
};

/** Nempo Feed slides 38–43: one Kala Muda division explained per slide. */
export function KalaMudaDivisionSlide({
  division,
  exportRef,
}: {
  division: KalaMudaDivision;
  exportRef?: RefObject<HTMLElement | null>;
}) {
  const index = KALA_MUDA_DIVISIONS.indexOf(division);
  const number = String(index + 1).padStart(2, '0');
  const total = String(KALA_MUDA_DIVISIONS.length).padStart(2, '0');
  const Icon = ICONS[division.icon];
  return (
    <div className="w-full max-w-[430px]">
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="kmr-root kmt-root kmd-root"
        role="img"
        aria-label={`Divisi ${number} dari ${total}: ${division.name}. ${division.tagline} Yang kamu kerjakan: ${division.tasks.join('; ')}. Skill: ${division.skills.join(', ')}. Tools: ${division.tools.join(', ')}. Cocok buat kamu yang ${division.fit} Daftar di www.nempogarut.com.`}
      >
        <div className="kmt-bg" aria-hidden="true">
          <span className="kmt-grid" />
          <span className="kmt-ring kmt-ring-a" />
          <span className="kmt-ring kmt-ring-b" />
          <span className="kmt-band" />
          <span className="kmd-bignum">{number}</span>
        </div>
        <NempoHeader badge={`DIVISI ${number}/${total}`} />
        <div className="kmd-body" aria-hidden="true">
          <div className="kmd-hero">
            <span className="kmd-icon"><Icon strokeWidth={2.2} /></span>
            <div className="kmd-hero-text">
              <span className="kmd-kicker">Divisi Kala Muda</span>
              <h2 className="kmd-name">{division.name}</h2>
              <p className="kmd-tagline">{division.tagline}</p>
            </div>
          </div>

          <section className="kmd-card">
            <h3 className="kmd-head"><Zap /> Yang kamu kerjakan</h3>
            <ul className="kmd-tasks">
              {division.tasks.map((task) => (
                <li key={task}>
                  <span className="kmd-check"><Check strokeWidth={3} /></span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="kmd-cols">
            <section className="kmd-card">
              <h3 className="kmd-head"><Sparkles /> Skill</h3>
              <div className="kmd-chips">
                {division.skills.map((skill) => <span key={skill} className="kmd-chip">{skill}</span>)}
              </div>
            </section>
            <section className="kmd-card">
              <h3 className="kmd-head"><Wrench /> Tools</h3>
              <div className="kmd-chips">
                {division.tools.map((tool) => <span key={tool} className="kmd-chip kmd-chip-tool">{tool}</span>)}
              </div>
            </section>
          </div>

          <p className="kmd-fit">
            <strong>Cocok buat kamu yang</strong> {division.fit}
          </p>
          <p className="kmd-cta">Daftar di <strong>www.nempogarut.com</strong></p>
        </div>
        <NempoFooter />
      </div>
    </div>
  );
}
