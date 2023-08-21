import projectsData from "../../../projects/projects-data";
import {ProjectsType,ContentItem} from "../../../config/types";
import {ProjectVideo} from "../project-video";
import {Chip} from "@nextui-org/chip";
import { AiFillGithub, AiOutlineLink,AiFillFolder } from "react-icons/ai";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

export default async function Page({ params }: { params: { project: string } }) {
  const project = projectsData.find((project:ProjectsType) => project.slug === params.project);
  const textShadow = '3px 3px 0px rgba(128, 128, 128, 0.5)';
  const projectVideo = project?.video;

  return (
    <>
    <main className="flex flex-col items-center mb-8">
    <section className="flex max-w-screen-md w-full px-4 my-4 lg:my-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold" style={{textShadow}}>{project?.title}</h1>
      </section>
      {projectVideo && 
    <section className="flex flex-col max-w-screen-md w-full px-4 my-4 gap-4 h-full">
        <div className="overflow-hidden rounded-2xl border-2 border-gray-500/50">
            <ProjectVideo video={projectVideo} />
        </div>
      </section> }
      <section className="flex flex-col max-w-screen-md w-full px-5 gap-4">
      <div className="flex flex-row gap-2 border-l-2 border-[#292f46] px-3">
                      {project?.github &&
                        <Link href={project?.github}>
                          <Button isIconOnly color="default" variant="faded" aria-label="github">
                            <AiFillGithub />
                          </Button>
                        </Link>}
                      {project?.live &&
                        <Link href={project?.live}>
                          <Button isIconOnly color="primary" variant="faded" aria-label="live">
                            <AiOutlineLink />
                          </Button>
                        </Link>}
                    </div>
      <div className="grid-flow-col px-1 border-l-2 border-[#292f46]">
                  {project?.tech.map((tech:string)=><Chip className="m-1" classNames={{base:"min-w-fit",content:"text-tiny"}} radius="sm" key={tech} variant="flat" size="md">{tech}</Chip>)}
                </div>
      </section>
      {project?.details && 
      <section className="flex flex-col max-w-screen-md w-full px-4 my-2 gap-4">
        {project?.details.map((item:ContentItem,index:number)=>{
          if(!item.title){
            return
          }
          return (
            <div key={item.title}>
                <h2 className="text-xl lg:text-2xl mt-4 font-semibold">{item.title}</h2>
                <p className="text-base lg:text-lg mt-2 text-justify">{item.content}</p>
              </div>
          )})}
          <p className="mt-4 text-justify italic text-light">
        {project?.details.find((item: ContentItem) => !item.title)?.content}
        </p>
      </section>}
    </main>
    </>
  )
}