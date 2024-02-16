interface IMovieResults {
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
  };

interface IRequestMovieData {
    page: number;
    results: IMovieResults[];
    total_pages: number;
    total_results: number;
  };


  export type {IMovieResults, IRequestMovieData};