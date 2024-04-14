import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {Skeleton} from "@nextui-org/skeleton";

export const LoadingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {Array.from({ length:2 }).map((_, index) => (
      <Card key={`loading-card-${index}`} style={{borderRadius:"22px"}} isFooterBlurred className="flex w-full h-[300px] border-1 border-gray-500/50 group">
        <Skeleton className="flex w-full h-full"  />
        <CardFooter style={{borderRadius:"18px",border:"0px"}} className="flex justify-between overflow-hidden absolute bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-12 p-1 ">
          <Skeleton className="flex place-content-end h-full aspect-square border-1 border-gray-500/20" style={{borderRadius:"16px"}} />
          <Skeleton className="flex place-content-end w-24 h-full border-1 border-gray-500/20" style={{borderRadius:"16px"}} />
        </CardFooter>
      </Card>
      ))}
    </div>
  )
}