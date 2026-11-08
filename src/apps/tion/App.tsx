import { useRef, useState } from 'react';
import { toCanvas } from 'html-to-image';
import { Download } from 'lucide-react';
import productBackground from '@/assets/tion/nasution-retro-product-background-ai.png.asset.json';
import brandWordmarkAsset from '@/assets/tion/nasution-boy-retro-logo-headline-yellow-v2.png.asset.json';
import tionAsset12 from '@/assets/tion/avocado-milk-user-trim.png.asset.json';
import tionAsset13 from '@/assets/tion/kopi-kenangan-mantan-user-trim.png.asset.json';
import tionAsset14 from '@/assets/tion/pistachio-user-trim.png.asset.json';

const backgroundImage = productBackground.url;
const brandWordmark = brandWordmarkAsset.url;

const drinkDetails = [
  {
    name: 'Avocado Milk',
    nameFamily: 'Avocado',
    nameVariant: 'Milk',
    price: 'Rp21.000',
    priceLabel: '21K',
    image: tionAsset12.url,
    center: '22%',
    cupTop: '58.5%',
    cupWidth: '18%',
    cupHeight: '21%',
    captionTop: '83%',
    captionWidth: '22%',
    ticketTop: '52%',
    ticketWidth: '18.5%',
    strawTop: '49%',
    strawHeight: '14%',
    strawWidth: '2%',
    strawStyle: 'avocado',
    zIndex: 12,
  },
  {
    name: 'Kopi Kenangan Mantan',
    nameFamily: 'Kopi Kenangan',
    nameVariant: 'Mantan',
    price: 'Rp18.000',
    priceLabel: '18K',
    image: tionAsset13.url,
    center: '50%',
    cupTop: '63%',
    cupWidth: '21%',
    cupHeight: '25%',
    captionTop: '91.5%',
    captionWidth: '24%',
    ticketTop: '58%',
    ticketWidth: '20.5%',
    strawTop: '55%',
    strawHeight: '15%',
    strawWidth: '2.3%',
    strawStyle: 'coffee',
    zIndex: 15,
  },
  {
    name: 'Pistachio Aren Latte',
    nameFamily: 'Pistachio Aren',
    nameVariant: 'Latte',
    price: 'Rp15.000',
    priceLabel: '15K',
    image: tionAsset14.url,
    center: '78%',
    cupTop: '58.5%',
    cupWidth: '18%',
    cupHeight: '21%',
    captionTop: '83%',
    captionWidth: '22%',
    ticketTop: '52%',
    ticketWidth: '18.5%',
    strawTop: '49%',
    strawHeight: '14%',
    strawWidth: '2%',
    strawStyle: 'pistachio',
    zIndex: 12,
  },
];

const glyphSizePattern = [0.9, 1.08, 0.96, 1.14, 0.92, 1.04, 1.12, 0.94];
const glyphTiltPattern = [-2, 1, -1, 2, -2, 0, 1, -1];
const glyphLiftPattern = [-0.12, 0.08, -0.04, 0.14, -0.08, 0.04, 0.12, -0.1];

function PlayfulTypeLine({
  text,
  baseSize,
  color,
  overlap = false,
}: {
  text: string;
  baseSize: number;
  color: string;
  overlap?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`relative z-10 flex items-center justify-center whitespace-nowrap${overlap ? ' -mt-[1.35cqi]' : ''}`}
      style={{ color }}
    >
      {Array.from(text).map((character, index) => {
        if (character === ' ') {
          return (
            <span
              key={`${index}-space`}
              aria-hidden="true"
              style={{
                display: 'inline-block',
                flex: '0 0 auto',
                fontSize: `${baseSize}cqi`,
                width: '0.28em',
              }}
            >
              &nbsp;
            </span>
          );
        }

        const patternIndex = index % glyphSizePattern.length;

        return (
          <span
            key={`${character}-${index}`}
            style={{
              display: 'inline-block',
              flex: '0 0 auto',
              fontSize: `${baseSize * glyphSizePattern[patternIndex]}cqi`,
              marginInline: '-0.06em',
              position: 'relative',
              transform: `translateY(${glyphLiftPattern[patternIndex]}cqi) rotate(${glyphTiltPattern[patternIndex]}deg)`,
              zIndex: index % 3 === 0 ? 2 : 1,
            }}
          >
            {character}
          </span>
        );
      })}
    </span>
  );
}

