"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { LenisContext } from "@/components/context/LenisContext";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null); // exposed to context

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) return; // disable lenis on mobile

    const instance = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
    });

    lenisRef.current = instance;

    queueMicrotask(() => {
      setLenis(instance);
    });

    const raf = (time: number) => {
      instance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => instance.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
