const MENU_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
];

function ColumnLabel({ children }: { children: string }) {
  return (
    <p
      className="mb-4 uppercase text-[#E4645F]"
      style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.18em', fontWeight: 600 }}
    >
      {children}
    </p>
  );
}

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="bg-[#111111] px-6 pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        {/* CTA row */}
        <div className="mb-16 flex flex-col gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end md:justify-between">
          <h2
            className="max-w-xl uppercase leading-[0.95] text-white"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to start a project
            <br />
            with us?
          </h2>
          <a
            href="mailto:nathawatm67@nu.ac.th"
            className="shrink-0 rounded-full bg-[#B7EFC5] px-8 py-4 text-center no-underline transition-transform duration-200 hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, color: '#1A1A1A' }}
          >
            Contact Us
          </a>
        </div>

        {/* Columns */}
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <ColumnLabel>Contact</ColumnLabel>
            <div
              className="flex flex-col gap-2 text-white/80"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}
            >
              <a href="tel:0647461910" className="no-underline transition-colors hover:text-white">
                064-746-1910
              </a>
              <a
                href="https://line.me/ti/p/~mayoonnatthawat"
                target="_blank"
                rel="noreferrer"
                className="no-underline transition-colors hover:text-white"
              >
                Line: mayoonnatthawat
              </a>
              <a
                href="mailto:nathawatm67@nu.ac.th"
                className="no-underline transition-colors hover:text-white"
              >
                nathawatm67@nu.ac.th
              </a>
            </div>
          </div>

          <div>
            <ColumnLabel>Menu</ColumnLabel>
            <div
              className="flex flex-col gap-2 text-white/80"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}
            >
              {MENU_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="no-underline transition-colors hover:text-white">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnLabel>Company</ColumnLabel>
            <p
              className="mb-2 text-white"
              style={{ fontFamily: "'Kanit', sans-serif", fontSize: 16, fontWeight: 700 }}
            >
              Company DO WHO
            </p>
            <p className="text-white/60" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              {/* ผู้เชี่ยวชาญด้านฟิกเกอร์การ์ตูน 3 มิติ ทำมือทุกชิ้นจากภาพถ่ายจริงของคุณ */}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-white/40 sm:flex-row">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}>© {year} Company DO WHO</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12 }}>Made with care in Thailand</p>
        </div>
      </div>
    </section>
  );
}
