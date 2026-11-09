import type { CSSProperties } from 'react';
import { Clock3, Download, Printer } from 'lucide-react';
import background from '@/apps/ggs-price/assets/ggs-price-a4-background.jpg.asset.json';
import { GGS_PRICE_CONTACT, GGS_PRICE_PAGES, type PricePage } from '@/apps/ggs-price/price-list';

const PT = (n: number) => `calc(${n} * var(--pt))`;

function A4Page({ page }: { page: PricePage }) {
  const vars = {
    '--top': PT(page.top),
    '--w': PT(page.right - 60),
    '--row': PT(page.rowHeight),
    '--text': PT(page.textSize),
    '--title': PT(page.titleSize),
    '--label': PT(page.labelSize),
  } as CSSProperties;

  return (
    <div className="ggpr-page">
      <div className="ggpr-art" style={vars}>
        <img className="ggpr-bg" src={background.url} alt="" draggable={false} />

        <div className="ggpr-tagline">
          <strong>Grooming is better</strong>
          <em>your style, your crown</em>
        </div>

        <div className="ggpr-list">
          {page.sections.map((section, i) => (
            <section key={i} className={`ggpr-section${section.title ? ' has-title' : ''}`}>
              {section.title && <h2 className="ggpr-title">{section.title}</h2>}
              {section.subtitle && <h3 className="ggpr-subtitle">{section.subtitle}</h3>}
              {section.items.map((item) => (
                <div key={item.name} className={`ggpr-row${item.duration ? ' ggpr-row--bundle' : ''}`}>
                  <span>
                    <span className="ggpr-name">{item.name}</span>
                    {item.duration && (
                      <span className="ggpr-dur">
                        <Clock3 strokeWidth={1.6} aria-hidden />
                        {item.duration}
                      </span>
                    )}
                  </span>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </section>
          ))}
        </div>

        <span className="ggpr-dot" aria-hidden />
        <span className="ggpr-label">{page.label}</span>

        <span className="ggpr-footer-text pill ig">{GGS_PRICE_CONTACT.instagram}</span>
        <span className="ggpr-footer-text book">
          BOOKING<em>NOW</em>
        </span>
        <span className="ggpr-footer-text pill wa">{GGS_PRICE_CONTACT.whatsapp}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="ggpr-root">
      <header className="ggpr-toolbar">
        <div>
          <h1>GGS Price List · A4 Cetak</h1>
          <p>6 halaman · 210 × 297 mm · tanpa margin</p>
        </div>
        <div className="ggpr-actions">
          <a className="ggpr-btn ggpr-btn--ghost" href="/nempo-feed">
            Kembali
          </a>
          <a className="ggpr-btn" href="/ggs-price-list/GGS-Price-List-A4.pdf" download="GGS-Price-List-A4.pdf">
            <Download size={16} aria-hidden /> Download PDF
          </a>
          <button type="button" className="ggpr-btn" onClick={() => window.print()}>
            <Printer size={16} aria-hidden /> Cetak
          </button>
        </div>
      </header>

      <main className="ggpr-pages">
        {GGS_PRICE_PAGES.map((page, i) => (
          <div key={page.id} className="ggpr-page-wrap">
            <p className="ggpr-page-no">Halaman {i + 1}</p>
            <A4Page page={page} />
          </div>
        ))}
      </main>
    </div>
  );
}
