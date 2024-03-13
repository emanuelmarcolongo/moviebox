import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import getDataFromUrl from "../services/DataFromUrl";
import { hrefHandler } from "../utils";

const ContentList = async ({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) => {
  const movieData = await getDataFromUrl(url);

  return (
    <section className={`w-screen ${className} py-10`}>
      <div className="flex  text-white items-center justify-between max-w-[970px] mx-auto py-4">
        <h1 className="font-bold text-3xl py-2 text-center capitalize">
          {title}
        </h1>
        <p className="hover:underline uppercase hover:cursor-pointer  font-bold">
          ver mais...
        </p>
      </div>

      <Carousel opts={{ dragFree: true }} className="max-w-[970px] mx-auto">
        <CarouselContent>
          {movieData?.results?.map((item, idx) => (
            <CarouselItem key={item.id} className="basis-1/8  ">
              <Link href={hrefHandler(item)}>
                <Image
                  className="m-1 hover:cursor-pointer hover:scale-105  rounded-2xl "
                  alt="poster img"
                  width={180}
                  height={200}
                  src={`${process.env.IMG_URL}${item.poster_path}`}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default ContentList;
