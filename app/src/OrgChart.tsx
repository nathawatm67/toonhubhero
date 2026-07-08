import { CHARACTERS } from './characters';

const ceo = CHARACTERS.find((c) => c.role === 'CEO')!;
const deputy = CHARACTERS.find((c) => c.role === 'CTO')!;
const devs = CHARACTERS.filter((c) => c.role === 'Dev');

function OrgCard({ c }: { c: (typeof CHARACTERS)[number] }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="mb-3 h-16 w-16 overflow-hidden rounded-full ring-4 ring-white shadow-md sm:h-24 sm:w-24"
        style={{ backgroundColor: c.panel }}
      >
        <img
          src={c.photo}
          alt={c.name}
          className="h-full w-full object-cover object-top"
          draggable={false}
        />
      </div>
      <p
        className="text-center leading-tight text-[#1A1A1A]"
        style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 15 }}
      >
        {c.name}
      </p>
      <span
        className="mt-1 rounded-full px-3 py-1 uppercase text-white"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          letterSpacing: '0.08em',
          fontWeight: 600,
          backgroundColor: c.bg,
        }}
      >
        {c.role}
      </span>
    </div>
  );
}

export default function OrgChart() {
  return (
    <section id="team" className="bg-[#FAF7F2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p
          className="mb-3 uppercase text-[#E4645F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.22em', fontWeight: 600 }}
        >
          Team
        </p>
        <h2
          className="mb-16 uppercase leading-[0.95] text-[#1A1A1A]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            letterSpacing: '-0.02em',
          }}
        >
          แผนผังองค์กร
        </h2>

        <div className="flex flex-col items-center">
          <OrgCard c={ceo} />
          <div className="h-10 w-px bg-[#D8D2C7]" />
          <OrgCard c={deputy} />
          <div className="h-10 w-px bg-[#D8D2C7]" />

          <div className="relative w-full max-w-2xl pt-10">
            <div className="absolute left-[12.5%] right-[12.5%] top-0 h-px bg-[#D8D2C7]" />
            <div className="grid grid-cols-4 gap-x-2 gap-y-12 sm:gap-x-6">
              {devs.map((d) => (
                <div key={d.id} className="relative flex flex-col items-center">
                  <div className="absolute -top-10 left-1/2 h-10 w-px -translate-x-1/2 bg-[#D8D2C7]" />
                  <OrgCard c={d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
