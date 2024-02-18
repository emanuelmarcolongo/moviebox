import { IMovieByIdResults } from "@/app/interfaces/movies";
import { notFound } from "next/navigation";
import HeroMoviePage from "./components/HeroMoviePage";
import MovieInfo from "./components/MovieInfo";

import CastInfo from "./components/CastInfo";

const getMovieDetails = async (id: string): Promise<IMovieByIdResults> => {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=pt-br`;

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

    const data = await response.json();
    return data;
  } catch (err) {
    notFound();
  }
};

const MoviePage = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const id = searchParams.id;
  const movieInfo = await getMovieDetails(id);
  const imageUrl = process.env.IMG_URL + movieInfo.backdrop_path;

  return (
    <main>
      <div className="-z-10 relative">
        <HeroMoviePage imageUrl={imageUrl} />
      </div>
      <MovieInfo movieInfo={movieInfo} />
      <CastInfo cast={movieInfo.credits.cast} />
    </main>
  );
};

export default MoviePage;
