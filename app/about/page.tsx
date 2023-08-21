import {EducationType,ProfileType,LinksType,TechstackItem,TechstackCategory} from "@/config/types";
import MineData from "../../profile/profile-data";
import ProfilePic from "./profile-pic";
import {Divider} from "@nextui-org/divider";
import { MyProjects } from "../../components/my-projects";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {FiChevronRight } from 'react-icons/fi';
import {Chip} from "@nextui-org/chip";
import {Avatar} from "@nextui-org/avatar";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About - Milind Dhamu',
  description: 'About page',
}
export default function Page() {
  const textShadow = '1px 1px 0px rgba(128, 128, 128, 0.5)';
  return (
    <>
    <main className="flex flex-col items-center z-10">
      <section className="flex flex-col md:flex-row max-w-screen-md w-full px-4 my-6 lg:my-8 justify-around items-center gap-4 md:gap-0">
      <ProfilePic />
      <div className="flex flex-col items-center md:items-start gap-1 md:gap-2">
      <h1 className="text-2xl md:text-3xl lg:text-4xl" style={{textShadow}}>{MineData.name}</h1>
      <h2 className="font-light text-md">Aspiring Web Developer | Tech Enthusiast | Gamer</h2>
      <h2 className="opacity-80 text-sm">Mail me at{" "}{MineData.email}</h2>
      </div>
      </section>
      <Divider className="max-w-screen-lg bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0" orientation="horizontal"/>
      <section className="flex flex-col max-w-screen-md w-full px-4 gap-4 my-4 mb-6">
        <h1 className="text-xl lg:text-2xl font-semibold">Education</h1>
        <div className="flex flex-col gap-2 px-3 border-l-2 border-gray-500/50 mx-1">
      {MineData.education.map((item:EducationType , index:number)=>{
        return (
        <>
        <div className="flex flex-row justify-between" key={item.school}>
        <div>
        <h2 className="text-md md:text-lg font-semibold">{item.degree}</h2>
        <h2 className="text-xs md:text-sm opacity-70">{item.year}</h2>
        </div>
        <div className="flex flex-col items-end">
        <h2 className="text-md md:text-lg">{item.school}</h2>
        <h2 className="text-xs md:text-sm opacity-70">{item.location}</h2>
        </div>
        </div>
      </>
      )
    })}
      </div>
      </section>
      <Divider className="max-w-screen-lg bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0" orientation="horizontal"/>
      <section className="flex flex-col max-w-screen-md w-full px-4 gap-4 my-4 mb-6">
        <h1 className="text-xl lg:text-2xl font-semibold">About me</h1>
        <p className="text-justify md:text-md px-3">{MineData.description}</p>
      </section>
      <Divider className="max-w-screen-lg bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0" orientation="horizontal"/>
      <section className="flex flex-col max-w-screen-md w-full px-4 gap-4 my-4">
        <h1 className="text-xl lg:text-2xl font-semibold">Tech Stack</h1>
        <div className="flex flex-col gap-1 px-4 border-l-2 border-dashed border-gray-500/50 mx-1">
        {MineData.techstack.map((item:TechstackCategory)=>{
          return (
            <>
            <div key={`${item.category}`} className="flex flex-col gap-2">
            <h1 className="min-w-max font-semibold">{item.category}&#58;</h1>
            <div className="grid-flow-col gap-2">
            {item.items.map((tech:TechstackItem)=>{
              return (
                <Chip
                  key={tech.name}
                  variant="flat"
                  className="m-1"
                  avatar={
                    <Avatar
                      name={tech.name}
                      src={tech.image}
                      radius="sm"
                      classNames={{img:"scale-75"}}
                    />
                  }
                >
                  {tech.name}
                </Chip>
              )
            })}
            </div>
            </div>
            </>
          )
        })}
        </div>
      </section>
      <section className="flex flex-col max-w-screen-md w-full px-4 gap-4 mb-4">
      <h1 className="text-xl lg:text-2xl font-semibold">Skills</h1>
      <div className="flex flex-col gap-2 px-4 border-l-2 border-dashed border-gray-500/50 mx-1">
      {MineData.skills.map((item:string) => <h3 key={item}>{item}</h3> )}
      </div>
      </section>
      <Divider className="max-w-screen-lg bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0" orientation="horizontal" />
      <section className="flex flex-col max-w-screen-md w-full px-4 gap-4 my-4 mb-6">
      <h1 className="text-xl lg:text-2xl font-semibold">My Projects</h1>
      <MyProjects length="some" />
      <div className="flex flex-row-reverse sm:flex-row w-full px-2">
        <Link href="/projects">
      <Button id="allprjects" color="default" variant="bordered" radius="lg">
        View all <FiChevronRight />
      </Button>
      </Link>
        </div>
      </section>
    </main>
    </>
  )
}