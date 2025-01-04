import '../../App.css';
import {useState} from 'react';
const Thirdproj = ()=>{
    const [display, setDisplay] = useState(false);
    return(
        <div>
            <div className=".rationale-regular font-medium">
                <button className="" onClick={()=>setDisplay(!display)}>
                    Face Mask Detection using ML
                </button>
            </div>
            {display && <Proj/>}
        </div>
    )
}

const Proj =()=>{
    return(
        <div>
            In this project we implemented deep learning algorithms namely MobileNets 2 convolutional neural network architecture to detect whether a person has a mask on or not in real time from video feed, at the peak of the corona pandemic this project was undertaken and completed. 
        </div>
    )
}
export default Thirdproj;