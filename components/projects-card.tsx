"use client"
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { useDisclosure } from "react-use-disclosure";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FiChevronRight } from 'react-icons/fi';

interface ProjectCardProps {
  data: {
    title: string;
    slug: string;
    thumbnail: string;
    github?: string;
    live?: string;
    tech: string[];
    des: string;
  }
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { isOpen, open, close, toggle } = useDisclosure();
  return (
    <>
      <Card style={{borderRadius:"20px"}} isFooterBlurred className="h-[300px] border-1 border-gray-500/50 group">
        <CardHeader className="absolute z-10 top-1 flex-row justify-start items-start gap-2">
          <p className="text-sm text-white/80 font-bold group-hover:translate-x-1 transition-all duration-300 ">{data?.title}</p>
        </CardHeader>
        <Image
          removeWrapper
          alt={data?.title}
          className="z-0 w-full h-full scale-105 object-cover brightness-75 group-hover:scale-100 transition-all duration-300 ease-soft-spring"
          src={data?.thumbnail}
        />
        <CardFooter style={{borderRadius:"18px"}} className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden p-0 absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row gap-[2px] p-1">
              {data?.github &&
                <Link href={data?.github} isExternal >
                  <Button isIconOnly color="default" variant="faded" style={{borderRadius:"16px 4px 4px 16px"}} className="bg-opacity-50 border-opacity-50 text-lg" aria-label="github">
                    <AiFillGithub />
                  </Button>
                </Link>}
              {data?.live &&
                <Link href={data?.live} isExternal >
                  <Button isIconOnly color="primary" variant="faded" style={{borderRadius:"4px 16px 16px 4px"}} aria-label="live" className="bg-opacity-50 border-opacity-50 text-lg">
                    <AiOutlineLink />
                  </Button>
                </Link>}
            </div>
            <Link href={`/projects/${encodeURIComponent(data.slug)}`}>
            <Button color="default" style={{borderRadius:"16px"}} variant="faded" className="m-1 bg-opacity-50 border-opacity-50 group" >
              <span className="flex flex-row items-center gap-2">learn more <FiChevronRight className="text-lg mt-[1px] opacity-70 group-hover:opacity-100 transition-all group-hover:translate-x-1" /> </span>
            </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}