import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import hero from "@/assets/khoi-hero.jpg";
import hillside from "@/assets/project-hillside.jpg";
import lumen from "@/assets/project-lumen.jpg";
import terra from "@/assets/project-terra.jpg";
import anVilla from "@/assets/project-an.jpg";
import team from "@/assets/khoi-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "KHỐI Studio | Kiến trúc & Nội thất cao cấp" },
    { name: "description", content: "KHỐI kiến tạo những không gian sống tinh tế qua kiến trúc, nội thất và quản lý thi công trọn gói." },
    { property: "og:title", content: "KHỐI Studio | Kiến trúc & Nội thất cao cấp" },
    { property: "og:description", content: "Kiến tạo không gian sống bằng ánh sáng, tỷ lệ và chất liệu." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const services = [
  ["01", "Kiến trúc tổng thể", "Thiết kế biệt thự, nhà ở và không gian nghỉ dưỡng từ ý tưởng đến hồ sơ thi công."],
  ["02", "Nội thất cao cấp", "Tuyển chọn vật liệu, ánh sáng và đồ nội thất để tạo nên một ngôn ngữ sống riêng."],
  ["03", "Quản lý thi công", "Đồng hành trọn gói, kiểm soát chất lượng để công trình hoàn thiện đúng tinh thần thiết kế."],
];

const projects = [
  { image: hillside, title: "Nhà Hillside", meta: "2024 — Đà Lạt", ratio: "aspect-[4/3]", wrap: "md:col-span-7" },
  { image: lumen, title: "Căn hộ Lumen", meta: "2023 — Hà Nội", ratio: "aspect-[4/5]", wrap: "md:col-span-5 md:mt-16" },
  { image: terra, title: "Không gian Terra", meta: "2024 — TP.HCM", ratio: "aspect-[4/5]", wrap: "md:col-span-5 md:-mt-8" },
  { image: anVilla, title: "Biệt thự An", meta: "2022 — Nha Trang", ratio: "aspect-[4/3]", wrap: "md:col-span-7 md:mt-8" },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Index() {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className="min-h-screen bg-background text-foreground font-body antialiased">
    <header className="sticky top-0 z-50 border-b border-border/15 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-2xl leading-none">KHỐI<span className="text-primary">.</span></a>
        <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#ve">Về studio</a><a className="transition-colors hover:text-foreground" href="#dichvu">Dịch vụ</a><a className="transition-colors hover:text-foreground" href="#duan">Dự án</a><a className="transition-colors hover:text-foreground" href="#quytrinh">Quy trình</a>
        </nav>
        <a href="#tuvan" className="rounded-full bg-primary px-5 py-3 font-mono text-[11px] uppercase text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-ink">Đặt tư vấn</a>
      </div>
    </header>

    <section id="top" className="mx-auto max-w-[1440px] px-5 pt-12 md:px-10 md:pt-20">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 flex flex-col justify-between lg:col-span-5">
          <div className="animate-rise"><p className="mb-6 font-mono text-[11px] uppercase text-muted-foreground">(a) — Studio kiến trúc & nội thất</p><h1 className="font-display text-[clamp(4rem,9vw,8rem)] uppercase leading-[.82]"><span className="block">Đi vào</span><span className="block text-primary">không gian</span><span className="block">bằng ánh sáng</span></h1></div>
          <div className="mt-10 animate-rise [animation-delay:150ms]"><p className="max-w-[42ch] text-lg leading-relaxed text-foreground/75">Chúng tôi thiết kế những ngôi nhà như một cuộc dạo bước chậm — nơi mỗi góc tường, mỗi vật liệu đều được tuyển chọn kỹ lưỡng.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#tuvan" className="rounded-full bg-ink px-7 py-4 font-mono text-[11px] uppercase text-background transition-all hover:-translate-y-1 hover:bg-primary">Bắt đầu dự án</a><a href="#duan" className="rounded-full border border-border/30 px-7 py-4 font-mono text-[11px] uppercase transition-all hover:-translate-y-1 hover:border-foreground">Xem dự án</a></div></div>
        </div>
        <div className="col-span-12 lg:col-span-7"><div className="image-reveal animate-rise aspect-[4/5] rounded-lg [animation-delay:250ms]"><img src={hero} alt="Không gian phòng khách cao cấp của KHỐI Studio" width={1280} height={1408} fetchPriority="high" className="h-full w-full object-cover" /></div></div>
      </div>
    </section>

    <section id="ve" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><Reveal className="grid grid-cols-12 items-center gap-8"><div className="col-span-12 lg:col-span-4"><p className="mb-4 font-mono text-[11px] uppercase text-muted-foreground">(b) — Về studio</p><h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[.9]">Một cuộc dạo bước được tuyển chọn</h2></div><div className="col-span-12 lg:col-span-7 lg:col-start-6"><p className="max-w-[40ch] text-xl leading-snug md:text-2xl">KHỐI thành lập năm 2016, tập trung vào kiến trúc và nội thất cao cấp. Chúng tôi tin không gian tốt không ồn ào — nó tự nói lên qua tỷ lệ, ánh sáng và chất liệu.</p><div className="mt-10 grid grid-cols-3 gap-4">{[["120+","Dự án hoàn thành"],["09","Giải thưởng"],["10","Năm kinh nghiệm"]].map(([n,l])=><div key={l}><p className="font-display text-4xl text-primary">{n}</p><p className="mt-2 font-mono text-[10px] uppercase text-muted-foreground">{l}</p></div>)}</div></div></Reveal></section>

    <section id="dichvu" className="bg-ink text-background"><div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><Reveal><p className="mb-4 font-mono text-[11px] uppercase text-background/50">(c) — Dịch vụ</p><h2 className="mb-14 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[.9]">Những gì chúng tôi làm</h2></Reveal><div className="grid gap-px bg-background/15 md:grid-cols-3">{services.map(([n,t,d],i)=><Reveal key={t} className="h-full bg-ink p-8 transition-colors hover:bg-background hover:text-foreground" ><p className="mb-10 font-mono text-[11px] text-primary">{n}</p><h3 className="mb-3 font-display text-2xl uppercase">{t}</h3><p className="leading-relaxed opacity-70">{d}</p><span className="mt-10 block text-2xl text-primary">↗</span></Reveal>)}</div></div></section>

    <section id="duan" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><Reveal className="mb-14 flex items-end justify-between"><div><p className="mb-4 font-mono text-[11px] uppercase text-muted-foreground">(d) — Dự án tiêu biểu</p><h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[.9]">Không gian đã hoàn thành</h2></div><span className="hidden font-mono text-[11px] uppercase text-muted-foreground md:block">Cuộn để khám phá ↓</span></Reveal><div className="grid grid-cols-12 gap-7">{projects.map((p)=><Reveal key={p.title} className={`col-span-12 ${p.wrap}`}><div className={`image-reveal ${p.ratio} rounded-lg bg-sand`}><img src={p.image} alt={p.title} width={1280} height={900} loading="lazy" className="h-full w-full object-cover" /></div><div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="font-display text-xl uppercase">{p.title}</h3><span className="font-mono text-[10px] text-muted-foreground">{p.meta}</span></div></Reveal>)}</div></section>

    <section id="quytrinh" className="border-y border-border/15"><div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><Reveal><p className="mb-4 font-mono text-[11px] uppercase text-muted-foreground">(e) — Quy trình</p><h2 className="mb-14 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[.9]">Bốn bước, một hành trình</h2></Reveal><div className="grid gap-8 md:grid-cols-4">{[["01","Lắng nghe","Hiểu cách bạn sống và câu chuyện không gian cần kể."],["02","Concept","Xây dựng ý tưởng, tỷ lệ và ngôn ngữ vật liệu."],["03","Thiết kế","Hoàn thiện phối cảnh, bản vẽ và bảng vật liệu."],["04","Hiện thực","Giám sát thi công và bàn giao không gian."]].map(([n,t,d],i)=><Reveal key={t}><span className="block h-px w-full origin-left bg-primary"></span><p className="mt-5 font-mono text-[11px] text-primary">{n}</p><h3 className="mt-2 font-display text-xl uppercase">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></Reveal>)}</div></div></section>

    <section id="doingu" className="bg-sand"><div className="mx-auto grid max-w-[1440px] grid-cols-12 items-center gap-8 px-5 py-24 md:px-10 md:py-32"><Reveal className="col-span-12 lg:col-span-5"><p className="mb-4 font-mono text-[11px] uppercase text-muted-foreground">(f) — Đội ngũ</p><h2 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[.9]">Những người đứng sau mỗi đường nét</h2><p className="mt-7 max-w-[42ch] leading-relaxed text-foreground/70">Một tập thể kiến trúc sư, nhà thiết kế và quản lý dự án cùng chia sẻ niềm tin rằng vẻ đẹp bền vững bắt đầu từ sự lắng nghe.</p></Reveal><Reveal className="image-reveal col-span-12 aspect-[4/3] rounded-lg lg:col-span-6 lg:col-start-7"><img src={team} alt="Đội ngũ KHỐI Studio" width={1280} height={912} loading="lazy" className="h-full w-full object-cover" /></Reveal></div></section>

    <section className="overflow-hidden border-y border-border/15 py-8"><div className="marquee-track flex w-max gap-16 font-display text-4xl uppercase text-foreground/35"><span>Meridian · Atlas · Northwind · An Cường · Vicostone · Kohler · Meridian · Atlas · Northwind · An Cường · Vicostone · Kohler ·</span><span aria-hidden="true">Meridian · Atlas · Northwind · An Cường · Vicostone · Kohler · Meridian · Atlas · Northwind · An Cường · Vicostone · Kohler ·</span></div></section>

    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32"><Reveal><p className="mb-10 font-mono text-[11px] uppercase text-muted-foreground">(g) — Khách hàng nói gì</p><div className="grid grid-cols-12 gap-8"><blockquote className="col-span-12 lg:col-span-8"><p className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.03]">“KHỐI không chỉ thiết kế ngôi nhà — họ đã hiểu cách chúng tôi muốn sống trong đó.”</p><footer className="mt-8 font-mono text-[11px] uppercase text-muted-foreground">— Anh Minh & Chị Lan, chủ nhân Nhà Hillside</footer></blockquote><div className="col-span-12 border-l border-border/20 pl-8 lg:col-span-4"><p className="text-lg leading-relaxed">“Từng chất liệu đều có lý do xuất hiện. Thành quả sau cùng còn đẹp và giàu cảm xúc hơn bản vẽ.”</p><p className="mt-5 font-mono text-[10px] uppercase text-muted-foreground">— Chị Hoài An, Căn hộ Lumen</p></div></div></Reveal></section>

    <section id="tuvan" className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-5 py-24 md:px-10 md:py-32"><Reveal className="col-span-12 lg:col-span-6"><p className="mb-6 font-mono text-[11px] uppercase text-primary-foreground/70">(h) — Đăng ký tư vấn</p><h2 className="font-display text-[clamp(3rem,7vw,6rem)] uppercase leading-[.84]">Bắt đầu<br/>cuộc dạo bước<br/>của bạn</h2><p className="mt-8 max-w-[38ch] text-primary-foreground/80">Chia sẻ ý tưởng, chúng tôi sẽ liên hệ trong vòng 24 giờ để lên lịch trao đổi đầu tiên.</p></Reveal><form onSubmit={(e)=>{e.preventDefault();setSent(true)}} className="col-span-12 flex flex-col gap-4 lg:col-span-5 lg:col-start-8"><input required aria-label="Họ và tên" placeholder="Họ và tên" className="border-b border-primary-foreground/40 bg-transparent py-4 outline-none placeholder:text-primary-foreground/55 focus:border-primary-foreground"/><input required type="email" aria-label="Email" placeholder="Email" className="border-b border-primary-foreground/40 bg-transparent py-4 outline-none placeholder:text-primary-foreground/55 focus:border-primary-foreground"/><input required type="tel" aria-label="Số điện thoại" placeholder="Số điện thoại" className="border-b border-primary-foreground/40 bg-transparent py-4 outline-none placeholder:text-primary-foreground/55 focus:border-primary-foreground"/><textarea aria-label="Nội dung dự án" rows={3} placeholder="Bạn đang lên kế hoạch cho không gian nào?" className="resize-none border-b border-primary-foreground/40 bg-transparent py-4 outline-none placeholder:text-primary-foreground/55 focus:border-primary-foreground"/><button type="submit" className="mt-4 rounded-full bg-ink px-7 py-4 font-mono text-[11px] uppercase text-background transition-all hover:-translate-y-1 hover:bg-background hover:text-ink">{sent ? "Đã gửi — Cảm ơn bạn" : "Gửi yêu cầu tư vấn"}</button></form></div></section>

    <footer className="bg-ink text-background"><div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10"><div className="grid grid-cols-12 gap-8"><div className="col-span-12 md:col-span-5"><p className="font-display text-4xl">KHỐI<span className="text-primary">.</span></p><p className="mt-4 max-w-[32ch] text-background/60">Studio kiến trúc & nội thất cao cấp. Thiết kế những không gian sống chậm và tinh xảo.</p></div><div className="col-span-6 md:col-span-3"><p className="mb-4 font-mono text-[10px] uppercase text-background/40">Liên hệ</p><p className="text-sm text-background/80">12 Nguyễn Huệ, Q.1, TP.HCM</p><p className="mt-2 text-sm text-background/80">hello@khoi.studio</p><p className="mt-2 text-sm text-background/80">+84 28 1234 5678</p></div><div className="col-span-6 md:col-span-4"><p className="mb-4 font-mono text-[10px] uppercase text-background/40">Điều hướng</p><div className="grid gap-2 text-sm text-background/80"><a href="#ve">Về studio</a><a href="#dichvu">Dịch vụ</a><a href="#duan">Dự án</a><a href="#tuvan">Tư vấn</a></div></div></div><div className="mt-14 flex flex-col justify-between gap-3 border-t border-background/15 pt-6 font-mono text-[10px] uppercase text-background/40 md:flex-row"><p>© 2026 KHỐI Studio</p><p>Kiến tạo không gian sống</p></div></div></footer>
  </main>;
}
