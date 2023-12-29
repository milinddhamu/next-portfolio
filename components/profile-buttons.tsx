import React from 'react';
import { Button } from "@nextui-org/button";
import { FiDownload, FiChevronRight } from 'react-icons/fi';
import { Link } from "@nextui-org/link";

const ProfileButtons = () => {
  
  return (
    <span className="flex flex-row justify-center gap-1 w-full">
      <Link href="/about">
      <Button color="default" style={{borderRadius:"16px 4px 4px 16px"}} variant="bordered" className="group" id="about-me" >
              <span className="flex flex-row items-center gap-2">About me <FiChevronRight className="text-lg mt-[1px] opacity-70 group-hover:opacity-100 transition-all group-hover:translate-x-1" /> </span>
            </Button>
      </Link>
      <Link href="https://drive.google.com/file/d/1zQ9dGbCN2m6Qowdrl8bVapwvwyYXvWPs/view?usp=sharing">
        <Button style={{borderRadius:"4px"}} color="default" id="download" variant="bordered">
          Download CV<FiDownload />
        </Button>
      </Link>
      <Link  href="/contact">
          <Button id="contact" style={{borderRadius:"4px 16px 16px 4px"}} color="default" variant="bordered" >
            Connect
            <span>&#x1F4E3;</span> 
          </Button>
      </Link>
    </span>
  );
}

export default ProfileButtons;
