import '../App.css';
import About from "./About";
// import Projects1 from "./Projects1";
import Projects2 from './Project2';
const Personal = ()=>{
    return(
        <div className="w-full">
            <div>
                <About/>
            </div>
            <div>
                <Projects2/>
            </div>
        </div>
    )
}

export default Personal;