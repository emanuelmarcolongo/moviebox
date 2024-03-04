import { Movie, Person, SearchData, TVShow } from "../@types/search";

const searchDataHandler = ({ results }: SearchData) => {
  const movies: Movie[] = [];
  const shows: TVShow[] = [];
  const persons: Person[] = [];

  results.forEach((item) => {
    switch (item.media_type) {
      case "movie":
        movies.push(item as Movie);
        break;
      case "tv":
        shows.push(item as TVShow);
        break;
      case "person":
        persons.push(item as Person);
        break;
      default:
        break;
    }
  });

  return { movies, shows, persons };
};

export default searchDataHandler;
