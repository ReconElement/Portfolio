import '../App.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = ()=>{
    return (
        <div className="flex flex-row justify-evenly bg-slate-500 text-black dark:bg-slate-900 dark:text-gray-800 px-5 py-3.5">
            <div>
                <a title="X" target="_blank" href='https://x.com/cutteflok'>
                <svg className='h-6 w-6 text-black dark:text-gray-800'>
                    <XIcon/>
                </svg>
                </a>
            </div>
            <div>
                <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/omkar-panda-40a010275/">
                <svg className='h-6 w-6 text-black dark:text-gray-800'>
                    <LinkedInIcon/>
                </svg>
                </a>
            </div>
            <div>
                <a title="GitHub" target="_blank" href="https://github.com/reconelement">
                <svg className='h-6 w-6 text-black dark:text-gray-800'>
                    <GitHubIcon/>
                </svg>
                </a>
            </div>
        </div>
    )
}
