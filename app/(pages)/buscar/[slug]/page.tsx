import { searchService } from "@/app/services/SearchService";
import { searchDataHandler, searchStringFormatter } from "@/app/utils";
import ShowList from "@/app/components/shared/ShowList";
import MovieList from "../../../components/shared/MovieList";
import PersonList from "./components/PersonList";

type SearchPageProps = {
  params: {
    slug: string;
  };
};

const SearchPage = async ({ params }: SearchPageProps) => {
  const slug = params.slug;
  const data = await searchService.searchContent(slug);
  const { movies, persons, shows } = searchDataHandler(data);

  const searchString = searchStringFormatter(slug);

  return (
    <div className="text-white mt-24 w-full flex flex-col items-center space-y-12">
      <h1 className="capitalize mx-auto text-xl md:text-3xl text-center">
        Busca: {searchString}
      </h1>
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      {shows && shows.length > 0 && <ShowList shows={shows} />}
      {persons && persons.length > 0 && <PersonList persons={persons} />}
    </div>
  );
};

export default SearchPage;
