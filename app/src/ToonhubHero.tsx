import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CHARACTERS } from './characters';

type Role = 'center' | 'left' | 'right' | 'back';

const IMAGES = CHARACTERS;

const EASE = 'cubic-bezier(0.4,0,0.2,1)';

const GRAIN_URL =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/></svg>";

function roleStyle(role: Role, isMobile: boolean): CSSProperties {
  const base: CSSProperties = {
    position: 'absolute',
    left: '50%',
    aspectRatio: '0.6 / 1',
    transition: `transform 700ms ${EASE}, filter 700ms ${EASE}, opacity 700ms ${EASE}`,
    willChange: 'transform, filter, opacity',
  };
  switch (role) {
    case 'center':
      return {
        ...base,
        transform: `translateX(-50%) scale(${isMobile ? 1 : 1.25})`,
        filter: 'none',
        opacity: 1,
        zIndex: 20,
        height: isMobile ? '50%' : '72%',
        bottom: isMobile ? '22%' : '6%',
      };
    case 'left':
      return {
        ...base,
        transform: `translateX(calc(-50% + ${isMobile ? -30 : -20}vw)) scale(1)`,
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        height: isMobile ? '14%' : '22%',
        bottom: isMobile ? '32%' : '14%',
      };
    case 'right':
      return {
        ...base,
        transform: `translateX(calc(-50% + ${isMobile ? 30 : 20}vw)) scale(1)`,
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        height: isMobile ? '14%' : '22%',
        bottom: isMobile ? '32%' : '14%',
      };
    case 'back':
      return {
        ...base,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(4px)',
        opacity: 1,
        zIndex: 5,
        height: isMobile ? '11%' : '17%',
        bottom: isMobile ? '32%' : '14%',
      };
  }
}

export default function ToonhubHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 640,
  );
  const releaseTimeout = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);

    IMAGES.forEach((item) => {
      const preload = new Image();
      preload.src = item.src;
    });

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(
    () => () => {
      if (releaseTimeout.current) window.clearTimeout(releaseTimeout.current);
    },
    [],
  );

  const count = IMAGES.length;

  const navigate = (dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((cur) => (dir === 'next' ? (cur + 1) % count : (cur - 1 + count) % count));
    releaseTimeout.current = window.setTimeout(() => setIsAnimating(false), 700);
  };

  const active = IMAGES[activeIndex];
  const roles: Record<number, Role> = {};
  for (let i = 0; i < count; i++) roles[i] = 'back';
  roles[activeIndex] = 'center';
  roles[(activeIndex + count - 1) % count] = 'left';
  roles[(activeIndex + 1) % count] = 'right';

  return (
    <div
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: active.bg,
        transition: `background-color 650ms ${EASE}`,
      }}
    >
      {/* Top-left brand */}
      <div className="absolute top-6 left-6 z-[60]">
        <span
          className="uppercase text-white/90"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.18em' }}
        >
          Company DO WHO
        </span>
      </div>

      {/* Center accent panel */}
      <div
        aria-hidden="true"
        className="absolute rounded-[28px]"
        style={{
          left: '50%',
          top: '8%',
          transform: 'translateX(-50%)',
          width: 'min(46%, 780px)',
          height: '78%',
          backgroundColor: active.panel,
          transition: `background-color 650ms ${EASE}`,
          zIndex: 1,
        }}
      />

      {/* Giant ghost text */}
      <div
        className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
        style={{ top: '18%', zIndex: 2 }}
      >
        <span
          className="uppercase whitespace-nowrap tracking-[-0.02em]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(90px, 28vw, 380px)',
            fontWeight: 200,
            color: '#ffffff',
            opacity: 0.22,
            lineHeight: 1,
          }}
        >
          DO WHO
        </span>
      </div>

      {/* Carousel */}
      <div className="absolute inset-0 z-[3]">
        {IMAGES.map((item, i) => (
          <div key={item.src} style={roleStyle(roles[i], isMobile)}>
            <img
              src={item.src}
              draggable={false}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'bottom center',
              }}
            />
          </div>
        ))}
      </div>

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[50]"
        style={{
          opacity: 0.4,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          backgroundImage: `url("${GRAIN_URL}")`,
        }}
      />

      {/* Bottom-left copy + nav */}
      <div className="absolute bottom-6 left-6 z-[60] max-w-[340px] text-white">
        <p
          className="mb-1 uppercase opacity-70"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.18em' }}
        >
          {active.id}
        </p>
        <p
          className="mb-[18px] leading-tight opacity-95"
          style={{
            fontFamily: "'Kanit', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(20px, 2.6vw, 30px)',
            textShadow: '0 2px 12px rgba(0,0,0,0.25)',
          }}
        >
          {active.name}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('prev')}
            aria-label="Previous"
            className="w-[52px] h-[52px] rounded-full bg-transparent border-2 border-white text-white flex items-center justify-center cursor-pointer transition-[transform,background-color] duration-150 hover:scale-[1.08] hover:bg-white/[0.12]"
          >
            <ArrowLeft size={22} strokeWidth={2.25} />
          </button>
          <button
            type="button"
            onClick={() => navigate('next')}
            aria-label="Next"
            className="w-[52px] h-[52px] rounded-full bg-transparent border-2 border-white text-white flex items-center justify-center cursor-pointer transition-[transform,background-color] duration-150 hover:scale-[1.08] hover:bg-white/[0.12]"
          >
            <ArrowRight size={22} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
