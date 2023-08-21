import { ProjectCard } from "@/components/projects-card"
import {MyProps} from "../config/types";
import projectsData from "@/projects/projects-data";
import {ProjectsType} from "../config/types"

export const MyProjects:React.FC<MyProps> = ({length}) => {
  const sliceLength = length === "full" ? projectsData?.length : 2;
  const slicedData = projectsData?.slice(0, sliceLength);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {slicedData?.map((project:ProjectsType , index:number)=><ProjectCard data={project} key={project.title} />)}
    </div>
    </>
  )
}