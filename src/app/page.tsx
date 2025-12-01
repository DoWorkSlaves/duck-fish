import KaistLogo from "@/components/KaistLogo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 transition-colors duration-500 dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-r from-amber-200 to-orange-200 opacity-60 blur-3xl dark:from-violet-600 dark:to-indigo-600 dark:opacity-40" />
        <div className="animate-pulse-glow animation-delay-200 absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-60 blur-3xl dark:from-cyan-500 dark:to-blue-600 dark:opacity-40" />
        <div className="animate-pulse-glow animation-delay-400 absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-gradient-to-r from-teal-200 to-emerald-200 opacity-60 blur-3xl dark:from-fuchsia-500 dark:to-pink-600 dark:opacity-40" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(180,83,9,0.04) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(180,83,9,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-20 dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-6 py-20">
        <main className="flex w-full max-w-5xl flex-col items-center gap-24">
          {/* Hero section */}
          <div className="animate-fade-in-up flex flex-col items-center gap-6 pt-12 text-center">
            <div className="relative">
              <h1 className="animate-gradient bg-gradient-to-r from-amber-600 via-rose-500 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-violet-400 dark:via-cyan-400 dark:to-fuchsia-400 sm:text-7xl">
                오리연못 미꾸라지
              </h1>
              <div className="absolute inset-0 -z-10 blur-2xl">
                <h1 className="animate-gradient bg-gradient-to-r from-amber-600 via-rose-500 to-violet-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent opacity-40 dark:from-violet-400 dark:via-cyan-400 dark:to-fuchsia-400 dark:opacity-50 sm:text-7xl">
                  오리연못 미꾸라지
                </h1>
              </div>
            </div>

            {/* KAIST Badge - Prominent Display */}
            <div className="glass flex flex-col items-center gap-4 rounded-2xl px-8 py-6 shadow-xl shadow-amber-500/10 dark:shadow-violet-500/10 sm:px-12">
              <KaistLogo className="h-12 w-auto sm:h-16" />
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-base font-semibold text-amber-800 dark:text-zinc-200 sm:text-lg">
                  전산학부 · 전기전자공학부 졸업
                </span>
              </div>
            </div>

            <p className="max-w-lg text-lg leading-relaxed text-amber-900/70 dark:text-zinc-400">
              카이스트 출신 개발자 3인이 모여 만든 웹 개발 팀입니다.
              <br />
              <span className="font-medium text-amber-900 dark:text-zinc-300">
                창의적인 디자인
              </span>
              과{" "}
              <span className="font-medium text-amber-900 dark:text-zinc-300">
                최신 기술
              </span>
              로 여러분의 비전을 현실로 만들어 드립니다.
            </p>
          </div>

          {/* 우리는 다릅니다 Section */}
          <section className="animate-fade-in-up animation-delay-200 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                우리는 다릅니다
              </h2>
            </div>

            <div className="glass flex flex-col items-center gap-6 rounded-3xl p-8 text-center shadow-xl shadow-amber-500/10 dark:shadow-violet-500/10 sm:p-12">
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold text-amber-800 dark:text-zinc-200">
                  KAIST 전산학부 졸업 2인 · KAIST 전기전자공학부 졸업 1인
                </p>
                <p className="text-xl font-bold text-amber-900 dark:text-zinc-100">
                  3년 이상 경력 개발자 3인이{" "}
                  <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-violet-400">
                    &quot;직접&quot;
                  </span>{" "}
                  만듭니다
                </p>
              </div>

              <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-amber-300 to-transparent dark:via-zinc-700" />

              <div className="flex flex-col gap-4 text-amber-900/80 dark:text-zinc-300">
                <p className="text-lg">
                  저렴하다고 퀄리티가 낮아지는 게 아닙니다.
                </p>
                <div className="flex flex-col gap-2 text-lg">
                  <p>
                    <span className="font-semibold text-amber-900 dark:text-zinc-100">
                      대기업에서 쓰는 그 기술,
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-amber-900 dark:text-zinc-100">
                      스타트업이 선택하는 그 스택.
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-xl font-bold text-amber-900 dark:text-zinc-100">
                  여러분의 웹 사이트에 바로 적용해보세요.
                </p>
              </div>
            </div>
          </section>

          {/* 왜 React / Next.js 인가? Section */}
          <section className="animate-fade-in-up animation-delay-400 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                왜 React / Next.js 인가?
              </h2>
            </div>

            <p className="text-center text-lg text-amber-800 dark:text-zinc-300">
              현대적인 웹 페이지의 사실상 유일한 스택입니다.
            </p>

            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  label: "반응형 웹",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ),
                  color: "text-violet-500 dark:text-violet-400",
                  bg: "bg-violet-100 dark:bg-violet-900/30",
                },
                {
                  label: "SEO 최적화",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                  ),
                  color: "text-cyan-500 dark:text-cyan-400",
                  bg: "bg-cyan-100 dark:bg-cyan-900/30",
                },
                {
                  label: "빠른 개발",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                  ),
                  color: "text-amber-500 dark:text-amber-400",
                  bg: "bg-amber-100 dark:bg-amber-900/30",
                },
                {
                  label: "무제한 확장성",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  ),
                  color: "text-emerald-500 dark:text-emerald-400",
                  bg: "bg-emerald-100 dark:bg-emerald-900/30",
                },
                {
                  label: "유지보수 용이",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                  ),
                  color: "text-rose-500 dark:text-rose-400",
                  bg: "bg-rose-100 dark:bg-rose-900/30",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass glass-hover flex flex-col items-center justify-center gap-3 rounded-xl px-4 py-5 text-center transition-all duration-300 hover:scale-105"
                >
                  <div className={`rounded-xl p-3 ${item.bg}`}>
                    <span className={item.color}>{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-amber-900 dark:text-zinc-200">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="glass mt-4 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-amber-900 dark:text-zinc-200">
                2024년 기준 전 세계 웹사이트 트렌드의 중심.
              </p>
              <div className="flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 dark:bg-rose-900/30">
                <span className="text-rose-600 dark:text-rose-400">⚠️</span>
                <p className="text-rose-700 dark:text-rose-300">
                  워드프레스는 2003년 기술입니다.{" "}
                  <span className="font-bold">(22년 전)</span>
                </p>
              </div>
            </div>
          </section>

          {/* 유지보수 비용 Section */}
          <section className="animate-fade-in-up animation-delay-600 flex w-full flex-col items-center gap-8 opacity-0">
            <div className="flex items-center gap-3">
              <span className="text-3xl">👨‍💻</span>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-zinc-100">
                유지보수 비용이 줄어듭니다!
              </h2>
            </div>

            <p className="text-center text-lg font-semibold text-amber-800 dark:text-zinc-300">
              신입 개발자 = 유지보수 인력
            </p>

            <div className="grid w-full gap-6 md:grid-cols-2">
              {/* 2024년 신입 개발자들이 배우는 기술 */}
              <div className="glass flex flex-col gap-4 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  2024년 신입 개발자들이 배우는 기술
                </h3>
                <div className="flex flex-col gap-2">
                  {["React / Next.js", "TypeScript", "Tailwind CSS"].map(
                    (tech) => (
                      <div key={tech} className="flex items-center gap-2">
                        <span className="text-emerald-500">✅</span>
                        <span className="font-medium text-amber-900 dark:text-zinc-200">
                          {tech}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* 2024년 신입 개발자들이 안 배우는 기술 */}
              <div className="glass flex flex-col gap-4 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-rose-600 dark:text-rose-400">
                  2024년 신입 개발자들이 안 배우는 기술
                </h3>
                <div className="flex flex-col gap-2">
                  {["PHP (워드프레스)", "아임웹 자체 빌더"].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="text-rose-500">❌</span>
                      <span className="font-medium text-amber-900/70 dark:text-zinc-400">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass mt-4 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-amber-900 dark:text-zinc-200">
                &quot;나중에 다른 개발자한테 맡기려면?&quot;
              </p>
              <div className="flex flex-col gap-2 text-amber-800 dark:text-zinc-300">
                <p>
                  → React 개발자는{" "}
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    넘쳐납니다.
                  </span>
                </p>
                <p>
                  → 워드프레스 전문가 찾기?{" "}
                  <span className="font-bold text-rose-600 dark:text-rose-400">
                    점점 어려워집니다.
                  </span>
                </p>
              </div>
              <div className="mt-4 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 px-6 py-3 dark:from-emerald-900/30 dark:to-cyan-900/30">
                <p className="font-bold text-amber-900 dark:text-emerald-300">
                  트렌디한 기술 = 인력 수급 용이 = 유지보수 비용 절감
                </p>
              </div>
            </div>
          </section>

          {/* Demo section */}
          <section className="flex w-full flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300 dark:to-zinc-700" />
              <h2 className="text-xl font-semibold tracking-wide text-amber-900 dark:text-zinc-200">
                데모
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300 dark:to-zinc-700" />
            </div>

            <div className="grid w-full gap-6 sm:grid-cols-2">
              {[
                {
                  title: "기업 홍보 사이트",
                  description: "클라우드 인프라 서비스 마케팅 페이지",
                  tags: ["SaaS", "B2B", "랜딩페이지"],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  ),
                  color: "from-blue-500 to-cyan-500",
                  iconBg: "bg-blue-100/90 dark:bg-blue-900/50",
                  iconColor: "text-blue-600 dark:text-blue-400",
                  url: "https://company-demo-three.vercel.app/",
                  screenshot: "/screenshots/company.png",
                },
                {
                  title: "쇼핑몰",
                  description: "2026 다이어리 전문 이커머스 데모",
                  tags: ["E-Commerce", "상품목록", "결제"],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  ),
                  color: "from-violet-500 to-purple-500",
                  iconBg: "bg-violet-100/90 dark:bg-violet-900/50",
                  iconColor: "text-violet-600 dark:text-violet-400",
                  url: "https://demo-shopping-mall.vercel.app/",
                  screenshot: "/screenshots/shopping.png",
                },
                {
                  title: "여행 이벤트 페이지",
                  description: "2030 타겟 여행 프로모션 랜딩페이지",
                  tags: ["이벤트", "프로모션", "여행"],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  ),
                  color: "from-emerald-500 to-teal-500",
                  iconBg: "bg-emerald-100/90 dark:bg-emerald-900/50",
                  iconColor: "text-emerald-600 dark:text-emerald-400",
                  url: "https://demo-event-page-ten.vercel.app/",
                  screenshot: "/screenshots/travel.png",
                },
                {
                  title: "Claude Skills Hub",
                  description: "Claude AI 스킬 마켓플레이스 클론",
                  tags: ["AI", "마켓플레이스", "SaaS"],
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                  ),
                  color: "from-orange-500 to-rose-500",
                  iconBg: "bg-orange-100/90 dark:bg-orange-900/50",
                  iconColor: "text-orange-600 dark:text-orange-400",
                  url: "https://claude-skills-clone.vercel.app/",
                  screenshot: "/screenshots/claude.png",
                },
              ].map((demo) => (
                <a
                  key={demo.title}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[280px] flex-col gap-4 overflow-hidden rounded-2xl p-6 shadow-lg shadow-amber-500/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20 dark:shadow-violet-500/5 dark:hover:shadow-violet-500/10"
                >
                  {/* Background screenshot with blur */}
                  <div
                    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${demo.screenshot})` }}
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/70 dark:bg-black/70 dark:group-hover:bg-black/60" />

                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 -z-30 rounded-2xl bg-gradient-to-r ${demo.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40`} />

                  {/* Header with icon */}
                  <div className="flex items-start justify-between">
                    <div className={`rounded-xl p-3 shadow-lg ${demo.iconBg}`}>
                      <span className={demo.iconColor}>{demo.icon}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-amber-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-zinc-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-amber-900 transition-colors group-hover:text-amber-700 dark:text-zinc-100 dark:group-hover:text-white">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-amber-800/80 dark:text-zinc-300">
                      {demo.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm dark:bg-zinc-800/80 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-amber-700 dark:text-zinc-500">
              프로젝트 의뢰 및 문의
            </p>
            <a
              href="https://kmong.com/@%EC%98%A4%EB%A6%AC%EC%97%B0%EB%AA%BB%EB%AF%B8%EA%BE%B8%EB%9D%BC%EC%A7%80"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 px-8 py-4 font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/30 dark:from-violet-600 dark:to-cyan-600 dark:shadow-violet-500/25 dark:hover:shadow-violet-500/30"
            >
              <span className="relative z-10">문의하기</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-500 via-rose-500 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-cyan-600 dark:to-violet-600" />
            </a>
          </div>

          {/* Footer */}
          <footer className="flex flex-col items-center gap-4 pt-12">
            <div className="flex gap-6">
              {["GitHub", "Email", "Instagram"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-sm text-amber-600/60 transition-colors hover:text-amber-900 dark:text-zinc-600 dark:hover:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-amber-600/50 dark:text-zinc-700">
              © 2024 오리연못 미꾸라지. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
