import './App.css';
import { useState, useEffect } from 'react';
import { Titlebar } from './components/Titlebar';
import { Footer } from './components/Footer';
import Content from './components/Contents';
import Hero from './components/Hero';
import Background from './components/Background';

function getInitialTheme(): string {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function App() {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Background theme={theme} />
      <Titlebar setTheme={setTheme} theme={theme} />
      <main className="flex-1">
        <Hero />
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;
