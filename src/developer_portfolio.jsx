import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiSpringboot,
  SiFirebase,
  SiTensorflow,
  SiPython,
} from "react-icons/si";


/* ---------- 공통 아이콘 ---------- */

const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.98 3.22 9.2 7.68 10.69.56.1.77-.24.77-.54l-.02-1.89c-3.12.68-3.78-1.5-3.78-1.5-.51-1.29-1.24-1.63-1.24-1.63-.99-.68.07-.67.07-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.67 2.55 1.19 3.17.91.1-.71.38-1.19.69-1.46-2.49-.28-5.11-1.25-5.11-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.45.11-3.03 0 0 .95-.3 3.11 1.16a10.7 10.7 0 0 1 5.66 0c2.15-1.46 3.1-1.16 3.1-1.16.62 1.58.24 2.74.12 3.03.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.28-5.14 5.56.39.33.74.98.74 1.98l-.02 2.93c0 .3.2.65.77.54a10.99 10.99 0 0 0 7.67-10.69C23.25 5.48 18.27.5 12 .5Z"
    />
  </svg>
);

const IconLink = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M10.59 13.41a1.5 1.5 0 0 0 2.12 2.12l4.95-4.95a3.5 3.5 0 0 0-4.95-4.95l-1.76 1.76a1 1 0 1 0 1.41 1.41l1.76-1.76a1.5 1.5 0 1 1 2.12 2.12l-4.95 4.95Zm-1.18-2.82a1.5 1.5 0 0 0-2.12-2.12l-2.12 2.12a3.5 3.5 0 0 0 4.95 4.95l1.76-1.76a1 1 0 0 0-1.41-1.41L8.83 14.0a1.5 1.5 0 0 1-2.12-2.12l2.12-2.12Z"
    />
  </svg>
);

/* ---------- 공통 UI 컴포넌트 ---------- */

const SectionLabel = ({ text }) => (
  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm">
    <span className="select-none">$</span>
    <span>{text}</span>
    <span
      className="ml-1 inline-block w-2 h-5 bg-emerald-400 animate-pulse"
      aria-hidden="true"
    />
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200/70 dark:border-neutral-700/80 px-2.5 py-0.5 text-xs text-neutral-700 dark:text-neutral-200">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/80 shadow-sm">
    {children}
  </div>
);

/* ---------- 공통 데이터 ---------- */

const SKILLS = [
  {
    name: "Java",
    level: 85,
    Icon: FaJava,
    color: "bg-orange-500",
    iconClass: "text-orange-500",
    description: "Spring, JPA 기반 백엔드 개발에 주로 사용합니다.",
  },
  {
    name: "Spring Boot",
    level: 80,
    Icon: SiSpringboot,
    color: "bg-emerald-500",
    iconClass: "text-emerald-500",
    description: "REST API, 인증/인가, JPA를 활용한 서버 개발 경험.",
  },
  {
    name: "Python",
    level: 85,
    Icon: SiPython,
    color: "bg-yellow-500",
    iconClass: "text-yellow-500",
    description: "데이터 처리, 스크립트, ML 실험에 활용합니다.",
  },
  {
    name: "TensorFlow",
    level: 70,
    Icon: SiTensorflow,
    color: "bg-orange-400",
    iconClass: "text-orange-400",
    description: "분류/회귀 모델 구현 및 간단한 배포 경험이 있습니다.",
  },
  {
    name: "Firebase",
    level: 75,
    Icon: SiFirebase,
    color: "bg-amber-500",
    iconClass: "text-amber-500",
    description: "Auth, Firestore, Storage를 활용한 앱 백엔드 구성.",
  },
];

