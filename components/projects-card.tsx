"use client"
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { ProjectsType } from "../config/types"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { useDisclosure } from "react-use-disclosure";
import { Chip } from "@nextui-org/chip";
import { AiFillGithub, AiOutlineLink,AiFillFolder } from "react-icons/ai";

interface ProjectCardProps {
  data: {
    title: string;
    slug: string;
    thumbnail: string;
    github?: string;
    live?: string;
    tech: string[];
    des: string;
  };
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { isOpen, open, close, toggle } = useDisclosure();
  return (
    <>
      <Card isFooterBlurred className=" h-[300px] min-w-96 border-1 border-gray-500/50">
        <CardHeader className="absolute z-10 top-1 flex-row justify-between items-start gap-2">
          <p className="text-sm text-white/80 font-bold">{data?.title}</p>
          <Link href={`/projects/${encodeURIComponent(data.slug)}`}>
                  <Button isIconOnly color="default" variant="faded" aria-label="github">
                    <AiFillFolder />
                  </Button>
                </Link>
        </CardHeader>
        <Image
          removeWrapper
          alt={data?.title}
          className="z-0 w-full h-full object-cover"
          src={data?.thumbnail}
        />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden p-1 absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row gap-2 p-1">
              {data?.github &&
                <Link href={data?.github}>
                  <Button isIconOnly color="default" variant="faded" aria-label="github">
                    <AiFillGithub />
                  </Button>
                </Link>}
              {data?.live &&
                <Link href={data?.live}>
                  <Button isIconOnly color="primary" variant="faded" aria-label="live">
                    <AiOutlineLink />
                  </Button>
                </Link>}
            </div>
            <Button color="default" variant="faded" className="m-1" onPress={open}>
              Read more
            </Button>
          </div>
        </CardFooter>
        <Modal
          classNames={{
            body: "py-6",
            base: "border-1-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
            header: "border-b-[1px] border-[#292f46]",
            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
          backdrop="blur"
          isOpen={isOpen}
          onOpenChange={toggle}
          scrollBehavior="inside"
        >
          <ModalContent>
            {(close) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h2 className="text-extrabold">{data?.title}</h2>
                </ModalHeader>
                <div className="grid-flow-col p-1 px-3 border-b-[1px] border-[#292f46]">
                  {data?.tech.map((tech: string) => <Chip className="m-1" classNames={{ base: "min-w-fit", content: "text-tiny" }} radius="sm" key={tech} variant="flat" color="default" size="md">{tech}</Chip>)}
                </div>
                <ModalBody >
                  <p className="text-justify">{data?.des}</p>
                </ModalBody>
                <ModalFooter className="p-2 m-0">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-row gap-2">
                      {data?.github &&
                        <Link href={data?.github}>
                          <Button isIconOnly color="default" variant="faded" aria-label="github">
                            <AiFillGithub />
                          </Button>
                        </Link>}
                      {data?.live &&
                        <Link href={data?.live}>
                          <Button isIconOnly color="default" variant="faded" aria-label="live">
                            <AiOutlineLink />
                          </Button>
                        </Link>}
                    </div>
                    <Link href={`/projects/${encodeURIComponent(data.slug)}`}>
                      <Button color="primary" variant="faded" aria-label="live">
                        Open project
                      </Button>
                    </Link>
                  </div>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Card>
    </>
  )
}