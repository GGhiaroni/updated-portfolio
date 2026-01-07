"use client";

import { useEffect, useRef } from "react";

export function MouseSpotlight() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgb(255, 255, 255), transparent 80%)`,
        }}
      />
    </div>
  );
}
