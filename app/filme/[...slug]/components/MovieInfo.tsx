import { IMovieByIdResults } from "@/app/@types/movies";
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
  } = movieInfo;

  const releaseDateBr = new Date(release_date)
    .toLocaleDateString("pt-BR")
    .replaceAll("/", "-");
  const year = release_date.split("-")[0];

  const movieTime: String = `${Math.floor(runtime / 60)}h ${Math.floor(
    runtime % 60
  )}min`;

  return (
    <article
      className={`${className} -mt-10 z-10  text-white flex flex-col items-center px-8 space-y-6 md:space-y-0 md:flex-row md:items-start md:space-x-10 relative`}
    >
      <div className="relative md:w-[200px] lg:h-[300px] w-[300px] h-[400px] object-cover overflow-hidden md:min-w-[200px]">
        <Image
          alt={`${title} poster`}
          src={process.env.IMG_URL + poster_path}
          fill
          className="rounded-md"
        />
        <div className="rounded-full  w-12 h-12 flex items-center justify-center ring-4 ring-orange-300 font-bold mt-4 absolute right-2 top-0  bg-black">
          {vote_average.toFixed(1)}
        </div>
      </div>
      <div className="flex flex-col justify-between items-start space-y-4 md:pl-12 text-sm md:text-base">
        {tagline !== "" && <p className="italic text-white/75">"{tagline}"</p>}

        <div className="font-bold text-3xl ">
          {title} <span className="font-normal text-white/85">({year}) </span>
          <br></br>
          <p className="text-base italic font-normal space-x-2 text-white/75">
            <span>{movieTime} -</span>
            {genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
        {overview && (
          <p>
            <span className="text-lg font-bold">Sinopse:</span> <br></br>
            {overview}
          </p>
        )}
      </div>
    </article>
  );
};

export default MovieInfo;
