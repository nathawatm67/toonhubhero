import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('#hero');
  const [open, setOpen] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  /* ── Scroll-spy ── */
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      {
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0,
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Click-outside to close ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const getLinkBg = (href: string) => {
    const isActive = active === href;
    const isHovered = hoveredLink === href;
    if (isActive) return '#1A1A1A';
    if (isHovered) return 'rgba(26,26,26,0.08)';
    return 'transparent';
  };

  const getLinkColor = (href: string) => (active === href ? '#ffffff' : '#1A1A1A');

  return (
    <div
      ref={navRef}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 10,
      }}
    >
      {/* ── Toggle Button ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setHoveredBtn(true)}
        onMouseLeave={() => setHoveredBtn(false)}
        aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'}
        style={{
          width: 46,
          height: 46,
          borderRadius: 9999,
          border: '1.5px solid #1A1A1A',
          background: open
            ? '#1A1A1A'
            : hoveredBtn
            ? 'rgba(26,26,26,0.08)'
            : 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.25s ease',
          flexShrink: 0,
        }}
      >
        {open ? (
          /* X icon */
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="2" y1="2" x2="14" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="2" x2="2" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          /* Hamburger icon */
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="0" y1="1" x2="18" y2="1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="7" x2="18" y2="7" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="13" x2="18" y2="13" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {/* ── Nav Dropdown ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: 2,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1.5px solid #1A1A1A',
          borderRadius: 20,
          padding: '5px 6px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          maxHeight: open ? 400 : 0,
          overflow: 'hidden',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.96)',
          transformOrigin: 'top right',
          transition:
            'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1)',
          pointerEvents: open ? 'auto' : 'none',
          minWidth: 140,
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            onMouseEnter={() => setHoveredLink(l.href)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: getLinkColor(l.href),
              backgroundColor: getLinkBg(l.href),
              borderRadius: 12,
              padding: '9px 18px',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              display: 'block',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
