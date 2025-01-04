import '../../App.css';
import {useState} from 'react';
const Firstproj = ()=>{
    const [display, setDisplay] = useState(false);
    return(
        <div>
            <div className=".rationale-regular font-medium">
                <button className="" onClick={()=>setDisplay(!display)}>
                    Cozmos Application
                </button>
            </div>
            {display && <Proj/>}
        </div>
    )
}

const Proj =()=>{
    return(
        <div>
            As a backend developer for COZMOS I was involved in creating a comprehensive system for efficiently processing emails, extracting relevant information from PDF attachments, and seamlessly transmitting the extracted data to external APIs in a structured JSON format.
        </div>
    )
}
export default Firstproj;