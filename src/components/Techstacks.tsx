/// <reference types="vite-plugin-svgr/client" />
import "../App.css";
import Nodejs from "../ui/Nodejs.tsx";
import Reactjs from "../ui/Reactjs.tsx";
import Python from "../ui/Python.tsx";
import Express from "../ui/Express.tsx";
import NextLogo from "../assets/nextjs-icon.svg?react";
import TypescriptLogo from "../assets/typescriptlang-icon.svg?react";
import Dotnet from "../assets/dotnet-ar21.svg?react";
import Rust from "../assets/rust-lang-icon.svg?react";
import Go from "../assets/golang-ar21.svg?react";
import Django from "../assets/djangoproject-ar21.svg?react";
const Techstack = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="">
          <svg>
            <a
              title="nodejs"
              target="_blank"
              rel=""
              href="https://nodejs.org/en"
            >
              <Nodejs />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a title="reactjs" target="_blank" rel="" href="https://react.dev/">
              <Reactjs />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a
              title="python"
              target="_blank"
              rel=""
              href="https://www.python.org/"
            >
              <Python />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a
              title="express"
              target="_blank"
              rel=""
              href="https://expressjs.com/"
            >
              <Express />
            </a>
          </svg>
        </div>
        <div>
          <svg className="">
            <a
              title="typescript"
              target="_blank"
              rel=""
              href="https://www.typescriptlang.org/"
            >
              <TypescriptLogo />
            </a>
          </svg>
        </div>
        <div>
          <svg className="">
            <a title="nextjs" target="_blank" rel="" href="https://nextjs.org/">
              <NextLogo />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a
              title="dotnet"
              target="_blank"
              rel=""
              href="https://dotnet.microsoft.com/en-us/"
            >
              <Dotnet />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a
              title="rust"
              target="_blank"
              rel=""
              href="https://www.rust-lang.org/"
            >
              <Rust />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a title="Golang" target="_blank" rel="" href="https://go.dev/">
              <Go />
            </a>
          </svg>
        </div>
        <div>
          <svg>
            <a
              title="Django"
              target="_blank"
              rel=""
              href="https://www.djangoproject.com/"
            >
              <Django />
            </a>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Techstack;
