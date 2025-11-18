import React, { useEffect, useMemo, useState } from "react";

// --- Small inline SVG icons (no external deps) ---
const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58l-.02-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.82 1.31 3.51 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.91 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.89.12 3.19.77.84 1.23 1.91 1.23 3.22 0 4.59-2.8 5.6-5.47 5.9.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z"
    />
  </svg>
);

const IconLink = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M3.9 12a5.1 5.1 0 0 1 5.1-5.1h3a1 1 0 1 1 0 2h-3A3.1 3.1 0 0 0 5 12a3.1 3.1 0 0 0 3.1 3.1h3a1 1 0 1 1 0 2h-3A5.1 5.1 0 0 1 3.9 12Zm7-1a1 1 0 0 1 1-1h3A5.1 5.1 0 1 1 18.1 19h-3a1 1 0 1 1 0-2h3A3.1 3.1 0 1 0 18.1 9h-3a1 1 0 0 1-1-1Z"/>
  </svg>
);

const skills = [
  { name: 'React', level: 90, color: 'bg-sky-500' },
  { name: 'Spring Boot', level: 80, color: 'bg-emerald-500' },
  { name: 'Firebase', level: 75, color: 'bg-amber-500' },
  { name: 'TensorFlow', level: 70, color: 'bg-orange-500' },
  { name: 'Python', level: 85, color: 'bg-yellow-500' },
];