const PROJECTS = [
  {
    id: "health-ai",
    category: "main",
    title: "운동 · 식단 관리 AI 어시스턴트",
    summary:
      "심박수 기반 운동 추천, 개인 맞춤형 식단 추천을 제공하는 Flask + Firebase + ML 기반 건강 관리 서비스.",
    stack: ["Flask", "Firebase", "TensorFlow", "React", "Python"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
  {
    id: "bookmarket",
    category: "main",
    title: "BookMarket 온라인 서점",
    summary:
      "Spring Boot 기반의 온라인 도서 쇼핑몰. 회원/장바구니/주문/관리자 기능까지 구현.",
    stack: ["Spring Boot", "Thymeleaf", "MySQL", "JPA"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
  {
    id: "foodmap",
    category: "sub",
    title: "맛집 기록/리뷰 Android 앱",
    summary:
      "지도를 기반으로 맛집을 등록하고 태그, 평점, 메모를 관리하는 앱. Firebase Auth/Storage 연동.",
    stack: ["Android", "Kotlin/Java", "Firebase", "Google Maps"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
  {
    id: "bike-forecast",
    category: "sub",
    title: "서울 따릉이 수요 예측",
    summary:
      "시계열 데이터를 활용한 따릉이 수요 예측 ML 모델 구현 및 시각화 미니 프로젝트.",
    stack: ["Python", "Pandas", "scikit-learn", "Matplotlib"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
];

/* ---------- 공통 훅: 게이지 애니메이션 ---------- */

function useAnimatedLevels() {
  const [levels, setLevels] = useState(SKILLS.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLevels(SKILLS.map((s) => s.level));
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return levels;
}

export function DeveloperPortfolioFramed() {
  const animatedLevels = useAnimatedLevels();
  const mainProjects = PROJECTS.filter((p) => p.category === "main").slice(0, 2);
  const subProjects = PROJECTS.filter((p) => p.category === "sub").slice(0, 2);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center px-6 py-3">

          {/* 로고 클릭 → 홈 섹션 이동 */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("home");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-semibold tracking-tight text-lg"
          >
            김호건<span className="text-emerald-500">_</span>
          </a>

          <nav className="ml-auto flex items-center gap-6 text-sm font-medium">

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Home
            </a>

            <a
              href="#introduction"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Introduction
            </a>

            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>


      {/* Hero */}
      <section id="home" className="w-full bg-neutral-50 dark:bg-neutral-950 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="font-mono text-sm text-emerald-500 mb-2">$ hello</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            AI와 백엔드로
            <br />
            <span className="text-emerald-500">실사용 서비스를 만드는</span>
            <br />
            개발자 김호건입니다.
          </h1>
          <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
            웹과 모바일, 머신러닝을 결합해 실제로 사람들이 쓰는 제품을 만드는 데 관심이 많습니다.
            성능과 구조, 사용자 경험 사이의 균형을 고민합니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              프로젝트 보기
            </a>
           <Link
              to="/intro"
              className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
            >
              자기소개서 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="w-full bg-neutral-50 dark:bg-neutral-950 pb-14">
        <div className="mx-auto max-w-6xl px-4">
          <Card>
            <div className="p-6">

              {/* Section Label */}
              <div className="font-mono text-sm text-emerald-400 flex items-center gap-2" aria-hidden>
                <span>$</span>
                <span> introduction</span>
                <span className="ml-1 inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
              </div>

              {/* ✅ Info 영역 */}
              <div className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">

                <div className="flex gap-3">
                  <span className="font-semibold w-24">이름</span>
                  <span>김호건</span> {/* 수정 가능 */}
                </div>

                <div className="flex gap-3">
                  <span className="font-semibold w-24">이메일</span>
                  <a
                    href="mailto:example@email.com"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    khg0954@naver.com
                  </a>
                </div>

                <div className="flex gap-3">
                  <span className="font-semibold w-24">연락처</span>
                  <span>010-4249-3909</span> {/* 수정 가능 */}
                </div>

                <div className="flex gap-3">
                  <span className="font-semibold w-24">학력</span>
                  <span>인하공업전문대학교 컴퓨터정보공학과 재학</span> {/* 수정 가능 */}
                </div>

                 <div className="flex gap-3">
                  <span className="font-semibold w-24">GitHub</span>
                  <a
                    href="https://github.com/rlaghrjs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    github.com/rlaghrjs
                  </a>
                </div>
              </div>

              {/* ✅ 기존 태그 뱃지 유지 */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>Backend &amp; AI</Badge>
                <Badge>Spring / Flask</Badge>
                <Badge>React</Badge>
                <Badge>Android</Badge>
              </div>

            </div>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="w-full bg-white dark:bg-neutral-900 py-14 border-t border-neutral-200/70 dark:border-neutral-800/70"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionLabel text="skills" />

          {/* ✅ 스킬 카드: 가로 3개(큰 화면 기준) */}
          <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill, idx) => (
              <Card key={skill.name}>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 shadow-sm">
                        <skill.Icon className={`text-3xl ${skill.iconClass}`} />
                      </div>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* 게이지 바 */}
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${skill.color}`}
                      style={{ width: `${animatedLevels[idx]}%` }}
                    />
                  </div>

                  {/* 한 줄 설명 */}
                  <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* ✅ 기타 기술 스택 칸 */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
              Other tech stack
            </h3>
            <div className="rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 px-4 py-3 text-xs text-neutral-600 dark:text-neutral-300 flex flex-wrap gap-2">
              {/* 여기에 자유롭게 추가해서 쓰면 됨 */}
              <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5">
                React
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5">
                TypeScript
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5">
                MySQL
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5">
                Git
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-700 px-2 py-0.5">
                Docker
              </span>
              {/* 필요 없으면 전부 지우고 네가 원하는 스택만 남겨도 됨 */}
            </div>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="w-full bg-neutral-50 dark:bg-neutral-950 py-14 border-t border-neutral-200/70 dark:border-neutral-800/70">
        <div className="mx-auto max-w-6xl px-4">
          <SectionLabel text="projects" />

          {/* 대표 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
              대표 프로젝트
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {PROJECTS.filter((p) => p.category === "main")
                .slice(0, 2)
                .map((p) => (
                  <Card key={p.id}>
                    <div className="p-5 flex h-full flex-col">
                      <h4 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 flex-1">
                        {p.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <Badge key={s}>{s}</Badge>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2 text-sm">
                        <a
                          href={p.links.github}
                          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                        >
                          <IconGitHub />
                          Code
                        </a>
                        <a
                          href={p.links.demo}
                          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                        >
                          <IconLink />
                          Demo
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* 서브 */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-3">
              서브 프로젝트
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {PROJECTS.filter((p) => p.category === "sub")
                .slice(0, 2)
                .map((p) => (
                  <Card key={p.id}>
                    <div className="p-5 flex h-full flex-col">
                      <h4 className="text-lg font-semibold tracking-tight">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 flex-1">
                        {p.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <Badge key={s}>{s}</Badge>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2 text-sm">
                        <a
                          href={p.links.github}
                          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                        >
                          <IconGitHub />
                          Code
                        </a>
                        <a
                          href={p.links.demo}
                          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60"
                        >
                          <IconLink />
                          Demo
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <section id="contact" className="w-full bg-white dark:bg-neutral-900 py-14 border-t border-neutral-200/70 dark:border-neutral-800/70">
        <div className="mx-auto max-w-6xl px-4">
          <SectionLabel text="contact" />
          <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
            <p>
              이메일:{" "}
              <a
                href="mailto:example@email.com"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                example@email.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                https://github.com/
              </a>
            </p>
          </div>
          <footer className="mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-4 text-xs text-neutral-500 dark:text-neutral-400 flex justify-between">
            <span>© {new Date().getFullYear()} Hogeon Kim</span>
            <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("home");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-emerald-500"
          >
            Back to top ↑
          </a>
          </footer>
        </div>
      </section>
    </div>
  );
}

export default DeveloperPortfolioFramed;
