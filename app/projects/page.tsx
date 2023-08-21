import { MyProjects } from "../../components/my-projects";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects - Milind Dhamu',
  description: 'Project page',
}
export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center">
      <section className="flex flex-col max-w-screen-md px-4 my-4 gap-4">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Projects</h1>
      <MyProjects length="full" />
      </section>
    </main>
    </>
  )
}