/// <reference types="vite-plugin-svgr/client" />
import '../App.css';
import Nodejs from '../assets/logos/nodejs.svg?react';
import Reactjs from '../assets/logos/react.svg?react';
import Typescript from '../assets/logos/typescript.svg?react';
import Nextjs from '../assets/logos/nextjs.svg?react';
import Python from '../assets/logos/python.svg?react';
import Express from '../assets/logos/express.svg?react';
import Dotnet from '../assets/logos/dotnet.svg?react';
import Rust from '../assets/logos/rust.svg?react';
import Go from '../assets/logos/go.svg?react';
import Django from '../assets/logos/django.svg?react';

interface Tech {
  name: string;
  href: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

const stack: Tech[] = [
  { name: 'Node.js', href: 'https://nodejs.org/en', Logo: Nodejs },
  { name: 'React', href: 'https://react.dev/', Logo: Reactjs },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/', Logo: Typescript },
  { name: 'Next.js', href: 'https://nextjs.org/', Logo: Nextjs },
  { name: 'Python', href: 'https://www.python.org/', Logo: Python },
  { name: 'Express', href: 'https://expressjs.com/', Logo: Express },
  { name: '.NET', href: 'https://dotnet.microsoft.com/en-us/', Logo: Dotnet },
  { name: 'Rust', href: 'https://www.rust-lang.org/', Logo: Rust },
  { name: 'Go', href: 'https://go.dev/', Logo: Go },
  { name: 'Django', href: 'https://www.djangoproject.com/', Logo: Django },
];

const Techstack = () => {
  return (
    <div>
      <div className="mb-8 text-center sm:mb-10">
        <p className="eyebrow text-aero-600 dark:text-aero-400 text-[11px] font-semibold sm:text-xs">
          Toolkit
        </p>
        <h2 className="headline mt-3 text-[clamp(1.6rem,5vw,2.25rem)] font-semibold">
          Technologies I build with
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 sm:gap-4 md:grid-cols-5">
        {stack.map(({ name, href, Logo }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={name}
            className="glass aero-sheen group flex flex-col items-center justify-center gap-3 rounded-2xl px-3 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:rounded-3xl sm:px-4 sm:py-6"
          >
            <span className="text-secondary group-hover:text-aero-500 dark:group-hover:text-aero-400 flex h-9 w-9 items-center justify-center transition-all duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
              <Logo className="h-full w-full" />
            </span>
            <span className="text-secondary text-[11px] font-medium sm:text-xs">
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
