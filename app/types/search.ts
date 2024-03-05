export type SearchData = {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultItem[];
};
export type { Movie, TVShow, Person };
type ResultItem = Person | Movie | TVShow;

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie";
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TVShow {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: "tv";
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

interface Person {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: "person";
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  known_for: (Movie | TVShow)[];
}
