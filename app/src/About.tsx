const FEATURES: { title: string; desc: string }[] = [
  // { title: 'ออกแบบจากภาพถ่ายจริง', desc: 'ทุกฟิกเกอร์ปั้นขึ้นจากใบหน้าและสไตล์การแต่งตัวของคุณโดยเฉพาะ' },
  // { title: 'งานคราฟต์ทำมือ', desc: 'ทีมงานลงสีและเก็บรายละเอียดทุกชิ้นด้วยมือ ก่อนแพ็กส่งถึงคุณ' },
  // { title: 'จัดส่งทั่วประเทศ', desc: 'สั่งออนไลน์ได้ทุกที่ พร้อมบรรจุภัณฑ์ที่ปกป้องชิ้นงานตลอดการเดินทาง' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FAF7F2] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-3 uppercase text-[#E4645F]"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 68, letterSpacing: '0.22em', fontWeight: 600 }}
        >
          About
        </p>
        <h2
          className="mb-6 uppercase leading-[0.95] text-[#1A1A1A]"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            letterSpacing: '-0.02em',
          }}
        >
          เรื่องราวของ Company DO WHO
        </h2>
        <p
          className="max-w-2xl text-[#4A4A4A]"
          style={{ fontFamily: "'Kanit', sans-serif", fontSize: 'clamp(16px, 1.6vw, 19px)', lineHeight: 1.8 }}
        >
          <br />
          ยังไม่มี
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3
                className="mb-2 text-[#1A1A1A]"
                style={{ fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: 18 }}
              >
                {f.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: '#6B6B6B' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
