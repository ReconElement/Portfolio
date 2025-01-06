import '../App.css';
import Firstproj from "./Projects/Firstproj";
import Secondproj from "./Projects/Secondproj";
import Thirdproj from "./Projects/Thirdproj";
const Projects = ()=>{
    return(
        <div>
            <div className="lexend-zetta text-center text-xl">
                <span>Projects</span>
            </div>
            <div>
                <ul>
                <li><div><Firstproj/></div></li>
                <li><div><Secondproj/></div></li>
                <li><div><Thirdproj/></div></li>
                </ul>
            </div>
        </div>
    )
};
export default Projects;