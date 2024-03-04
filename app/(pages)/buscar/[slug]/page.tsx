import { searchService } from "@/app/services/SearchService";
import searchDataHandler from "@/app/utils/handleSearchData";

type SearchPageProps = {
  params: {
    slug: string;
  };
};

const SearchPage = async ({ params }: SearchPageProps) => {
  const slug = params.slug;
  const data = await searchService.searchContent(slug);

  console.log(slug);
  const { movies, persons, shows } = searchDataHandler(data);

  return (
    <div className="text-white mt-24">
      {!!movies && (
        <div>
          {movies.map((movie, idx) => (
            <p key={idx}>{movie.title}</p>
          ))}
        </div>
      )}
      {!!shows && (
        <div>
          {shows.map((show, idx) => (
            <p key={idx}>{show.name}</p>
          ))}
        </div>
      )}
      {!!persons && (
        <div>
          {persons.map((person, idx) => (
            <p key={idx}>{person.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
