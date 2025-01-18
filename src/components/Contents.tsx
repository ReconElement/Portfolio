import '../App.css';
import Techstack from "./Techstacks";
import Personal from "./Personal";
const Content = ()=>{
    return(
        <div className="flex md:flex-row md:justify-stretch flex-col justify-stretch  bg-slate-500 text-black dark:bg-slate-900 dark:text-gray-800 px-5 py-3.5">
            <Techstack/>
            <Personal/>
        </div>
    )
}

export default Content;