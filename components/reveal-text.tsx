"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface RevealSentenceProps {
  sentence: string;
}

const RevealSentence: React.FC<RevealSentenceProps> = ({ sentence }) => {
  const letters: string[] = sentence.split('');

  return (
    <>
      <motion.div 
      initial={{ scaleY:0  , opacity:0.5 }}
      animate={{ scaleY:1  , opacity:1 }}
      transition={{ type: 'anticipated', ease: 'linear', duration: 0.4 }}
      className="px-2 mx-1 lg:px-4 lg:mx-2 border-l-2 border-gray-500/50 text-justify overflow-hidden">
        {letters.map((letter:string, letterIndex:number) => (
          <motion.span
            key={`${letter}-${letterIndex}`}
            initial={{ y:2,opacity:0 }}
            animate={{ y:0 ,opacity:1 }}
            transition={{type:"spring",ease: "linear", duration: 0.4, delay: 1 + (letter === ' ' ? 0.03 : 0.01) * letterIndex }}
            style={{ display: 'inline-block' }}
          >
            <h2 className="text-md md:text-lg font-thin italic">{letter === ' ' ? '\u00A0' : letter}</h2>
          </motion.span>
        ))}
      </motion.div>
    </>
  );
};

export default RevealSentence;
