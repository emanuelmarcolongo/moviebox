import { PersonTV } from "@/app/@types/person";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type PersonShowsProps = {
  shows?: PersonTV[];
};
const PersonShows = ({ shows }: PersonShowsProps) => {
  return (
    <section className="space-y-6 w-screen mt-24">
      <h1 className="text-2xl font-bold text-white text-center">Séries</h1>
      <Carousel className="max-w-[970px] mx-auto px-12 md:px-0 ">
        <CarouselContent>
          {shows?.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 hover:scale-[102%]  "
            >
              <Link href={`/serie/${item.name}?id=${item.id}`}>
                <Image
                  className="rounded-2xl "
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

export default PersonShows;
