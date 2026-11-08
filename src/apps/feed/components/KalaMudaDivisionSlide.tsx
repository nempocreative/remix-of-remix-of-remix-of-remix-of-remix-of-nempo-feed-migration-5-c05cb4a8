import type { RefObject } from 'react';
import { ArrowUpRight, Camera, Clapperboard, CodeXml, Megaphone, MicVocal, PenTool, type LucideIcon } from 'lucide-react';
import paintingDesigner from '@/assets/divisions/divisi-designer-painting.jpg';
import paintingWebDeveloper from '@/assets/divisions/divisi-web-developer-painting.jpg';
import paintingContentCreator from '@/assets/divisions/divisi-content-creator-painting.jpg';
import paintingVideoPhoto from '@/assets/divisions/divisi-videografer-fotografer-painting.jpg';
import paintingMarketing from '@/assets/divisions/divisi-marketing-painting.jpg';
import paintingEvent from '@/assets/divisions/divisi-event-management-painting.jpg';
import paintedBackdrop from '@/assets/divisions/divisi-background-painting.jpg';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { KALA_MUDA_DIVISIONS, type KalaMudaDivision } from './kala-muda-divisions';
import './KalaMudaRecruitSlide.css';
import './KalaMudaDivisionSlide.css';

/** Painted still-life illustration per division (tools of the trade, no people). */
const PAINTINGS: Record<KalaMudaDivision['name'], string> = {
  Designer: paintingDesigner,
  'Web Developer': paintingWebDeveloper,
  'Content Creator': paintingContentCreator,
  'Videografer & Fotografer': paintingVideoPhoto,
  Marketing: paintingMarketing,
  'Event Management': paintingEvent,
};

/** Chalk-line doodle per division, drawn in the free bottom-right corner of the painted backdrop. */
const DOODLES: Record<KalaMudaDivision['name'], LucideIcon> = {
  Designer: PenTool,
  'Web Developer': CodeXml,
  'Content Creator': Clapperboard,
  'Videografer & Fotografer': Camera,
  Marketing: Megaphone,
  'Event Management': MicVocal,
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
  const [first, ...rest] = division.name.split(' ');
  const Doodle = DOODLES[division.name];
  return (
    <div className="w-full max-w-[430px]">
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="kmr-root kmt-root kmd-root"
        role="img"
        aria-label={`Divisi ${number} dari ${total}: ${division.name}. ${division.tagline} Tanggung jawab: ${division.tasks.join('; ')}. Skill: ${division.skills.join(', ')}. Tools: ${division.tools.join(', ')}. Cocok buat kamu yang ${division.fit} Daftar di www.nempogarut.com.`}
      >
        <img className="kmd-backdrop" src={paintedBackdrop} alt="" aria-hidden="true" width={1088} height={1440} draggable={false} />
        <span className="kmd-glow" aria-hidden="true" />
        <div className="kmd-doodles" aria-hidden="true">
          <svg className="kmd-doodle-trail" viewBox="0 0 200 300" fill="none">
            <path d="M18 292c22-26 70-30 74-62 4-28-38-30-30-56 8-26 60-14 84-46 14-18 12-40 22-62" />
          </svg>
          <Doodle className="kmd-doodle-icon" strokeWidth={1.25} />
          <svg className="kmd-doodle-spark" viewBox="0 0 40 40" fill="none">
            <path d="M8 30 2 36M20 26v10M30 30l6 6" />
          </svg>
          <svg className="kmd-doodle-loop" viewBox="0 0 220 100" fill="none">
            <path d="M4 78c30 4 46-22 40-40-6-18-30-8-24 10 8 22 50 26 72 6 20-18 30-44 60-40 30 4 40 36 64 30" />
            <circle cx="196" cy="22" r="5" />
            <circle cx="176" cy="10" r="3" />
            <circle cx="210" cy="44" r="2.5" />
          </svg>
        </div>
        <NempoHeader badge="OPEN RECRUITMENT" />

        <div className="kmd-hero" aria-hidden="true">
          <div className="kmd-hero-text">
            <span className="kmd-label">
              <b>Divisi {number}</b>
              <i />
              {total}
            </span>
            <h2 className="kmd-name">
              {first}
              {rest.length > 0 && <><br />{rest.join(' ')}</>}
            </h2>
            <p className="kmd-tagline">{division.tagline}</p>
            <p className="kmd-fit">Cocok buat kamu yang {division.fit}</p>
          </div>
          <figure className="kmd-photo">
            <img src={PAINTINGS[division.name]} alt="" width={768} height={1024} draggable={false} />
            <figcaption className="kmd-cta">
              <span>Daftar di</span>
              <strong>nempogarut.com</strong>
              <ArrowUpRight strokeWidth={2.4} />
            </figcaption>
          </figure>
        </div>

        <section className="kmd-section kmd-tasks-wrap" aria-hidden="true">
          <h3 className="kmd-head">Tanggung jawab</h3>
          <ol className="kmd-tasks">
            {division.tasks.map((task, i) => (
              <li key={task}>
                <span className="kmd-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{task}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="kmd-section kmd-meta" aria-hidden="true">
          <div>
            <h3 className="kmd-head">Skill</h3>
            <ul className="kmd-list">{division.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </div>
          <div>
            <h3 className="kmd-head">Tools</h3>
            <ul className="kmd-list">{division.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </div>
        </div>

        <NempoFooter />
      </div>
    </div>
  );
}
