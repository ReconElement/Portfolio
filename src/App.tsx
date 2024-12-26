import './App.css'
import { useState, useEffect } from 'react';
import {Titlebar } from './components/Titlebar';
import { Footer } from './components/Footer';
function App() {
  const [theme, setTheme] = useState<string>('light');
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className='flex flex-col'>
    <div><Titlebar setTheme={setTheme} theme={theme}/></div>
    <div className="h-full">Content</div>
    <div><Footer/></div>
    </div>
  )
}

export default App;
