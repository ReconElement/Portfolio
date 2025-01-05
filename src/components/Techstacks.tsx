/// <reference types="vite-plugin-svgr/client" />
import '../App.css';
import Nodejs from "../ui/Nodejs.tsx";
import Reactjs from "../ui/Reactjs.tsx";
import Python from "../ui/Python.tsx";
import Express from "../ui/Express.tsx"
import NextLogo from '../assets/nextjs-icon.svg?react';
import TypescriptLogo from "../assets/typescriptlang-icon.svg?react";
import Dotnet from "../assets/dotnet-ar21.svg?react";
import Rust from "../assets/rust-lang-icon.svg?react";
import Go from "../assets/golang-ar21.svg?react";
import Django from "../assets/djangoproject-ar21.svg?react";
const Techstack = ()=>{
    return(
        <div className="">
        <div className="grid grid-cols-2">
            <div className=''>
                <svg>
                    <Nodejs/>
                </svg>
            </div>
            <div>
                <svg>
                    <Reactjs/>
                </svg>
            </div>
            <div>
                <svg>
                    <Python/>
                </svg>
            </div>
            <div>
                <svg>
                    <Express/>
                </svg>
            </div>
            <div>
                <svg className="">
                    <TypescriptLogo/>
                </svg>
            </div>
            <div>
                <svg className=''>
                    <NextLogo/>
                </svg>
            </div>
            <div>
                <svg>
                    <Dotnet/>
                </svg>
            </div>
            <div>
                <svg>
                    <Rust/>
                </svg>
            </div>
            <div>
                <svg>
                    <Go/>
                </svg>
            </div>
            <div>
                <svg>
                    <Django/>
                </svg>
            </div>
        </div>
        </div>
    )
}

export default Techstack;