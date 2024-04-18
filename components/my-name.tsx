import Name from "@/components/name-anime";
import * as React from "react"; 
import {Spacer} from "@nextui-org/spacer";
import {Link} from "@nextui-org/link";
import RevealSentence from "@/components/reveal-text";

export const MyName = () => {
  const name = "Milind";
  const nameArray = name.split("");
  const textShadow = '.05em .05em 0 rgba(128, 128, 128, 0.5)';
  return (
    <>
    <div className="flex flex-col w-full gap-2">
    <h1 className="text-base opacity-80">
      <p className="wave pr-2 text-2xl">👋</p>Hey there, I{`\u0027`}m
      </h1>
      <span className="flex flex-row justify-center opacity-85 tracking-[0.15em]">
        {nameArray.map((character:string, index:number) => {
          return ( 
              <Name key={`${character}-${index}`}><h1 className={`text-7xl lg:text-8xl uppercase cursor-pointer font-black`}
              style={{textShadow}}  
              >{character}</h1></Name>
            )})}
      </span>
        <RevealSentence /> 
    </div>
    </>
  )
}

