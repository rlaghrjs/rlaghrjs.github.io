import { Link } from "react-router-dom";
import PrintButton from "./PrintButton";

/* ---------- 공통 컴포넌트 ---------- */

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

/* ------------------------ 자기소개서 페이지 ------------------------ */

export default function IntroPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* 헤더 */}
      <header className="no-print sticky top-0 z-10 backdrop-blur bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
        <div className="mx-auto max-w-6xl flex items-center px-6 py-3">
          <Link to="/" className="font-semibold tracking-tight text-lg text-neutral-900 dark:text-neutral-50 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            김호건<span className="text-emerald-500">_</span>
          </Link>

          <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
            <span className="text-neutral-500 dark:text-neutral-400">Portfolio</span>
            <span className="text-emerald-600 dark:text-emerald-400">/ 자기소개</span>
          </nav>
        </div>
      </header>

      <main className="py-14">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          <SectionLabel text="self-introduction" />
          {/* -------------------- 기본 정보 -------------------- */}
          <section>
            <Card>
              <div className="p-10">

                <h2 className="text-2xl font-semibold mb-8 text-center">
                  기본 정보
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                  {/* 프로필 사진 */}
                  <div className="flex justify-center">
                    <img
                      src="/rlaghrjs.png"
                      alt="profile"
                      className="w-40 h-[200px] object-cover rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-6 text-[15px] leading-relaxed">
                    <div className="grid grid-cols-4 gap-4">
                      <span className="font-semibold text-right col-span-1">이름:</span>
                      <span className="col-span-1">김호건</span>

                      <span className="font-semibold text-right col-span-1">생년월일:</span>
                      <span className="col-span-1">2002-01-23</span>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <span className="font-semibold text-right col-span-1">이메일:</span>
                      <a
                        className="col-span-1 text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        khg0954@naver.com
                      </a>

                      <span className="font-semibold text-right col-span-1">연락처:</span>
                      <span className="col-span-1">010-4249-3909</span>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                      <span className="font-semibold text-right col-span-1">GitHub:</span>
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
                </div>
              </div>
            </Card>
          </section>



          {/* -------------------- 학력 / 대외활동 내역 -------------------- */}
          <section>
            <Card>
              <div className="p-8 text-base text-neutral-700 dark:text-neutral-300">
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-center">학력</h2>

                    <table className="w-full text-sm border-t border-neutral-200 dark:border-neutral-800">
                      <thead className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 text-xs">
                        <tr>
                          <th className="py-2 font-medium w-[25%] text-left whitespace-nowrap">학교</th>
                          <th className="py-2 font-medium w-[25%] text-center whitespace-nowrap">재학기간</th>
                          <th className="py-2 font-medium w-[25%] text-center whitespace-nowrap">구분</th>
                          <th className="py-2 font-medium w-[25%] text-center whitespace-nowrap">성적</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        <tr>
                          <td className="py-3 whitespace-nowrap text-left">창의고</td>
                          <td className="py-3 whitespace-nowrap text-center">2018-03 ~ 2021-01</td>
                          <td className="py-3 whitespace-nowrap text-center">졸업</td>
                          <td className="py-3 whitespace-nowrap text-center">-</td>
                        </tr>

                        <tr>
                          <td className="py-3 whitespace-nowrap text-left">인하공업전문대학</td>
                          <td className="py-3 whitespace-nowrap text-center">2021-03 ~ 재학중</td>
                          <td className="py-3 whitespace-nowrap text-center">재학</td>
                          <td className="py-3 whitespace-nowrap text-center">4.07 / 4.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
         
                  <div>
                    <h2 className="text-xl font-semibold mb-4 text-center">대외활동</h2>

                    <table className="w-full text-sm border-t border-neutral-200 dark:border-neutral-800">
                      <thead className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 text-xs">
                        <tr>
                          <th className="py-2 font-medium w-[33%] text-left whitespace-nowrap">기관</th>
                          <th className="py-2 font-medium w-[33%] text-center whitespace-nowrap">기간</th>
                          <th className="py-2 font-medium w-[34%] text-center whitespace-nowrap">구분</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        <tr>
                          <td className="py-3 whitespace-nowrap text-left">LG Aimers 6기</td>
                          <td className="py-3 whitespace-nowrap text-center">2024-01 ~ 2024-02</td>
                          <td className="py-3 whitespace-nowrap text-center">수료</td>
                          <td className="py-3 whitespace-nowrap text-center">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </section>


          {/* -------------------- 자기소개 본문 -------------------- */}
          <section className="space-y-12">
            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">1. 성장배경</h2>
                <p>
                  저는 어릴 때부터 주어진 일에 끝까지 책임을 다하려는 성향이 강했습니다. 특별히 화려한 에피소드가 있었다기보다는, 일상 속에서 맡은 역할을 꾸준히 지키는 경험들이 제 성격을 만들어왔습니다. 
                  학창시절에는 조별과제나 동아리 활동에서 자연스럽게 중심 역할을 맡게 되었고, 친구들이 어려움에 부딪히면 함께 해결 방법을 고민하는 과정이 즐거웠습니다. 
                  이런 경험들은 문제를 단순히 피하기보다 해결하려는 태도를 키워주었습니다. 대학에 진학한 후에도 이러한 모습은 계속되었습니다. 
                  전공 공부와 프로젝트를 병행하며 새로운 기술을 익혀야 할 때가 많았지만, 스스로 찾아보고 이해할 때까지 반복하는 꾸준함이 큰 힘이 되었습니다. 
                  팀 프로젝트에서는 의견 차이가 생기거나 계획이 어긋나는 순간도 있었지만, 대화를 통해 조율하고 모두가 만족할 수 있는 방향을 찾기 위해 노력했습니다. 작은 경험들이 모여 협업의 기본과 책임감을 자연스럽게 배울 수 있었습니다.
                  돌이켜보면 제 성장 과정은 특별하지 않을 수 있지만, 그 속에서 얻은 꾸준함과 성실함은 지금의 저를 이루는 가장 큰 기반이라고 생각합니다. 앞으로도 새로운 환경 속에서도 성실함을 바탕으로 배우고 성장하는 자세를 잃지 않는 사람이 되고자 합니다.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">2. 성격의 장단점</h2>
                <p>
                  저의 강점은 문제를 어떻게든 해결하고자 하는 집요한 탐구심과 실행력입니다. 
                  학부 시절 Kinect 장치를 활용한 프로젝트를 진행할 때, 팀원 모두가 처음 접하는 장비라 초기 방향 설정이 쉽지 않았습니다. 
                  저는 장치의 스펙 문서와 기능 자료를 직접 분석하며 핵심 성능을 빠르게 파악했고, 이를 기반으로 프로젝트의 구현 방향을 제시했습니다. 
                  새로운 기술이 주어져도 주저하지 않고, 필요한 정보를 수집‧정리하여 실질적인 해결 방안을 제시하는 능력은 제가 IT 분야에서 가장 자신 있는 부분입니다.
                </p>
                <p>
                  반면, 저는 의견 수용 과정에서 단호하게 선을 긋지 못하는 점을 보완해야 한다고 느낀 경험이 있습니다. 
                  교내 일정 관리 프로그램 개발 당시, 팀원들의 다양한 아이디어를 모두 반영하려다 보니 기능 범위가 과도하게 확장되었고, 결국 제출 기한을 맞추지 못할 뻔했습니다. 
                  그 이후로는 프로젝트의 우선순위와 범위를 명확히 정하고, 필요 시 일정과 품질을 위해 과감히 조정하거나 거절하는 연습을 해왔습니다. 
                  이를 통해 현재는 팀 내 커뮤니케이션에서 현실적인 기준을 제시하고, 일정 관리에 더욱 책임감 있게 임하고 있습니다.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">3. 학교생활과 경험</h2>
                <p>
                  저는 새로운 기술을 탐구하고 문제를 해결하는 과정에서 강한 흥미를 느껴 IT 분야를 진로로 선택했습니다. 
                  대학에서 다양한 전공 수업을 들으며 자료구조와 운영체제 등 기본기를 다졌고, 이론을 실제로 적용해보는 프로젝트 활동을 통해 실무 역량을 꾸준히 키웠습니다.
                  특히 Kinect 장치를 활용한 프로젝트는 중요한 성장 경험이었습니다. 학교에 들어와서 타인과 협업하는 최초의 프로젝트이자 협업을 잘한다는게 얼마나 중요한지 깨달을수 있게 해주는 프로젝트이기도 하였습니다. 
                  또한 시스템분석설계에서는 프로젝트를 어떤식으로 계획하고 진행해야하는지에 대한 전반적인 과정에 대해 배울수 있었습니다. 
                  이 경험을 통해 협업에서는 기술뿐 아니라 범위 조절과 일정 관리가 중요하다는 것을 깨달았고, 필요할 때는 과감하게 우선순위를 조정하는 자세를 갖추게 되었습니다.
                  이러한 학교생활과 프로젝트 경험을 통해 저는 새로운 기술을 빠르게 이해하고, 문제 상황에서도 해결 방향을 주도적으로 찾는 스타일로 성장했습니다. 
                  앞으로도 책임감 있게 배우고 협업하며 실질적인 가치를 만드는 개발자가 되고자 합니다.
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-8 space-y-4 leading-relaxed text-base text-neutral-700 dark:text-neutral-300">
                <h2 className="text-xl font-semibold">4. 앞으로의 목표</h2>
                <p>
                  <strong>서비스 전체 흐름을 이해하고 설계할 수 있는 백엔드 개발자</strong>로 성장하고 싶습니다.
                  단기적으로는 Spring Boot와 Java 기반 역량을 강화하고,
                  장기적으로는 안정적이고 확장 가능한 시스템을 설계·운영하는 개발자를 지향합니다.
                </p>
              </div>
            </Card>
          </section>

          <section>
            <PrintButton label="PDF 저장" />
            <div className="flex justify-end">
              <Link
                to="/"
                className="no-print inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition"
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