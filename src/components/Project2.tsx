
import { useState } from "react"
interface Project{
	id?:number,
    title: string,
    content: string
}
// type Project = {
// 	title: string,
// 	content: string
// }
const Projects2 = ()=>{
//   const [project, setProject] = useState<number>(0);

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

  return(
    <div>{Projects.map((project, id)=><Show title={project.title} content={project.content} id={id+1}/>)}</div>
  )

}

const Show = (project: Project)=>{
	const [display, setDisplay] = useState(1);
	const [expand, setExpand] = useState(false);
	const {title, content, id} = project;
	function setStuff(){
		if(id){
			setDisplay(id);
			setExpand(!expand);
		}
	}
	return (
		<div>
		<div className=".rationale-regular font-medium">
			<button className="" onClick={()=>setStuff()}>
				{title}
			</button>
		</div>
		{(display && expand) && <div>{content}</div>}
	</div>
	)
}
export default Projects2;