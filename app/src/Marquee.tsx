import { Sparkles, Brain, Leaf, ShieldCheck, Target, Cpu } from 'lucide-react';

const ITEMS = [
  { text: 'Durian Analysis System', icon: <Sparkles className="w-4 h-4 text-[#B7EFC5]" /> },
  { text: 'Durian Analysis System', icon: <Brain className="w-4 h-4 text-[#F3E5F5]" /> },
  { text: 'Durian Analysis System', icon: <Leaf className="w-4 h-4 text-[#E8F5E9]" /> },
  { text: 'Durian Analysis System', icon: <Cpu className="w-4 h-4 text-[#E3F2FD]" /> },
  { text: 'Durian Analysis System', icon: <Target className="w-4 h-4 text-[#FFF8E1]" /> },
  { text: 'Durian Analysis System', icon: <ShieldCheck className="w-4 h-4 text-[#FFEBEE]" /> },
];

export default function Marquee() {
  // Multiply items once inside the moving container to cover wide screens
  const rowItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <section className="relative bg-[#111111] py-14 overflow-hidden border-y-2 border-[#1A1A1A]">
      {/* Skewed container for modern dynamic look */}
      <div className="rotate-[-1.5deg] scale-[1.02] flex flex-col gap-6 w-full">
        {/* Row 1: Left */}
        <div className="flex overflow-hidden select-none w-full relative">
          <div
            className="flex gap-4 py-1 animate-marquee-left hover:[animation-play-state:paused] cursor-pointer shrink-0 pr-4"
            style={{
              width: 'max-content',
            }}
          >
            {rowItems.map((item, idx) => (
              <div
                key={`left-1-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div
            className="flex gap-4 py-1 animate-marquee-left hover:[animation-play-state:paused] cursor-pointer shrink-0 pr-4"
            style={{
              width: 'max-content',
            }}
            aria-hidden="true"
          >
            {rowItems.map((item, idx) => (
              <div
                key={`left-2-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right */}
        <div className="flex overflow-hidden select-none w-full relative">
          <div
            className="flex gap-4 py-1 animate-marquee-right hover:[animation-play-state:paused] cursor-pointer shrink-0 pr-4"
            style={{
              width: 'max-content',
            }}
          >
            {rowItems.map((item, idx) => (
              <div
                key={`right-1-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div
            className="flex gap-4 py-1 animate-marquee-right hover:[animation-play-state:paused] cursor-pointer shrink-0 pr-4"
            style={{
              width: 'max-content',
            }}
            aria-hidden="true"
          >
            {rowItems.map((item, idx) => (
              <div
                key={`right-2-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 backdrop-blur-md"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Elegant Fade Out Overlays on the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none z-10" />
    </section>
  );
}
