import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardFooter,CardHeader} from "@nextui-org/card";
import {Link} from "@nextui-org/link";
import {BlogPost} from "../config/types";
import {Chip} from "@nextui-org/chip";
import { CgExternal } from "react-icons/cg";
import moment from "moment";

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
  const fromNow = (date: number) => {
    const dateObj = new Date(date);
    const ago = moment(dateObj).fromNow();
    return ago;
  };
  const time = fromNow(data?.published);
  return (
    <>
    <Card isFooterBlurred style={{borderRadius:"22px"}} className="h-[300px] border-1 border-gray-500/50 w-full">
      {/* <CardHeader className="absolute z-10 flex-col items-start gap-2">
        <p className="text-xs text-white/80 font-bold">{data?.title}</p>
      </CardHeader> */}
      <Image
        loading="lazy"
        removeWrapper
        alt="Card Image"
        className="z-0 w-full h-full object-cover brightness-50"
        src={imageUrl}
      />
      <span className="flex gap-1 absolute bottom-14 p-1 w-full overflow-scroll scrollbar-hide">
        {Tags?.map((cat:string)=><Chip classNames={{content:"text-tiny whitespace-nowrap"}} radius="sm" key={cat} variant="flat" size="sm">{cat}</Chip>)}
      </span>
     
      <CardFooter style={{borderRadius:"18px",border:"0px"}} className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden p-1  absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-grow gap-2 items-center">
        <Link isExternal href="https://medium.com/@milind.dhamu.123">
          <div className="w-10 h-10">
            <Image
              alt="Breathing app icon"
              loading="lazy"
              style={{borderRadius:"16px"}}
              className="bg-black p-2"
              src="https://emojiisland.com/cdn/shop/products/Smiling_Devil_Emoji_large.png"
            />
          </div>
          </Link>
          <div className="flex flex-col max-w-fit">
            <p className="text-tiny text-white/60 font-bold line-clamp-1">{data?.title}</p>
            <p className="text-tiny text-white/60">Published : {time}</p>
          </div>
        </div>
        <Link isExternal href={profileLink}>
        <Button color="default" variant="faded" className=" bg-opacity-50 border-opacity-50 group" style={{borderRadius:"16px",borderWidth:"1px"}}>
              <span className="flex flex-row items-center gap-1 text-xs">Full post <CgExternal className=" opacity-70 group-hover:text-blue-500 group-hover:opacity-100 transition-all text-lg" /> </span>
            </Button>
        </Link>
      </CardFooter>
    </Card>
    </>
  )
}