function FeedPage() {
  const artworkRef = useRef<HTMLElement | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  const handleDownload = async () => {
    const artwork = artworkRef.current;
    if (!artwork || isDownloading) return;

    setIsDownloading(true);
    setDownloadError('');

    try {
      await document.fonts.ready;
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      });
      await Promise.all(
        Array.from(artwork.querySelectorAll('img')).map(async (image) => {
          if (!image.complete) {
            await new Promise<void>((resolve, reject) => {
              image.addEventListener('load', () => resolve(), { once: true });
              image.addEventListener(
                'error',
                () => reject(new Error(`Gagal memuat gambar: ${image.currentSrc || image.src}`)),
                { once: true },
              );
            });
          }

          if (image.naturalWidth === 0) {
            throw new Error(`Gagal memuat gambar: ${image.currentSrc || image.src}`);
          }

          await image.decode();
        }),
      );

      const renderedCanvas = await toCanvas(artwork, {
        cacheBust: true,
        pixelRatio: 3,
        canvasWidth: 1080,
        canvasHeight: 1350,
        style: { boxShadow: 'none' },
      });
      const downloadLink = document.createElement('a');
      downloadLink.download = 'nasution-boy-dapur-nenek-promo.png';
      downloadLink.href = renderedCanvas.toDataURL('image/png');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
    } catch (error) {
      console.error('Gagal membuat PNG Nasution Boy Explore Jawa Barat:', error);
      setDownloadError('PNG belum bisa dibuat. Coba unduh lagi.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#e9dfca] px-6 py-4 max-[640px]:px-0 max-[640px]:py-0">
      <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center max-[640px]:min-h-screen">
        <header className="mb-3 flex w-full max-w-[720px] items-center justify-end gap-2 px-2 max-[640px]:flex-col max-[640px]:items-center max-[640px]:pt-3 sm:px-0">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            aria-busy={isDownloading}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#28483a] px-3.5 py-2 text-[11px] font-black text-white shadow-[0_6px_16px_rgba(56,42,24,0.18)] hover:bg-[#365b49] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c58152] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 max-[640px]:w-full max-[640px]:max-w-[220px] max-[640px]:justify-center"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            {isDownloading ? 'Menyiapkan PNG…' : 'Download PNG'}
          </button>
        </header>

        {downloadError && (
          <p
            role="alert"
            className="mb-2 w-full max-w-[420px] px-4 text-[11px] font-semibold text-red-700 sm:px-0"
          >
            {downloadError}
          </p>
        )}

        <article
          ref={artworkRef}
          aria-label="Poster promo Nasution Boy: tiga minuman dengan harga pada sedotan."
          className="relative isolate aspect-[4/5] h-auto w-full max-w-[420px] overflow-hidden text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] min-[641px]:h-[min(125vw,calc(100vh-5rem))] min-[641px]:w-auto min-[641px]:max-w-full"
          style={{
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            containerType: 'inline-size',
            background: `linear-gradient(180deg, rgba(28,18,10,0.56) 0%, rgba(28,18,10,0.38) 24%, rgba(28,18,10,0.08) 43%, rgba(77,49,29,0.02) 56%, rgba(77,49,29,0.1) 100%), url("${backgroundImage}") center / cover no-repeat`,
          }}
        >
          <header className="absolute inset-x-0 top-[5.5%] z-30 flex flex-col items-center text-center">
            <img
              src={brandWordmark}
              alt="Nasution Boy"
              className="h-auto w-[18cqi] object-contain drop-shadow-[0_0_3px_rgba(255,196,0,0.9)] drop-shadow-[0_2px_5px_rgba(12,12,8,0.65)]"
              draggable={false}
            />
            <h1
              aria-label="Beli Kopi Kenangan Lebih Murah"
              className="mt-[4cqi] flex flex-col items-center leading-none [text-shadow:0_3px_7px_rgba(18,10,5,0.98)]"
              style={{ fontFamily: "'Bowlby One SC', sans-serif" }}
            >
              <PlayfulTypeLine text="Beli Kopi Kenangan" baseSize={6.1} color="#fff3d6" />
              <PlayfulTypeLine text="Lebih Murah" baseSize={7.2} color="#ffd447" overlap />
            </h1>
            <p className="mt-[1.6cqi] rounded-full border-[0.35cqi] border-[#ffd447] bg-[#073c37] px-[3cqi] py-[1.25cqi] text-[2.3cqi] font-extrabold uppercase tracking-[0.08em] text-[#fff1cc] shadow-[0_4px_12px_rgba(18,10,5,0.48)]">
              Pakai Voucher TikTok
            </p>
            <p className="mt-[0.8cqi] text-[2cqi] font-extrabold uppercase tracking-[0.13em] text-[#fff1cc] [text-shadow:0_2px_5px_rgba(18,10,5,0.98)]">
              ↓ Klik lokasi di bawah
            </p>
          </header>

          <div className="absolute inset-0">
            <div aria-hidden="true" className="absolute inset-0 z-20">
              {drinkDetails.map((drink) => (
                <span
                  key={`${drink.name}-straw`}
                  className={`drink-straw drink-straw--${drink.strawStyle}`}
                  style={{
                    left: drink.center,
                    top: drink.strawTop,
                    height: drink.strawHeight,
                    width: drink.strawWidth,
                  }}
                />
              ))}
            </div>

            {drinkDetails.map((drink) => (
              <img
                key={`${drink.name}-image`}
                src={drink.image}
                alt={drink.name}
                className="absolute -translate-x-1/2 object-contain drop-shadow-[0_12px_10px_rgba(20,18,11,0.3)]"
                style={{
                  left: drink.center,
                  top: drink.cupTop,
                  width: drink.cupWidth,
                  height: drink.cupHeight,
                  zIndex: drink.zIndex,
                }}
                draggable={false}
              />
            ))}

            <aside aria-label="Harga minuman" className="absolute inset-0 z-30">
              {drinkDetails.map((drink) => (
                <div
                  key={`${drink.name}-price`}
                  className="drink-ticket"
                  style={{
                    left: drink.center,
                    top: drink.ticketTop,
                    width: drink.ticketWidth,
                  }}
                  role="img"
                  aria-label={`${drink.name}, ${drink.price}`}
                >
                  <span className="drink-ticket__currency" aria-hidden="true">
                    RP
                  </span>
                  <span className="drink-ticket__price" aria-hidden="true">
                    {drink.priceLabel}
                  </span>
                </div>
              ))}
            </aside>

            <section aria-label="Nama minuman" className="absolute inset-0 z-30">
              {drinkDetails.map((drink) => (
                <div
                  key={`${drink.name}-description`}
                  className="drink-caption"
                  style={{
                    left: drink.center,
                    top: drink.captionTop,
                    width: drink.captionWidth,
                  }}
                  aria-label={drink.name}
                >
                  <span className="drink-caption__family">{drink.nameFamily}</span>
                  <strong className="drink-caption__name">{drink.nameVariant}</strong>
                </div>
              ))}
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}

function App() {
  return <FeedPage />;
}

export default App;
