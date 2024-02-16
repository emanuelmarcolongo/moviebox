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

const ContentList = async ({ title, url }: { title: string; url: string }) => {
  const movieData = await getDataFromUrl(url);

  return (
    <div className="">
      <h1 className="uppercase text-white font-bold">{title}</h1>
      <Carousel>
        <CarouselContent>
          {movieData?.results?.map((item, idx) => (
            <CarouselItem key={item.id} className="basis-1/8">
              <Image
                className="m-1 hover:cursor-pointer rounded-2xl"
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
    </div>
  );
};

export default ContentList;
