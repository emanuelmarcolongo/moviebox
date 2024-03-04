import { IShowsResultsById } from "@/app/@types/shows";
import Image from "next/image";
import React from "react";

type ShowInfoProps = {
  showInfo: IShowsResultsById;
  className?: string;
};
const ShowInfo = ({ showInfo, className }: ShowInfoProps) => {
  const {
    genres,
    homepage,
    name,
    first_air_date,
    poster_path,
    vote_average,
    overview,
    episode_run_time,
  } = showInfo;

  const year = first_air_date.split("-")[0];

  const episodeTime: String = `${episode_run_time[0]}min`;

  return (
    <article
      className={`${className} -mt-10 z-10  text-white flex flex-col items-center px-8 space-y-6 md:space-y-0 md:flex-row md:items-start md:space-x-10 relative`}
    >
      <div className="relative md:w-[200px] lg:h-[300px] w-[300px] h-[400px] object-cover overflow-hidden md:min-w-[200px]">
        <Image
          alt={`${name} poster`}
          src={process.env.IMG_URL + poster_path}
          fill
          className="rounded-md"
        />
        <div className="rounded-full  w-12 h-12 flex items-center justify-center ring-4 ring-orange-300 font-bold mt-4 absolute right-2 top-0  body-background-black">
          {vote_average.toFixed(1)}
        </div>
      </div>
      <div className="flex flex-col justify-between items-start space-y-4 md:pl-12 text-sm md:text-base">
        <div className="font-bold text-3xl ">
          {name} <span className="font-normal text-white/85">({year}) </span>
          <br></br>
          <p className="text-base italic font-normal space-x-2 text-white/75">
            {episode_run_time[0] && <span>{episodeTime} -</span>}

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
      </div>
    </article>
  );
};

export default ShowInfo;
