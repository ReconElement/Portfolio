import '../App.css';
import About from "./About";
import Projects from "./Projects";
import Projects1 from "./Projects1";
const Personal = ()=>{
    return(
        <div className="w-full">
            <div>
                <About/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>
                <Projects1/>
            </div>
        </div>
    )
}

export default Personal;