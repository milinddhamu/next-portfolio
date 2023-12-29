import Name from "@/components/name-anime";
import * as React from "react"; 
import {Spacer} from "@nextui-org/spacer";
import {Link} from "@nextui-org/link";
import RevealSentence from "@/components/reveal-text"
export const MyName = () => {
  const name = "Milind";
  const nameArray = name.split("");
  const sentence = `I'm a frontend enthusiast at heart, I'm embarking on an exciting journey into Full Stack Development. Each project in my portfolio is a reflection of my dedication and authenticity, carefully crafted from the ground up.`
  const textShadow = '3px 3px 0px rgba(128, 128, 128, 0.5)';
  return (
    <>
    <div>
    <h1 className="text-lg md:text-xl font-thin">
      <a className="wave pr-2">👋</a>Hey there, I{`\u0027`}m
      </h1>
      <span className="flex flex-row justify-center">
        {nameArray.map((character:string, index:number) => {
          return ( 
              <Name key={`${character}-${index}`}><h1 className={`text-7xl lg:text-8xl font-extrabold uppercase cursor-pointer`} style={{textShadow}}>{character}</h1></Name>
            )})}
      </span>
    <Spacer y={3} />
    <div>
    {
        <RevealSentence  sentence={sentence}/> 
    }
    </div>
    </div>
    </>
  )
}

