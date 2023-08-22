import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardFooter,CardHeader} from "@nextui-org/card";
import {Link} from "@nextui-org/link";
import {BlogPost} from "../config/types";
import {Chip} from "@nextui-org/chip";

type BlogCardProps = {
  data: BlogPost;
};

export const BlogCard: React.FC<BlogCardProps> = ({data}) => {
  const Tags:string[] = data?.category?.slice(0, 3) ?? [];
  const profileLink:string = data?.link;
  const htmlContent:string = data?.content;
  const imageUrlMatches: RegExpMatchArray | null = htmlContent?.match(/<img[^>]+src=["']([^"']+)["']/);
  let imageUrl:string = "" 
  if (imageUrlMatches && imageUrlMatches.length >= 2) {
      imageUrl = imageUrlMatches[1];
  };
  function timeAgo(timestamp: number): string {
    const currentDate = new Date();
    const targetDate = new Date(timestamp);
    const elapsed = currentDate.getTime() - targetDate.getTime();
  
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;
  
    if (elapsed < minute) {
      const seconds = Math.floor(elapsed / 1000);
      return seconds === 1 ? '1 second ago' : seconds + ' seconds ago';
    } else if (elapsed < hour) {
      const minutes = Math.floor(elapsed / minute);
      return minutes === 1 ? '1 minute ago' : minutes + ' minutes ago';
    } else if (elapsed < day) {
      const hours = Math.floor(elapsed / hour);
      return hours === 1 ? '1 hour ago' : hours + ' hours ago';
    } else if (elapsed < month) {
      const days = Math.floor(elapsed / day);
      return days === 1 ? '1 day ago' : days + ' days ago';
    } else if (elapsed < year) {
      const months = Math.floor(elapsed / month);
      return months === 1 ? '1 month ago' : months + ' months ago';
    } else {
      const years = Math.floor(elapsed / year);
      return years === 1 ? '1 year ago' : years + ' years ago';
    }  
  }
  const time = timeAgo(data?.published)
  return (
    <>
    <Card isFooterBlurred className=" h-[300px] border-1 border-gray-500/50">
      <CardHeader className="absolute z-10 top-1 flex-col items-start gap-2">
        <p className="text-sm text-white/80 font-bold">{data?.title}</p>
      </CardHeader>
      <Image
        loading="lazy"
        removeWrapper
        alt={data?.title}
        className="z-0 w-full h-full object-cover"
        src={imageUrl}
      />
      <span className="flex gap-1 absolute bottom-16 p-1 w-full">
        {Tags?.map((cat:string)=><Chip classNames={{content:"text-tiny"}} radius="sm" key={cat} variant="flat" size="sm">{cat}</Chip>)}
      </span>
     
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden p-2  absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-grow gap-2 items-center">
        <Link isExternal href="https://medium.com/@milind.dhamu.123">
          <Image
            isZoomed={true}
            loading="lazy"
            alt="Breathing app icon"
            className="rounded-lg w-10 h-10 bg-black p-2"
            src="https://emojiisland.com/cdn/shop/products/Smiling_Devil_Emoji_large.png"
          />
          </Link>
          <div className="flex flex-col">
            <p className="text-tiny text-white/60 font-bold">{data?.author}</p>
            <p className="text-tiny text-white/60">Published : {time}</p>
          </div>
        </div>
        <Link isExternal href={profileLink}>
        <Button color="default" variant="faded" radius="md">
        Full Post
        </Button></Link>
      </CardFooter>
    </Card>
    </>
  )
}
