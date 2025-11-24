// src/Introduction.jsx
import { Link } from "react-router-dom";

/* ---------- 포트폴리오 스타일에 맞춘 공통 컴포넌트 ---------- */

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

const Card = ({ children }) => (
  <div className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/80 dark:bg-neutral-900/80 shadow-sm">
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200/70 dark:border-neutral-700/80 px-2.5 py-0.5 text-xs text-neutral-700 dark:text-neutral-200">
    {children}
  </span>
);

/* ------------------------ 자기소개서 페이지 ------------------------ */

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* 헤더 (포트폴리오 동일 스타일) */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center px-6 py-3">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            김호건<span className="text-emerald-500">_</span>
          </Link>

          <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
            <span className="text-neutral-500 dark:text-neutral-400">Portfolio</span>
            <span className="text-emerald-600 dark:text-emerald-400">/ 자기소개서</span>
          </nav>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="py-14">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* 소개 섹션 */}
          <section>
            <SectionLabel text="self-introduction" />
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              책임감 있게 성장하는
              <br />
              <span className="text-emerald-500">백엔드 &amp; AI 개발자</span> 김호건입니다.
            </h1>

            <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
              웹과 모바일, 그리고 머신러닝을 결합해 <strong>실제로 사용하는 서비스</strong>를 만드는 데 가장 큰 흥미를 느낍니다.
              작은 기능 하나라도 "왜 필요한지", "어떤 경험을 줄 수 있는지"를 고민하며 개발합니다.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>Spring Boot / Java</Badge>
              <Badge>Python / ML</Badge>
              <Badge>Firebase / Android</Badge>
              <Badge>문제 해결 중심 사고</Badge>
            </div>
          </section>

          {/* 기본 정보 */}
          <section>
            <Card>
              <div className="p-8 space-y-6 text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">기본 정보</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <div className="text-xs text-neutral-500">이름</div>
                    <div className="font-medium">김호건</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-neutral-500">이메일</div>
                    <a
                      href="mailto:khg0954@naver.com"
                      className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      khg0954@naver.com
                    </a>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-neutral-500">연락처</div>
                    <div className="font-medium">010-4249-3909</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-neutral-500">학력</div>
                    <div className="font-medium">
                      인하공업전문대학교 컴퓨터정보공학과 재학
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs text-neutral-500">GitHub</div>
                    <a
                      href="https://github.com/rlaghrjs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      github.com/rlaghrjs
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* 본문 섹션들 */}
          <section className="space-y-12">
            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">1. 문제 해결에 끌린 개발자의 시작</h2>
                <p>
                  개발을 처음 접했을 때 가장 흥미로웠던 점은 <strong>"문제를 정의하고 스스로 해결책을 설계할 수 있다"</strong>는 부분이었습니다.
                  작은 콘솔 프로그램부터 시작해 웹, 모바일, 서버까지 다뤄 보면서
                  사용자의 불편함을 줄이는 기능을 만들 때 가장 큰 보람을 느꼈습니다.
                </p>
                <p>
                  팀 프로젝트를 통해 협업하며 단순히 동작하는 것을 넘어서
                  <strong>구조와 유지보수성</strong>을 고민하게 되었고,
                  자연스럽게 백엔드와 인프라, 데이터 처리 영역에 관심을 가지게 되었습니다.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">2. 프로젝트로 배우는 백엔드와 AI</h2>
                <p>
                  Spring Boot로 <strong>온라인 서점(BookMarket)</strong> 프로젝트를 진행하며
                  회원, 장바구니, 주문, 관리자 기능까지 구현해 보았습니다.
                  이를 통해 <strong>도메인 설계, JPA 기반 데이터 모델링, 계층형 아키텍처</strong>를 경험했습니다.
                </p>
                <p>
                  또 다른 프로젝트로는 <strong>운동 · 식단 관리 AI 어시스턴트</strong>를 개발했습니다.
                  Flask와 TensorFlow로 심박수 기반 운동 추천과 식단 추천 기능을 만들고,
                  Firebase로 인증과 데이터를 저장했습니다.
                </p>
                <p>
                  시계열 데이터를 활용한 따릉이 수요 예측, 맛집 기록 Android 앱 등
                  관심 있는 아이디어를 직접 구현하며
                  <strong>"배운 것을 바로 써먹는 개발자"</strong>로 성장하고 있습니다.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">3. 저의 강점</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>서비스 관점의 사고</strong> — 기능 구현에서 끝나지 않고 사용 경험과 흐름까지 고려합니다.
                  </li>
                  <li>
                    <strong>끈기 있는 문제 해결</strong> — 에러와 문제를 끝까지 파고들어 해결하는 스타일입니다.
                  </li>
                  <li>
                    <strong>협업과 커뮤니케이션</strong> — 작은 변경도 공유하며 팀과 함께 결정하는 문화를 중요하게 생각합니다.
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">4. 앞으로의 목표</h2>
                <p>
                  단기적으로는 Spring Boot와 Python 기반 기술 스택을 더욱 탄탄히 다져
                  <strong>서비스를 설계부터 배포까지 책임질 수 있는 백엔드 개발자</strong>가 되는 것이 목표입니다.
                </p>
                <p>
                  장기적으로는 성능과 안정성을 고려한 시스템을 설계하고 운영하며
                  사용자와 팀 모두에게 신뢰받는 개발자로 성장하고 싶습니다.
                </p>
              </div>
            </Card>
          </section>

          {/* 돌아가기 버튼 */}
          <section>
            <div className="flex justify-end">
              <Link
                to="/"
                className="inline-flex items-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium hover:bg-neutral-100/80 dark:hover:bg-neutral-800/80 transition"
              >
                ← 포트폴리오로 돌아가기
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}