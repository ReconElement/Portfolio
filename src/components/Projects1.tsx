import '../App.css';
import { useState } from 'react';
type Project={
    title: string,
    content: string
};
interface Props{
    Projects: Project[],
    project: number
}

interface dataprops{
    data: Project
}


const Projects1 = ()=>{
  const [project, setProject] = useState<number>(0);

  const Projects: Array<Project> = [
    {
      title: "Cozmos Application",
      content:
        "As a backend developer for COZMOS I was involved in creating a comprehensive system for efficiently processing emails, extracting relevant information from PDF attachments, and seamlessly transmitting the extracted data to external APIs in a structured JSON format.",
    },
    {
      title: "Market Basket Analysis using Machine Learning",
      content:
        "In this project we implemented various data mining algorithms (Apriori, FP-pattern growth) to generate strong association rules by utilizing sales figures and statistics obtained from retail to increase the sales of items by strategic placement, discount and other up and down sell sales strategies.",
    },
    {
      title: "Face Mask Detection using ML",
      content:
        "In this project we implemented deep learning algorithms namely MobileNets 2 convolutional neural network architecture to detect whether a person has a mask on or not in real time from video feed, at the peak of the corona pandemic this project was undertaken and completed. ",
    },
  ];
//   return (
    // <div>
    //   <div className="lexend-zetta text-center text-xl">
    //     <span>Projects</span>
    //   </div>
      {/* <div>
        <ul>
          {Projects.map((obj, id) => {
            return (
              <li
                onClick={() => {
                  setProject(id + 1);
                }}
                key={id + 1}
              >
                {obj.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div>{<Show Projects={Projects} project={project} />}</div>
    </div>
  ); */}
  return(
    <div>
        <div className="lexend-zetta text-center text-xl">
            <span>Projects</span>
        </div>
        <div>
            <ul>
            {Projects.map((obj, id)=>{
                return(
                    <li
                    onClick={()=>{setProject(id+1)}}
                    key={id+1}
                    >{obj.title}
                    <div>{<Projdisplay Projects={Projects} project={project}/>}</div>
                    </li>
                )
            })} 
            </ul>
        </div>
    </div>
  )
}

// const Show: React.FC<{Projects: Array<Project>, project: number}> = (Projects: Array<Project>, project: number)=>{
//     let data: {title: string, content: string} = {title: "loading...", content: "loading..."};
//     data = Projects[project];
//     return(
//         <div>
//             {data.content}
//         </div>
//     )
// }

// const Show = (props: Props)=>{
//     let data = {title: "loading...", content: "loading..."};
//     data = props.Projects[props.project-1];
//     return(
//         <div>
//             {data?.content}
//         </div>
//     )
// };
const Projdisplay = (props: Props) =>{
    const [display, setDisplay] = useState(false);
    const data: Project = props.Projects[props.project-1];
    return(
    <div>
        <div className=".rationale-regular font-medium">
            <button className="" onClick={()=>setDisplay(!display)}>
                {data?.content}
            </button>
        </div>
        <div>{display && <Contentdisplay data={data}/>}</div>
    </div>
    )
}

const Contentdisplay = (data: dataprops) =>{
    return(
        <div>
            {data?.data?.title}
        </div>
    )
}

export default Projects1;

//<div><Projdisplay Projects={Projects} project={project}/></div>
