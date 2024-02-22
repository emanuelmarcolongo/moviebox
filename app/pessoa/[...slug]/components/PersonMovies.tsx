import { PersonMovie } from "@/app/@types/person";
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

type PersonMovieProps = {
  movies?: PersonMovie[];
};

const PersonMovies = ({ movies }: PersonMovieProps) => {
  return (
    <section className="space-y-6 w-screen mt-24 body-background-black py-8 border-t-2 border-b-2 border-white">
      <h1 className="text-2xl font-bold text-white text-center">Filmes</h1>
      <Carousel className="max-w-[970px] mx-auto px-12 md:px-0  ">
        <CarouselContent>
          {movies?.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 hover:scale-[102%]  "
            >
              <Link href={`/filme/${item.title}?id=${item.id}`}>
                <Image
                  alt="poster img"
                  className="rounded-xl"
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

export default PersonMovies;
