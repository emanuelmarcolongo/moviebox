import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IRequestMovieData } from "../interfaces/movies";
import Image from "next/image";

const getDataFromUrl = async (
  url: string
): Promise<IRequestMovieData | void> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_DB_API_TOKEN}`,
    },
    next: {
      revalidate: 9600,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: IRequestMovieData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

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
      <div className="flex  uppercase text-white items-center justify-between max-w-[970px] mx-auto">
        <h1 className="font-bold text-2xl py-2">{title}</h1>
        <p className="hover:underline hover:cursor-pointer font-bold">
          ver mais...
        </p>
      </div>

      <Carousel className="max-w-[970px] mx-auto">
        <CarouselContent>
          {movieData?.results?.map((item, idx) => (
            <CarouselItem key={item.id} className="basis-1/8  ">
              <Image
                className="m-1 hover:cursor-pointer hover:scale-105  rounded-2xl "
                alt="poster img"
                width={180}
                height={200}
                src={`${process.env.IMG_URL}${item.poster_path}`}
              />
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
