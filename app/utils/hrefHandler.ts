import { ITrendingMoviesResults } from "../types/movies";
import { Movie, TVShow } from "../types/search";
import { IShowsResults } from "../types/shows";

const hrefHandler = (
  item: ITrendingMoviesResults | IShowsResults | Movie | TVShow
): { pathname: string; query: { id: number } } => {
  if ("title" in item) {
    const cleanTitle = item.title.replaceAll(" ", "-").toLowerCase();
    return { pathname: `/filme/${cleanTitle}`, query: { id: item.id } };
  } else if ("name" in item) {
    const cleanName = item.name.replaceAll(" ", "-").toLowerCase();
    return { pathname: `/serie/${cleanName}`, query: { id: item.id } };
  } else throw new Error("Tipo de mídia não encontrado");
};

export default hrefHandler;
