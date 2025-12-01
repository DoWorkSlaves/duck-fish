"use client";

import { useRef, useState, MouseEvent } from "react";
import KaistLogo from "./KaistLogo";

interface MemberProps {
  department: string;
  frameworks: string[];
  languages: string[];
  databases: string[];
  etc: string[];
  experience: string;
  memberNumber: number;
}

export default function MemberCard({
  department,
  frameworks,
  languages,
  databases,
  etc,
  experience,
  memberNumber,
}: MemberProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Glare effect
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransform("");
    setGlareStyle({ opacity: 0 });
  };

  const gradients = [
    "from-violet-500 via-purple-500 to-indigo-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
  ];

  const darkGradients = [
    "dark:from-violet-600 dark:via-purple-600 dark:to-indigo-600",
    "dark:from-cyan-600 dark:via-blue-600 dark:to-indigo-600",
    "dark:from-emerald-600 dark:via-teal-600 dark:to-cyan-600",
  ];

  const iconColors = [
    "text-violet-600 dark:text-violet-400",
    "text-cyan-600 dark:text-cyan-400",
    "text-emerald-600 dark:text-emerald-400",
  ];

  const bgColors = [
    "bg-violet-100 dark:bg-violet-900/30",
    "bg-cyan-100 dark:bg-cyan-900/30",
    "bg-emerald-100 dark:bg-emerald-900/30",
  ];

  const borderColors = [
    "border-violet-200 dark:border-violet-800",
    "border-cyan-200 dark:border-cyan-800",
    "border-emerald-200 dark:border-emerald-800",
  ];

  const idx = memberNumber - 1;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer transition-all duration-200 ease-out"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      {/* Card glow effect */}
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${gradients[idx]} ${darkGradients[idx]} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50`}
      />

      {/* Main card */}
      <div
        className={`glass relative overflow-hidden rounded-2xl border-2 ${borderColors[idx]} p-6 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl sm:p-8`}
      >
        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
          style={glareStyle}
        />

        {/* Member number badge */}
        <div
          className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${gradients[idx]} ${darkGradients[idx]} opacity-20 blur-2xl`}
        />
        <div
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradients[idx]} ${darkGradients[idx]} text-lg font-bold text-white shadow-lg`}
        >
          {memberNumber}
        </div>

        {/* KAIST Logo */}
        <div className="mb-4 flex justify-center">
          <KaistLogo className="h-16 w-auto opacity-80" />
        </div>

        {/* Department */}
        <div className="mb-6 flex justify-center">
          <span
            className={`inline-flex items-center gap-2 rounded-full ${bgColors[idx]} px-4 py-2 text-sm font-semibold ${iconColors[idx]}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            {department}
          </span>
        </div>

        {/* Skills sections */}
        <div className="space-y-4">
          {/* Frameworks */}
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
              Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => (
                <span
                  key={fw}
                  className="rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1 text-sm font-medium text-amber-800 shadow-sm transition-transform hover:scale-105 dark:from-zinc-800 dark:to-zinc-700 dark:text-zinc-200"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-lg bg-gradient-to-r from-violet-50 to-purple-50 px-3 py-1 text-sm font-medium text-violet-800 shadow-sm transition-transform hover:scale-105 dark:from-violet-900/30 dark:to-purple-900/30 dark:text-violet-200"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              Databases
            </h4>
            <div className="flex flex-wrap gap-2">
              {databases.map((db) => (
                <span
                  key={db}
                  className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 px-3 py-1 text-sm font-medium text-cyan-800 shadow-sm transition-transform hover:scale-105 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-cyan-200"
                >
                  {db}
                </span>
              ))}
            </div>
          </div>

          {/* Etc */}
          <div>
            <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
              Tools & Others
            </h4>
            <div className="flex flex-wrap gap-2">
              {etc.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1 text-sm font-medium text-emerald-800 shadow-sm transition-transform hover:scale-105 dark:from-emerald-900/30 dark:to-teal-900/30 dark:text-emerald-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience badge */}
        <div className="mt-6 flex justify-center">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradients[idx]} ${darkGradients[idx]} px-4 py-2 text-sm font-bold text-white shadow-lg`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {experience}
          </div>
        </div>
      </div>
    </div>
  );
}
