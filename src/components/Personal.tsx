import About from "./About";
import Projects from "./Projects";
const Personal = ()=>{
    return(
        <div className="w-full">
            <div>
                <About/>
            </div>
            <div>
                <Projects/>
            </div>
        </div>
    )
}

export default Personal;