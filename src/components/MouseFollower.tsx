"use client";

import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      {/* Main cursor glow - Light mode */}
      <div
        className="pointer-events-none fixed z-50 mix-blend-multiply transition-transform duration-150 ease-out dark:hidden"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          opacity: isVisible ? 0.7 : 0,
          transform: isClicking ? "scale(0.8)" : "scale(1)",
        }}
      >
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-amber-200/25 via-rose-200/25 to-violet-200/25 blur-3xl" />
      </div>

      {/* Main cursor glow - Dark mode */}
      <div
        className="pointer-events-none fixed z-50 hidden mix-blend-screen transition-transform duration-150 ease-out dark:block"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          opacity: isVisible ? 1 : 0,
          transform: isClicking ? "scale(0.8)" : "scale(1)",
        }}
      >
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
      </div>

      {/* Inner cursor dot */}
      <div
        className="pointer-events-none fixed z-50 transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
          transform: isClicking ? "scale(0.5)" : "scale(1)",
        }}
      >
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 shadow-lg shadow-amber-400/30 dark:from-violet-400 dark:to-cyan-400 dark:shadow-violet-500/50" />
      </div>

      {/* Trailing particles effect - Light mode */}
      <div
        className="pointer-events-none fixed z-40 mix-blend-multiply transition-all duration-300 ease-out dark:hidden"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-r from-rose-100/40 to-violet-100/40 blur-2xl" />
      </div>

      {/* Trailing particles effect - Dark mode */}
      <div
        className="pointer-events-none fixed z-40 hidden mix-blend-screen transition-all duration-300 ease-out dark:block"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          opacity: isVisible ? 0.6 : 0,
        }}
      >
        <div className="h-[200px] w-[200px] animate-pulse rounded-full bg-gradient-to-r from-cyan-500/15 to-fuchsia-500/15 blur-2xl" />
      </div>
    </>
  );
}
