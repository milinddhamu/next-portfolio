"use client"

import { useState,useEffect } from "react";
import { motion, AnimatePresence, useScroll, useCycle, useAnimationControls } from "framer-motion"; 

interface NameProps {
  children: React.ReactNode;
}

const Name: React.FC<NameProps> = ({children}) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false);
  const rubberAnime = () => {
    controls.start({
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, 0.55, 1)',
        'scale3d(0.75, 1.25, 1)',
        'scale3d(1.25, 0.85, 1)',
        'scale3d(0.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ]  
    })
    setIsPlaying(true)
  }
  return (
      <motion.span
        animate={controls}
        onMouseOver={() => {
          if(!isPlaying) 
            rubberAnime();
        }}
        onAnimationComplete={() => setIsPlaying(false)}
        className="inline-block"
      >
        {children}
      </motion.span>
  );
};

export default Name;