import { Actor, Crew } from "./crew";

export type {
  ITrendingMoviesResults,
  IRequestMovieData,
  IMovieByIdResults,
  ICredits,
  ITrailer,
};

interface ITrendingMoviesResults {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  video: boolean;
  media_type: string;
}

interface IRequestMovieData {
  page: number;
  results: ITrendingMoviesResults[];
  total_pages: number;
  total_results: number;
}

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

interface IMovieByIdResults {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: ICredits;
  videos: {
    results: ITrailer[];
  };
}

interface ITrailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface ICredits {
  cast: Actor[];
  crew: Crew[];
}
