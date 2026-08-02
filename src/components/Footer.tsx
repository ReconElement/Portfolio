import '../App.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const socials = [
  { title: 'X', href: 'https://x.com/cutteflok', Icon: XIcon },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/omkar-panda-40a010275/',
    Icon: LinkedInIcon,
  },
  { title: 'GitHub', href: 'https://github.com/reconelement', Icon: GitHubIcon },
];

export const Footer = () => {
  return (
    <footer className="px-4 pb-6">
      <div className="glass aero-sheen shadow-glass dark:shadow-glass-dark mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-4xl px-8 py-8 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="headline text-base font-semibold">Omkar Panda</p>
          <p className="text-muted text-sm">
            Software Developer · Let's build something.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ title, href, Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={title}
              aria-label={title}
              className="glass-strong text-secondary hover:text-aero-600 dark:hover:text-aero-400 grid h-11 w-11 place-items-center rounded-full transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Icon fontSize="small" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
