import {Image} from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { GrLinkedinOption ,GrReddit,GrTwitter} from "react-icons/gr"
import { HiMail } from "react-icons/hi"
import {Tooltip} from "@nextui-org/tooltip";

export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center min-h-screen">
      <section className="flex w-full max-w-screen-md px-4 my-4 gap-4">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Connect with me</h1>
      </section>
      <section className="flex w-full max-w-screen-md px-4 my-4">
        <div className="flex flex-col gap-2 w-full">
        <div className=" py-2  w-full">
        <Image src="/monkey.gif" alt="monkey" height="100%" width="100%"/>
        </div>
        <div className="flex flex-row items-center justify-start p-2 px-4 w-full gap-4 border-l-2 border-gray-500/50">
          <Tooltip content="E-mail">
        <Link href="mailto:milind.dhamu.123@gmail.com" id="mail">
          <Button isIconOnly color="default" variant="faded" size="lg">
             <HiMail className="scale-125" />
          </Button>
        </Link>
        </Tooltip>
        <Tooltip content="LinkedIn">
        <Link href="https://www.linkedin.com/in/milinddhamu/" id="linkedin">
          <Button isIconOnly color="primary" variant="faded" size="lg">
             <GrLinkedinOption className="scale-125" />
          </Button>
        </Link>
        </Tooltip>
        <Tooltip content="Reddit">
        <Link href="https://www.reddit.com/user/milinddhamu/" id="reddit">
          <Button isIconOnly color="warning" variant="faded" size="lg">
             <GrReddit className="scale-125" />
          </Button>
        </Link>
        </Tooltip>
        <Tooltip content="Twitter">
        <Link href="https://twitter.com/milind_dhamu" id="twitter">
          <Button isIconOnly color="primary" variant="faded" size="lg">
             <GrTwitter className="scale-125" />
          </Button>
        </Link>
        </Tooltip>
        </div>
        </div>
        </section>
    </main>
    </>
  )
}