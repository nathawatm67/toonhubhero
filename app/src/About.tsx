import { Rocket, Heart, Eye } from 'lucide-react';

const VALUES = [
  {
    icon: <Rocket className="w-6 h-6 text-[#E4645F]" />,
    title: 'นวัตกรรมล้ำหน้า (Innovation)',
    desc: 'เราไม่หยุดยั้งที่จะทดลองและผสานเทคโนโลยีปัญญาประดิษฐ์ (AI) ล่าสุด เพื่อปฏิวัติขีดความสามารถการใช้งานจริงในอุตสาหกรรมเกษตรกรรม',
  },
  {
    icon: <Heart className="w-6 h-6 text-[#E4645F]" />,
    title: 'เข้าใจและเข้าถึงผู้ใช้งาน (Empathy)',
    desc: 'ทุกความซับซ้อนของโค้ดและโมเดล AI ถูกออกแบบให้เรียบง่ายและเป็นมิตรที่สุด เพื่อตอบสนองพฤติกรรมการใช้งานจริงของเกษตรกรและชุมชน',
  },
  {
    icon: <Eye className="w-6 h-6 text-[#E4645F]" />,
    title: 'วิสัยทัศน์เพื่ออนาคต (Vision)',
    desc: 'เรามุ่งมั่นผลักดันมาตรฐานการเกษตรของไทยให้มีความโปร่งใส แม่นยำ และน่าเชื่อถือ เพื่อยกระดับความสามารถในการแข่งขันบนเวทีสากล',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FAF7F2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-3 uppercase text-[#E4645F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.22em', fontWeight: 600 }}
        >
          Who We Are
        </p>

        <div className="grid gap-12 lg:grid-cols-12 items-start mt-4">
          {/* Brand Intro Column */}
          <div className="lg:col-span-5">
            <h2
              className="mb-6 uppercase leading-[0.95] text-[#1A1A1A]"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(40px, 6vw, 76px)',
                letterSpacing: '-0.02em',
              }}
            >
              DO-WHO
              <span className="block text-[#E4645F]" style={{ fontFamily: "'Kanit', sans-serif", fontSize: '0.45em', fontWeight: 600, letterSpacing: '0' }}>
                นักสร้างสรรค์นวัตกรรม AI
              </span>
            </h2>
            
            <p
              className="text-[#4A4A4A] leading-relaxed mb-6"
              style={{ fontFamily: "'Kanit', sans-serif", fontSize: '16px' }}
            >
              <strong>Do-Who Group</strong> เป็นกลุ่มนักพัฒนาเทคโนโลยีสายเลือดใหม่ ที่รวมตัวกันเพื่อปลดล็อกขีดจำกัดด้วยพลังของปัญญาประดิษฐ์และซอฟต์แวร์สมัยใหม่
            </p>
            <p
              className="text-[#555555] leading-relaxed"
              style={{ fontFamily: "'Kanit', sans-serif", fontSize: '15px' }}
            >
              เราเชื่อว่าเทคโนโลยีที่ดีที่สุดไม่ใช่เทคโนโลยีที่ซับซ้อนที่สุด แต่คือเทคโนโลยีที่ทุกคนสามารถนำไปแก้ไขปัญหาของชีวิตประจำวันได้อย่างแท้จริง นั่นจึงเป็นจุดเริ่มต้นของโครงการ <strong>Durian Analysis System</strong> ที่เราได้นำองค์ความรู้ระดับสูงมารังสรรค์เป็นเครื่องมือที่จับต้องได้สำหรับเกษตรกรไทย
            </p>
          </div>

          {/* Core Values Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3
              className="text-xl font-bold text-[#1A1A1A] mb-8 pb-3 border-b border-[#1A1A1A]/10"
              style={{ fontFamily: "'Kanit', sans-serif" }}
            >
              ค่านิยมและปรัชญาการทำงานของเรา
            </h3>
            
            <div className="space-y-4">
              {VALUES.map((val, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#1A1A1A]">
                      {val.icon}
                    </div>
                    <h4 
                      className="font-bold text-lg text-[#1A1A1A]"
                      style={{ fontFamily: "'Kanit', sans-serif" }}
                    >
                      {val.title}
                    </h4>
                  </div>
                  <p 
                    className="text-sm text-[#555555] leading-relaxed pl-2"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
