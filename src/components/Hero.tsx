import '../App.css';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-16 text-center sm:px-6 sm:pt-28"
    >
      <div className="animate-fade-up glass-strong aero-sheen text-secondary mb-6 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide sm:mb-7">
        <span className="eyebrow text-[10px] sm:text-[11px]">Software Developer</span>
      </div>

      <h1
        className="display legible animate-fade-up text-[clamp(2.75rem,11vw,5.5rem)] font-bold"
        style={{ animationDelay: '0.05s' }}
      >
        Omkar Panda
      </h1>

      <p
        className="display legible-accent animate-fade-up mt-3 bg-gradient-to-r from-aero-500 via-aero-400 to-aero-700 bg-clip-text text-[clamp(1.5rem,6.5vw,3rem)] font-semibold text-transparent"
        style={{ animationDelay: '0.12s' }}
      >
        Backend & systems engineering.
      </p>

      <p
        className="legible animate-fade-up mt-6 max-w-xl text-[clamp(1rem,3.5vw,1.25rem)] font-medium leading-relaxed sm:mt-7"
        style={{ color: 'var(--text-primary)', animationDelay: '0.2s' }}
      >
        I design and build scalable, robust software — writing imperative,
        object-oriented and functional code across the full stack.
      </p>

      <div
        className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
        style={{ animationDelay: '0.28s' }}
      >
        <a
          href="#work"
          className="rounded-full bg-gradient-to-b from-aero-500 to-aero-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
        >
          View my work
        </a>
        <a
          href="#about"
          className="glass glass-strong text-secondary rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95"
        >
          About me
        </a>
      </div>
    </section>
  );
};

export default Hero;
