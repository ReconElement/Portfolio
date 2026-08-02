import '../App.css';

interface Props {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

export const Titlebar: React.FC<Props> = ({ setTheme, theme }) => {
  const isDark = theme === 'dark';
  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="glass aero-sheen shadow-glass dark:shadow-glass-dark mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-2.5 sm:px-7">
        <a href="#top" className="headline text-[15px] font-semibold sm:text-base">
          Omkar Panda
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="#work"
            className="text-secondary hover:text-aero-600 dark:hover:text-aero-400 rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-secondary hover:text-aero-600 dark:hover:text-aero-400 rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
          >
            About
          </a>

          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="glass-strong relative ml-1 flex h-9 w-9 items-center justify-center rounded-full transition-transform active:scale-90"
          >
            <span className="text-base leading-none">{isDark ? '☾' : '☀'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
