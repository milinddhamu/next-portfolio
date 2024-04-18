import * as React from "react";
import dynamic from "next/dynamic";
import {MyName} from "@/components/my-name";
import {Divider} from "@nextui-org/divider";
import ProfileButtons from "@/components/profile-buttons";
import { MyProjects } from "./my-projects";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import { FiChevronRight } from 'react-icons/fi';
import MyBlog from "./my-blog";

export const Profile = () => {
  return (
    <>
    <main className="flex flex-col items-center gap-4 px-4 relative">
      <section className="flex flex-col items-center max-w-screen-md w-full lg:my-6 gap-4 mt-4">
        <MyName />
        <ProfileButtons />
      </section>
      <Divider className="max-w-screen-md bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0"/>
      <section className="flex flex-col items-center max-w-screen-md w-full gap-4">
        <div className="flex w-full px-2">
          <h1 className="font-bold text-2xl">Projects</h1>
        </div>
      <MyProjects length="some"/>
        <div className="flex flex-row-reverse sm:flex-row w-full px-2">
          <Link href="/projects">
            <Button id="allprjects" color="default" variant="bordered" radius="lg" size="sm">
              View all <FiChevronRight />
            </Button>
          </Link>
        </div>
        <div className="flex w-full justify-start px-2">
          <h2 className="text-gray-500/80 font-semibold text-sm">All of my projects are deployed to my <a href="https://github.com/milinddhamu/" className="hover:text-blue-500 underline transition-all">Github</a> , check &apos;em out for detailed description. </h2>
        </div>
      </section>
      <Divider className="max-w-screen-md bg-gradient-to-l from-gray-500/0 via-gray-500/50 to-gray-500/0"/>
      <section className="flex flex-col items-center max-w-screen-md w-full gap-4">
        <div className="flex w-full px-2">
          <h1 className="font-bold text-2xl">Blogs</h1>
        </div>
              {/* @ts-expect-error Server Component */}
      <MyBlog length="some" />
        <div className="flex flex-row-reverse sm:flex-row w-full px-2">
        <Link href="/blog">
      <Button id="allblogs" color="default" variant="bordered" radius="lg" size="sm">
        View all <FiChevronRight />
      </Button>
      </Link>
        </div>
        
        <div className="flex w-full justify-start px-2">
          <h2 className="text-gray-500/80 font-semibold text-sm">I&apos;m not much a fan of writing , But i try to do as much as possible, Atleast something helpful for someone. Checkout my <a href="https://medium.com/@milind.dhamu.123" className="hover:text-orange-500 underline transition-all">Medium</a>. I&apos;ll try to post more frequently. </h2>
        </div>
        
      </section>
    </main>
    </>
  )
}

