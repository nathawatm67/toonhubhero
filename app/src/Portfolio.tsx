import { Focus, HeartPulse, Layers, HelpCircle, Sparkles, ShieldCheck, Laptop, Zap, RotateCw, CheckSquare } from 'lucide-react';

const FEATURES = [
  {
    id: '01',
    title: 'วิเคราะห์ระดับความสุก / งอม',
    desc: 'ระบบสามารถคำนวณและประเมินระดับความสุก/งอมของทุเรียนได้อย่างแม่นยำ',
    input: 'รูปภาพลูกทุเรียน (เน้นสีผิว และหนาม)',
    output: 'ระดับความสด / สุก / งอม',
    icon: <Sparkles className="w-6 h-6 text-[#2E7D32]" />,
    badgeColor: '#E8F5E9',
    textColor: '#2E7D32',
  },
  {
    id: '02',
    title: 'วิเคราะห์จำนวนพูและขนาด',
    desc: 'ระบบช่วยวิเคราะห์โครงสร้างผลทุเรียนเพื่อประมาณการเนื้อด้านในและมิติ',
    input: 'รูปภาพลูกทุเรียนทุกด้าน',
    output: 'จำนวนพูและขนาดเส้นผ่านศูนย์กลาง',
    icon: <Layers className="w-6 h-6 text-[#1565C0]" />,
    badgeColor: '#E3F2FD',
    textColor: '#1565C0',
  },
  {
    id: '03',
    title: 'วิเคราะห์และระบุโรค',
    desc: 'ตรวจจับและวิเคราะห์สัญญาณความผิดปกติบนเปลือกหรือหนามทุเรียน',
    input: 'รูปภาพลูกทุเรียนที่มีอาการผิดปกติ',
    output: 'ชื่อโรค และรายละเอียดของโรคที่วิเคราะห์',
    icon: <HeartPulse className="w-6 h-6 text-[#C62828]" />,
    badgeColor: '#FFEBEE',
    textColor: '#C62828',
  },
  {
    id: '04',
    title: 'แนะนำวิธีการรักษา',
    desc: 'ระบบแนะนำแนวทางดูแลรักษาและควบคุมการแพร่กระจายของโรคที่พบ',
    input: 'ชื่อโรค/รายละเอียดของโรคที่วิเคราะห์',
    output: 'วิธีการรักษา/ป้องกัน และขั้นตอนการดูแล',
    icon: <HelpCircle className="w-6 h-6 text-[#F57F17]" />,
    badgeColor: '#FFF8E1',
    textColor: '#F57F17',
  },
  {
    id: '05',
    title: 'จำแนกพันธุ์ลูกทุเรียน',
    desc: 'วิเคราะห์ลักษณะเด่นเพื่อแยกประเภทสายพันธุ์ของทุเรียนได้ทันที',
    input: 'รูปภาพลูกทุเรียน (เน้นหนาม รูปร่าง และก้าน)',
    output: 'ระบุชื่อพันธุ์ทุเรียน (เช่น หมอนทอง, ชะนี)',
    icon: <Focus className="w-6 h-6 text-[#6A1B9A]" />,
    badgeColor: '#F3E5F5',
    textColor: '#6A1B9A',
  },
];

