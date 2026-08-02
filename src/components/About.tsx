import '../App.css';

const About = () => {
  return (
    <div className="glass aero-sheen shadow-glass dark:shadow-glass-dark rounded-3xl px-6 py-9 sm:rounded-4xl sm:px-14 sm:py-16">
      <p className="eyebrow text-aero-600 dark:text-aero-400 text-[11px] font-semibold sm:text-xs">
        About
      </p>
      <h2 className="headline mt-4 max-w-3xl text-[clamp(1.6rem,5.5vw,2.25rem)] font-semibold">
        Scalable, robust software — written with intent.
      </h2>
      <p className="text-secondary mt-6 max-w-2xl text-[clamp(1rem,3.5vw,1.125rem)] leading-relaxed">
        I have a decent experience in writing scalable, robust software across
        imperative, object-oriented and functional paradigms. From backend
        pipelines to full-stack applications, I care about clean architecture,
        standard practices, and shipping systems that hold up under real load.
      </p>
    </div>
  );
};

export default About;
