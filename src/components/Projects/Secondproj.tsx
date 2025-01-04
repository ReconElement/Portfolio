import '../../App.css';
import {useState} from 'react';
const Secondproj = ()=>{
    const [display, setDisplay] = useState(false);
    return(
        <div>
            <div className=".rationale-regular font-medium">
                <button className="" onClick={()=>setDisplay(!display)}>
                    Market Basket Analysis using Machine Learning 
                </button>
            </div>
            {display && <Proj/>}
        </div>
    )
}

const Proj =()=>{
    return(
        <div>
            In this project we implemented various data mining algorithms (Apriori, FP-pattern growth) to generate strong association rules by utilizing sales figures and statistics obtained from retail to increase the sales of items by strategic placement, discount and other up and down sell sales strategies.
        </div>
    )
}
export default Secondproj;