const GOALS = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#558B2F]" />,
    title: 'Reliability (น่าเชื่อถือ)',
    desc: 'ระบบแสดงผลการวิเคราะห์โรคและสายพันธุ์ทุเรียนที่มีความแม่นยำสูงและน่าเชื่อถือ',
  },
  {
    icon: <Laptop className="w-8 h-8 text-[#558B2F]" />,
    title: 'Usability (ใช้งานง่าย)',
    desc: 'รองรับการใช้งานได้หลากหลายอุปกรณ์ (Responsive Web & Mobile Support) เพื่อความสะดวกสูงสุด',
  },
  {
    icon: <Zap className="w-8 h-8 text-[#558B2F]" />,
    title: 'Efficiency (ประมวลผลรวดเร็ว)',
    desc: 'ประมวลผลการวิเคราะห์และแสดงผลลัพธ์จากภาพถ่ายได้อย่างรวดเร็วทันใจ',
  },
  {
    icon: <RotateCw className="w-8 h-8 text-[#558B2F]" />,
    title: 'Maintainability (อัปเดตง่าย)',
    desc: 'ระบบรองรับการอัปเดตข้อมูลสายพันธุ์และโรคใหม่ๆ ให้เป็นปัจจุบันอยู่เสมอ',
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-[#558B2F]" />,
    title: 'Compliance (ได้มาตรฐาน)',
    desc: 'ใช้วิธีจำแนกคุณภาพทุเรียนที่อ้างอิงตามเกณฑ์มาตรฐานของกรมวิชาการเกษตร',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-3 uppercase text-[#558B2F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, letterSpacing: '0.22em', fontWeight: 600 }}
        >
          Functional Requirements & System Goals
        </p>
        
        {/* Title */}
        <h2
          className="mb-6 uppercase leading-[0.95] text-[#1A1A1A]"
          style={{
            fontFamily: "'Kanit', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 56px)',
            letterSpacing: '-0.02em',
          }}
        >
          ฟังก์ชันหลักของระบบ (Features)
        </h2>
        <p className="max-w-2xl text-[#666666] mb-12" style={{ fontFamily: "'Kanit', sans-serif" }}>
          รายละเอียดสเปกการทำงานของระบบวิเคราะห์ทุเรียนอัจฉริยะ (Durian Analysis System) 
          ที่ครอบคลุมการประเมินผลแบบ End-to-End จากภาพถ่าย
        </p>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#1A1A1A] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#1A1A1A]"
              style={{
                backgroundColor: '#ffffff',
              }}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs font-black px-3 py-1 rounded-full border border-[#1A1A1A]"
                    style={{
                      backgroundColor: item.badgeColor,
                      color: '#1A1A1A',
                    }}
                  >
                    MODULE {item.id}
                  </span>
                  <div className="p-2 rounded-full border border-[#1A1A1A] bg-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                </div>

                {/* Title & Desc */}
                <h3
                  className="mb-3 font-bold text-xl text-[#1A1A1A]"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-6 text-sm text-[#555555] leading-relaxed"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Input / Output Specs */}
              <div className="border-t border-dashed border-[#1A1A1A]/20 pt-4 mt-auto space-y-2 text-xs">
                <div className="flex flex-col">
                  <span className="font-bold text-[#888888] uppercase" style={{ fontSize: '10px' }}>
                    📥 Input (ข้อมูลนำเข้า)
                  </span>
                  <span className="text-[#333333] font-medium" style={{ fontFamily: "'Kanit', sans-serif" }}>
                    {item.input}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#888888] uppercase" style={{ fontSize: '10px' }}>
                    📤 Output (ผลลัพธ์ที่ได้)
                  </span>
                  <span className="text-[#1A1A1A] font-semibold" style={{ fontFamily: "'Kanit', sans-serif" }}>
                    {item.output}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separator line */}
        <div className="my-20 border-t-2 border-[#1A1A1A] border-dashed" />

        {/* Goals & Non-functional Section */}
        <div>
          <h3
            className="text-[#1A1A1A] mb-4 font-bold text-3xl"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            เป้าหมายและประสิทธิภาพของระบบ
          </h3>
          <p className="max-w-2xl text-[#666666] mb-12" style={{ fontFamily: "'Kanit', sans-serif" }}>
            ข้อมูลเป้าหมายระบบ (System Goals) และคุณสมบัติที่จำเป็น (Non-functional Requirements) จากสเปกทางวิศวกรรม
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tech stack badge block */}
            <div className="bg-[#FAF7F2] p-8 rounded-3xl border-2 border-[#1A1A1A] flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xl text-[#1A1A1A] mb-4" style={{ fontFamily: "'Kanit', sans-serif" }}>
                  💻 แพลตฟอร์มการเข้าถึง
                </h4>
                <div className="space-y-4 text-sm text-[#4A4A4A]" style={{ fontFamily: "'Kanit', sans-serif" }}>
                  <div className="p-3 bg-white rounded-xl border border-[#1A1A1A]/10">
                    <strong className="text-[#1A1A1A] block mb-1">WEB APP</strong>
                    รองรับอุปกรณ์ทั่วไป เข้าถึงง่ายไม่ต้องติดตั้ง เหมาะสำหรับผู้ดูแลระบบ (Admin)
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#1A1A1A]/10">
                    <strong className="text-[#1A1A1A] block mb-1">MOBILE APP</strong>
                    ใช้งานได้รวดเร็ว ถ่ายภาพได้ทันทีผ่านกล้องมือถือ เหมาะสำหรับใช้งานในสวน
                  </div>
                </div>
              </div>
            </div>

            {/* Goals loop */}
            {GOALS.map((g, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-[#1A1A1A]/10 shadow-sm transition-all duration-300 hover:border-[#1A1A1A] hover:shadow-md"
              >
                <div className="mb-6 p-3 bg-[#F1F8E9] rounded-2xl w-fit border border-[#558B2F]/10">
                  {g.icon}
                </div>
                <h4 
                  className="font-bold text-lg text-[#1A1A1A] mb-2"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {g.title}
                </h4>
                <p 
                  className="text-sm text-[#555555] leading-relaxed"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}