import { ProjectCard } from "@/components/projects-card"
import {MyProps} from "../config/types";
import projectsData from "@/projects/projects-data";
import {ProjectsType} from "../config/types"

export const MyProjects:React.FC<MyProps> = ({length}) => {
  const sliceLength = length === "full" ? projectsData?.length : 3;
  const slicedData = projectsData?.slice(0, sliceLength);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {slicedData?.map((project:ProjectsType , index:number)=><div key={project.title} className={`${(index === 0 && length === "some") ? "md:col-span-2" : ""}`}><ProjectCard data={project} /></div>)}
    </div>
    </>
  )
}