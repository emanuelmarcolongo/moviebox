import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ITrendingMoviesResults, IRequestMovieData } from "../@types/movies";
import Image from "next/image";
import Link from "next/link";
import { IShowResponseData, IShowsResults } from "../@types/shows";

const getDataFromUrl = async (
  url: string
): Promise<IRequestMovieData | IShowResponseData | void> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_API_TOKEN}`,
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

  const hrefHandler = (
    item: ITrendingMoviesResults | IShowsResults
  ): { pathname: string; query: { id: number } } => {
    if ("title" in item) {
      const cleanTitle = item.title.replaceAll(" ", "-").toLowerCase();
      return { pathname: `/filme/${cleanTitle}`, query: { id: item.id } };
    } else if ("name" in item) {
      const cleanName = item.name.replaceAll(" ", "-").toLowerCase();
      return { pathname: `/serie/${cleanName}`, query: { id: item.id } };
    } else throw new Error("Tipo de mídia não encontrado");
  };

  return (
    <section className={`w-screen ${className} py-10`}>
      <div className="flex  text-white items-end justify-between max-w-[970px] mx-auto py-4">
        <h1 className="font-bold text-3xl py-2 text-center capitalize align-middle">
          {title}
        </h1>
        <p className="hover:underline uppercase hover:cursor-pointer font-bold">
          ver mais...
        </p>
      </div>

      <Carousel className="max-w-[970px] mx-auto">
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
