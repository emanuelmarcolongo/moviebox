import MovieInfo from "./components/MovieInfo";
import CastList from "@/app/components/shared/CastList";
import TrailerList from "@/app/components/shared/TrailerList";
import Banner from "@/app/components/shared/Banner";
import { movieService } from "@/app/services/MovieService";

const MoviePage = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const id = searchParams.id;
  const movieInfo = await movieService.getMovieDataById(id);
  const imageUrl = process.env.IMG_URL + movieInfo.backdrop_path;
  const relatedVideos = movieInfo.videos.results;

  return (
    <main className="flex min-h-screen flex-col items-center relative ">
      <div className="-z-10 relative box-border">
        <Banner imageUrl={imageUrl} />
      </div>

      <MovieInfo movieInfo={movieInfo} />

      {!!movieInfo.credits.cast && <CastList cast={movieInfo.credits.cast} />}

      {!!relatedVideos && <TrailerList videos={relatedVideos} />}
    </main>
  );
};

export default MoviePage;
