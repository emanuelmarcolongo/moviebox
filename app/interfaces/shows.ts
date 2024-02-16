interface IShowsResults {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    name: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    media_type: string;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    video: boolean;
    origin_country: string[];
  };

interface IShowResponseData {
    page: number;
    results: IShowsResults[];
    total_pages: number;
    total_results: number;
  };


  export type {IShowsResults, IShowResponseData };