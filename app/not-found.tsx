'use client'
import {Image} from "@nextui-org/image";
import { useTheme } from "next-themes";
import NextLink from "next/link";

export default function Custom404(){
  const {theme} = useTheme()
  return (
    <div className={`flex flex-col h-screen max-h-screen -mt-18 w-full justify-center gap-10 items-center invert-0 ${theme === "light" ? "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-stone-100" : "" } `}>
      <Image 
      src="/NotFound.gif"
      height="100%"
      width={200}
      alt="404"
      className={`${theme === "dark" ? "invert" : ""}`}
      />
      <span className="flex flex-row gap-2 w-full justify-center text-blue-500">
        <NextLink href="/"><h1 className="text-blue-500 hover:underline">Home</h1></NextLink>
        <p>&#8226;</p>
        <NextLink href="/about"><h1 className="text-blue-500 hover:underline">About</h1>
        </NextLink>
      </span>
    </div>
  );
}