// 프로젝트 데이터
const PROJECTS = [
  {
    id: "bookmarket",
    title: "BookMarket",
    summary: "전자책 판매 웹서비스 (주문/결제/보안)",
    stack: ["Spring Boot", "MariaDB", "Thymeleaf"],
    tags: ["Backend", "Web"],
    kpis: [
      { label: "응답시간", value: "~0.9s" },
      { label: "RPS", value: "100/s" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    id: "restaurant-app",
    title: "맛집 기록/리뷰 앱",
    summary: "지도 기반 맛집 기록 · 평점 · 메모 Android 앱",
    stack: ["Android", "Firebase", "Google Maps"],
    tags: ["Android", "Mobile"],
    kpis: [
      { label: "활성사용자", value: "1.2k/월" },
      { label: "리뷰", value: "5k+" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    id: "ai-health",
    title: "AI 운동·식단 관리",
    summary: "심박 기반 경고 & 맞춤 운동/식단 추천 시스템",
    stack: ["Flask", "TensorFlow", "Firebase"],
    tags: ["AI", "Backend"],
    kpis: [
      { label: "추천시간", value: "< 20s" },
      { label: "정확도", value: "54%+" },
    ],
    links: { github: "#", demo: "#" },
  },
  {
    id: "seoul-bike",
    title: "Seoul Bike Demand",
    summary: "자전거 대여량 예측 (정형 회귀/특성 엔지니어링)",
    stack: ["Python", "Keras", "Pandas"],
    tags: ["ML", "AI"],
    kpis: [
      { label: "sMAPE", value: "—" },
      { label: "MAE", value: "—" },
    ],
    links: { github: "#", demo: "#" },
  },
];

const TIMELINE = [
  {
    date: "2025.06 — 현재",
    title: "AI 운동·식단 관리 시스템 설계/구현",
    detail:
      "Android + Firebase + Flask + AI 백엔드. 심박 기반 경고 및 맞춤 추천.",
    link: "#",
  },
  {
    date: "2025.03 — 05",
    title: "BookMarket 전자상거래 웹앱 고도화",
    detail: "Spring Security 6, 주문/결제, i18n, 성능/로깅 최적화",
    link: "#",
  },
  {
    date: "2024.12",
    title: "맛집 기록/리뷰 Android 앱 배포",
    detail: "지도, 태그, 평점/메모, Firebase 인증/스토리지",
    link: "#",
  },
];

const TAGS = ["All", "Backend", "Web", "Android", "Mobile", "AI", "ML"];

// --- Small UI helpers ---
const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
    <span className="select-none">$</span>
    <span>{text}</span>
    <span className="ml-1 inline-block w-2 h-5 bg-emerald-400 animate-pulse" aria-hidden="true" />
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs border-neutral-300/60 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-200">
    {children}
  </span>
);

const Pill = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-sm transition hover:translate-y-[-1px] ${
      active
        ? "bg-emerald-500 text-white border-emerald-500"
        : "border-neutral-300/60 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/50"
    }`}
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 shadow-sm hover:shadow-md backdrop-blur-sm transition transform hover:-translate-y-0.5">
    {children}
  </div>
);

// --- Main Component ---
export default function DeveloperPortfolio() {
  const [dark, setDark] = useState(true);
  const [selected, setSelected] = useState("All");
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  const filtered = useMemo(() => {
    if (selected === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(selected));
  }, [selected]);

  // Smooth scroll behavior for the canvas preview
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);


  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);


  useEffect(() => {
    // 마운트 후 약간 딜레이를 주고 게이지를 채우기
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((s) => s.level));
    }, 200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {/* Header / Nav */}
        <header className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/50">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-lg">김호건<span className="text-emerald-500">_</span></a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#projects" className="hover:text-emerald-500">Projects</a>
              <a href="#about" className="hover:text-emerald-500">About</a>
              <a href="#timeline" className="hover:text-emerald-500">Timeline</a>
              <a href="#contact" className="hover:text-emerald-500">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#resume"
                onClick={(e) => e.preventDefault()}
                className="hidden sm:inline-flex items-center rounded-xl border border-neutral-300/70 dark:border-neutral-700/80 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                title="Resume"
              >
                Resume
              </a>
              <button
                onClick={() => setDark((d) => !d)}
                className="inline-flex items-center rounded-xl border border-neutral-300/70 dark:border-neutral-700/80 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                aria-label="Toggle theme"
              >
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          {/*
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3">
              <SectionLabel text="hello" />
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                백엔드와 AI로 <span className="text-emerald-500">실사용 서비스를</span> 만듭니다
              </h1>
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-prose">
                Spring Boot · Flask · Firebase · TensorFlow를 활용해 사용자 맞춤형 기능을 설계하고, 
                빠르고 안정적인 웹/모바일 서비스를 구현합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center rounded-xl bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 transition">프로젝트 보기</a>
                <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-300/70 dark:border-neutral-700/80 px-4 py-2 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition">연락하기</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-sm">
                {["Spring Boot", "MariaDB", "Android", "Firebase", "Flask", "TensorFlow", "Keras", "React"].map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <Card>
                <div className="p-5">
                  <div className="font-mono text-sm text-emerald-400 flex items-center gap-2" aria-hidden>
                    <span>$</span>
                    <span> whoami</span>
                    <span className="ml-1 inline-block w-2 h-5 bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    안녕하세요, <span className="font-semibold">백엔드 & AI 개발자 김호건</span>입니다. 
                    확장성과 유지보수를 고려한 아키텍처 설계와 데이터 기반 기능 고도화를 좋아합니다. 
                    사용자 가치를 빠르게 검증하는 프로덕트를 만듭니다.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60">
                      <IconGitHub /> GitHub
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60">
                      <IconLink /> Demo
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          */}
        </section>

        
        {/* Skills Section with Gauge Bars */}
        <section id="skills" className="mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>


          {/* ✅ 중앙 정렬 + 폭 80%, 2열 레이아웃 */}
          <div className="mx-auto w-[90%] md:w-4/5 grid md:grid-cols-2 gap-x-12 gap-y-6 text-left">
            {skills.map((skill, idx) => (
            <div key={skill.name}>
            <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
            <span className="text-xl">{skill.icon}</span>
            <span className="font-medium">{skill.name}</span>
          </div>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {skill.level}%
          </span>
          </div>


          {/* ✅ 게이지 바 */}
          <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-700 ${skill.color}`}
            style={{ width: `${animatedLevels[idx]}%` }}
          ></div>
          </div>
          </div>
          ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <SectionLabel text="highlights" />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 3).map((p) => (
              <Card key={p.id}>
                <div className="p-5">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                    {p.kpis?.map((k) => (
                      <div key={k.label} className="rounded-lg border px-3 py-2 text-center border-neutral-200/70 dark:border-neutral-800/80">
                        <div className="text-neutral-500 dark:text-neutral-400">{k.label}</div>
                        <div className="font-semibold">{k.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={p.links.github} className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"><IconGitHub/>Code</a>
                    <a href={p.links.demo} className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"><IconLink/>Demo</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <SectionLabel text="projects" />
              <h2 className="mt-2 text-2xl font-bold tracking-tight">대표 프로젝트</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <Pill key={t} active={selected === t} onClick={() => setSelected(t)}>
                  {t}
                </Pill>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Card key={p.id}>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <div className="flex gap-1">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 min-h-[44px]">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href={p.links.github} className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"><IconGitHub/>Code</a>
                    <a href={p.links.demo} className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"><IconLink/>Demo</a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12">
          <SectionLabel text="about" />
          <div className="mt-3 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">소개</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                사용자 가치와 운영 관점에서 시스템을 바라보는 것을 중요하게 생각합니다. 
                <span className="font-semibold"> 가독성과 일관성</span>을 갖춘 코드, 
                <span className="font-semibold"> 측정 가능한 성능 지표</span>, 
                <span className="font-semibold"> 배포 자동화</span>에 관심이 많습니다.
              </p>
              <div className="mt-4 text-sm">
                <div className="font-semibold mb-1">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "JPA/Hibernate", "MariaDB", "Python", "Flask", "TensorFlow", "Keras", "Android", "Firebase", "React"].map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">관심사</h3>
              <ul className="mt-2 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm list-disc pl-5">
                <li>심박 기반 피드백을 활용한 운동 추천 로직</li>
                <li>Seoul Bike 수요 예측: 시계열 vs 정형 회귀 비교</li>
                <li>RAG/벡터 검색 기반 기능 탐색 (Chromadb/Faiss)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mx-auto max-w-6xl px-4 py-12">
          <SectionLabel text="timeline" />
          <ol className="mt-4 relative border-s border-neutral-200 dark:border-neutral-800">
            {TIMELINE.map((item, idx) => (
              <li key={idx} className="mb-10 ms-6">
                <span className="absolute -start-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white ring-8 ring-white dark:ring-neutral-950">
                  {idx + 1}
                </span>
                <h4 className="text-base font-semibold">{item.title}</h4>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">{item.date}</div>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{item.detail}</p>
                {item.link && (
                  <a href={item.link} className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-500 hover:underline">
                    <IconLink /> 자세히 보기
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <SectionLabel text="contact" />
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="p-5">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">Email</div>
                <a href="mailto:you@example.com" className="text-lg font-semibold hover:underline">you@example.com</a>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">GitHub</div>
                <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold hover:underline"><IconGitHub/> github.com/username</a>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">LinkedIn</div>
                <a href="#" className="inline-flex items-center gap-2 text-lg font-semibold hover:underline"><IconLink/> linkedin.com/in/username</a>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Hogeon Kim. All rights reserved.</p>
            <a href="#home" className="hover:text-emerald-500">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
