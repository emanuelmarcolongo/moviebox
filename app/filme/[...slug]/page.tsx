import { IMovieByIdResults } from "@/app/interfaces/movies";
import { notFound } from "next/navigation";
import HeroMoviePage from "./components/HeroMoviePage";
import MovieInfo from "./components/MovieInfo";
import CastInfo from "./components/CastInfo";
import MovieTrailers from "./components/MovieTrailers";

const getMovieDetails = async (id: string): Promise<IMovieByIdResults> => {
  const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos%2Ccredits&language=pt-br`;

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
  const relatedVideos = movieInfo.videos.results;

  return (
    <main className="flex min-h-screen flex-col items-center relative ">
      <div className="-z-10 relative box-border">
        <HeroMoviePage imageUrl={imageUrl} />
      </div>

      <MovieInfo movieInfo={movieInfo} />

      <CastInfo cast={movieInfo.credits.cast} />

      <MovieTrailers videos={relatedVideos} />
    </main>
  );
};

export default MoviePage;
