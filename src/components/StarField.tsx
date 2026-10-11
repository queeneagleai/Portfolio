import { useMemo } from "react";

interface Star {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

export default function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 60 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() < 0.85 ? 2 : 3,
      delay: `${(Math.random() * 6).toFixed(2)}s`,
      duration: `${(3 + Math.random() * 4).toFixed(2)}s`,
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(46,139,119,0.08),_transparent_60%)]" />
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/70"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
