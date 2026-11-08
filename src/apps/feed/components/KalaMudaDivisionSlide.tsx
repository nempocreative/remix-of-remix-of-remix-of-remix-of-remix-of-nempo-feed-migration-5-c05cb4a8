import type { RefObject } from 'react';
import { ArrowUpRight } from 'lucide-react';
import teamMember03 from '@/assets/team/team-member-03.jpg';
import teamMember05 from '@/assets/team/team-member-05.jpg';
import teamMember10 from '@/assets/team/team-member-10.jpg';
import teamMember12 from '@/assets/team/team-member-12.jpg';
import teamMember14 from '@/assets/team/team-member-14.jpg';
import teamMember16 from '@/assets/team/team-member-16.jpg';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { KALA_MUDA_DIVISIONS, type KalaMudaDivision } from './kala-muda-divisions';
import './KalaMudaRecruitSlide.css';
import './KalaMudaDivisionSlide.css';

/** Website team portraits paired with each division, by the member's listed field. */
const PHOTOS: Record<KalaMudaDivision['name'], string> = {
  Designer: teamMember05,
  'Web Developer': teamMember10,
  'Content Creator': teamMember16,
  'Videografer & Fotografer': teamMember14,
  Marketing: teamMember03,
  'Event Management': teamMember12,
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
  return (
    <div className="w-full max-w-[430px]">
      <div
        ref={exportRef as RefObject<HTMLDivElement | null>}
        className="kmr-root kmt-root kmd-root"
        role="img"
        aria-label={`Divisi ${number} dari ${total}: ${division.name}. ${division.tagline} Tanggung jawab: ${division.tasks.join('; ')}. Skill: ${division.skills.join(', ')}. Tools: ${division.tools.join(', ')}. Cocok buat kamu yang ${division.fit} Daftar di www.nempogarut.com.`}
      >
        <span className="kmd-glow" aria-hidden="true" />
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
            <img src={PHOTOS[division.name]} alt="" width={768} height={1024} draggable={false} />
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
