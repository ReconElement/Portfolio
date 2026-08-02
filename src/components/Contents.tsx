import '../App.css';
import Techstack from './Techstacks';
import About from './About';
import Projects2 from './Project2';

const Content = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24">
      <section id="about" className="scroll-mt-24 py-12">
        <About />
      </section>

      <section id="stack" className="scroll-mt-24 py-12">
        <Techstack />
      </section>

      <section id="work" className="scroll-mt-24 py-12">
        <Projects2 />
      </section>
    </div>
  );
};

export default Content;
