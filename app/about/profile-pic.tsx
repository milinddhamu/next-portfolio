"use client"
import React from 'react';
import { motion  } from 'framer-motion';
import {Avatar} from "@nextui-org/avatar";
import {Image} from "@nextui-org/image";
const ProfilePic: React.FC = () => {

  return (
    <>
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween", ease: "anticipate", duration: 0.6
      }}
    >
    {/* <Avatar src="/profile.jpg" alt="profile" classNames={{base:"rounded-3xl"}} className="w-32 h-32 text-large lg:w-40 lg:h-40 drop-shadow-lg" /> */}
    <Image
      isBlurred
      width={150}
      src="/profile.jpg"
      alt="Profile Pic"
      className="rounded-3xl"
    />
    </motion.div>
    </>
    );
};

export default ProfilePic;
