import { useEffect, useState } from 'react';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const STREET = [1, 2, 3, 4, 5].map((n) => `${base}/wallpapers/street-${n}.jpg`);
const SKYLINE = [1, 2, 3, 4, 5].map((n) => `${base}/wallpapers/skyline-${n}.jpg`);

const ROTATE_MS = 20000; // shift wallpaper every 20s

interface Props {
  theme: string;
}

const Background: React.FC<Props> = ({ theme }) => {
  const images = theme === 'dark' ? SKYLINE : STREET;
  const [index, setIndex] = useState(0);

  // Reset to the first image whenever the theme (and thus the pool) changes.
  useEffect(() => {
    setIndex(0);
  }, [theme]);

  // Auto-advance the slideshow.
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [images.length, theme]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={theme + i}
          className="bg-layer absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ease-in-out"
          style={{ backgroundImage: `url("${src}")`, opacity: i === index ? 1 : 0 }}
        />
      ))}
      {/* Readability + aero tint scrim over the wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-white/60 dark:from-slate-950/65 dark:via-slate-950/40 dark:to-slate-950/70" />
    </div>
  );
};

export default Background;
