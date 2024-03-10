import { IMovieByIdResults } from "@/app/types/movies";
import {
  budgetFormatter,
  movieDirector,
  movieTimeFormatter,
  releaseYear,
} from "@/app/utils";
import Image from "next/image";
import React from "react";

type MovieInfoProps = {
  movieInfo: IMovieByIdResults;
  className?: string;
};
const MovieInfo = ({ movieInfo, className }: MovieInfoProps) => {
  const {
    tagline,
    genres,
    homepage,
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
    runtime,
    budget,
    credits,
  } = movieInfo;

  const year = releaseYear(release_date);

  const movieTime = movieTimeFormatter(runtime);

  const { crew } = credits;
  const director = movieDirector(crew);

  return (
    <article
      className={`${className} -mt-10 z-10  text-white flex flex-col items-center px-8 space-y-6 md:space-y-0 md:flex-row md:items-start md:space-x-10 relative`}
    >
      <div className="relative md:w-[200px] lg:h-[450px] w-[300px] h-[450px] object-cover overflow-hidden md:min-w-[300px] rounded-md drop-shadow-4xl">
        <Image
          sizes="(min-width: 780px) 200px, 300px"
          alt={`${title} poster`}
          src={process.env.IMG_URL + poster_path}
          fill
        />
        <div className="rounded-full  w-12 h-12 flex items-center justify-center ring-4 ring-orange-300 font-bold mt-4 absolute right-2 top-0  b">
          {vote_average.toFixed(1)}
        </div>
      </div>
      <div className="flex flex-col justify-between items-start space-y-4 md:pl-12 text-sm md:text-base">
        {!!tagline && (
          <p className="italic text-white/75">&quot;{tagline}&quot;</p>
        )}

        <div className="font-bold text-3xl ">
          {title} <span className="font-normal text-white/85">({year}) </span>
          <br></br>
          <p className="text-base italic font-normal space-x-2 text-white/75">
            {!!runtime && <span>{movieTime} -</span>}
            {genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
        {!!overview && (
          <p>
            <span className="text-lg font-bold">Sinopse:</span> <br></br>
            {overview}
          </p>
        )}
        {!!budget && (
          <p>
            <span className="text-lg font-bold">Orçamento:</span> <br></br>
            USD: {budgetFormatter(budget)}
          </p>
        )}
        {!!director && (
          <p>
            <span className="text-lg font-bold">Direção:</span> <br></br>
            {director.name}
          </p>
        )}
      </div>
    </article>
  );
};

export default MovieInfo;
