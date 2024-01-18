import MyBlog from "../../components/my-blog";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blogs - Milind Dhamu',
  description: 'Blog page',
}

export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center">
      <section className="flex flex-col max-w-screen-md px-4 my-4 gap-4">
      <div className="flex w-full px-2">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Blogs</h1>
        </div>
      <MyBlog length="full" />
      </section>
    </main>
    </>
  )
}
