import React from 'react';
import { Button } from "@nextui-org/button";
import { FiDownload, FiChevronRight } from 'react-icons/fi';
import { Link } from "@nextui-org/link";

const ProfileButtons = () => {
  
  return (
    <span className="flex flex-row-reverse sm:flex-row gap-2 w-full">
      <Link href="/about">
          <Button color="default" id="aboutme" variant="bordered" radius="lg">
           <span className="flex flex-row items-center gap-1"> About me<FiChevronRight className="mt-[1px]"/></ span>
          </Button>
      </Link>
      <Link href="https://drive.google.com/file/d/1zQ9dGbCN2m6Qowdrl8bVapwvwyYXvWPs/view?usp=sharing">
        <Button color="default" id="download" variant="bordered" radius="lg">
          Download CV<FiDownload />
        </Button>
      </Link>
      <Link href="/contact">
          <Button id="contact" color="default" variant="bordered" radius="lg">
            Connect
            <span>&#x1F4E3;</span> 
          </Button>
      </Link>
    </span>
  );
}

export default ProfileButtons;
