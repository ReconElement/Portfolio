import '../App.css';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  content: string;
  tag: string;
  url?: string;
  github?: string;
}

const projectList: Omit<Project, 'id'>[] = [
  {
    title: 'Cozmos Application',
    tag: 'Backend',
    content:
      'As a backend developer for COZMOS I was involved in creating a comprehensive system for efficiently processing emails, extracting relevant information from PDF attachments, and seamlessly transmitting the extracted data to external APIs in a structured JSON format.',
  },
  {
    title: 'Hire',
    tag: 'Full Stack',
    content:
      'A full-stack, data-heavy application connecting HR professionals to engineers and other professionals. Marked by heavy usage of standard practices such as cookie-based JWT authentication, pagination, state management using Zustand, DB hard deletes, role management, and CRUD APIs. Backend API layer written in Express with TypeScript and Prisma ORM over a Postgres database.',
  },
  {
    title: 'CrocTrade',
    tag: 'Distributed Systems',
    content:
      'A trading application for crypto coins (SOL, BTC, ETH), marked by multiple services — Backend in Express, plus Engine and Poller services in TypeScript inside a Turborepo. The services communicate using Redis Streams as a persistent state message stream, with PostgreSQL for the database. The backend serves the frontend via REST APIs.',
    url: 'https://croctrade.omkarpanda.com/',
  },
  {
    title: 'Market Basket Analysis using Machine Learning',
    tag: 'Machine Learning',
    content:
      'Implemented various data-mining algorithms (Apriori, FP-growth) to generate strong association rules from retail sales figures and statistics, increasing item sales through strategic placement, discounting, and up-/down-sell strategies.',
  },
  {
    title: 'Face Mask Detection using ML',
    tag: 'Deep Learning',
    content:
      'Implemented deep-learning algorithms — the MobileNetV2 convolutional neural network architecture — to detect in real time whether a person is wearing a mask from a video feed. Undertaken and completed at the peak of the pandemic.',
  },
];

const Projects2 = () => {
  const projects: Project[] = projectList.map((p, i) => ({ ...p, id: i + 1 }));
  const [open, setOpen] = useState<number | null>(1);

  return (
    <div>
      <div className="mb-8 text-center sm:mb-10">
        <p className="eyebrow text-aero-600 dark:text-aero-400 text-[11px] font-semibold sm:text-xs">
          Selected Work
        </p>
        <h2 className="headline mt-3 text-[clamp(1.6rem,5.5vw,2.25rem)] font-semibold">
          Things I've built
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            project={project}
            isOpen={open === project.id}
            onToggle={() => setOpen(open === project.id ? null : project.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

const Card = ({ project, isOpen, onToggle }: CardProps) => {
  const { title, content, tag, url } = project;

  return (
    <div className="glass aero-sheen shadow-glass dark:shadow-glass-dark overflow-hidden rounded-3xl transition-all duration-300">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <div className="flex flex-col gap-1.5">
          <span className="text-aero-600 dark:text-aero-400 text-[11px] font-semibold uppercase tracking-wider">
            {tag}
          </span>
          <span className="headline text-lg font-semibold sm:text-xl">
            {title}
          </span>
        </div>
        <span
          className={`glass-strong grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 sm:px-8">
            <p className="text-secondary leading-relaxed">{content}</p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-aero-600 dark:text-aero-400 mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
              >
                Visit live app
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
