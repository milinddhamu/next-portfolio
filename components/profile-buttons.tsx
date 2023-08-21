"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@nextui-org/button";
import { FiDownload, FiChevronRight } from 'react-icons/fi';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "@nextui-org/link";

const ProfileButtons = () => {
  const buttonVariants = {
    initial: { scale: 0.5,opacity:0 },
    animate: { scale: 1,opacity:1, transition: { ease:"anticipate",duration:1 }},
  };

  return (
    <span className="flex flex-row-reverse sm:flex-row gap-2 w-full">
      <Link href="/about">
        <motion.div
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button color="default" id="aboutme" variant="bordered" radius="lg">
            About me<FiChevronRight />
          </Button>
        </motion.div>
      </Link>
      <motion.div
        initial="initial"
        animate="animate"
        variants={buttonVariants}
      >
        <Button color="default" id="download" variant="bordered" radius="lg">
          Download CV<FiDownload />
        </Button>
      </motion.div>
      <Link href="/contact">
        <motion.div
          initial="initial"
          animate="animate"
          variants={buttonVariants}
        >
          <Button id="contact" color="default" variant="bordered" radius="lg">
            Contact
          </Button>
        </motion.div>
      </Link>
    </span>
  );
}

export default ProfileButtons;
