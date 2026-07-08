import { CHARACTERS } from './characters';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-3 uppercase text-[#E4645F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.22em', fontWeight: 600 }}
        >
          Portfolio
        </p>
        <h2
          className="mb-14 uppercase leading-[0.95] text-[#1A1A1A]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            letterSpacing: '-0.02em',
          }}
        >
          ผลงานของเรา
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
          {CHARACTERS.map((c) => (
            <div
              key={c.id}
              className="aspect-[3/4] w-full rounded-[24px]"
              style={{ backgroundColor: c.panel }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
