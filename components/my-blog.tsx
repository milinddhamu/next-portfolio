import { BlogCard } from './blog-cards';
import {BlogPost} from "../config/types";

async function getData() {
  const res = await fetch(`https://v1.nocodeapi.com/milinddhamu/medium/${process.env.MEDIUM_API}`, {
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function MyBlog(){
  const data:BlogPost[] = await getData();
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {data ?  data?.map((blog:BlogPost , index:number ) => <BlogCard key={blog?.title} data={blog}/>) :
      <h1>Blogs data &apos;No preview available&apos;</h1>
      }
    </div>
    </>
  )
}
