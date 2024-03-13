import { IRequestMovieData } from "../types/movies";
import { IShowResponseData } from "../types/shows";

const getDataFromUrl = async (
  url: string
): Promise<IRequestMovieData | IShowResponseData | void> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_API_TOKEN}`,
    },
    next: {
      revalidate: 99600,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data: IRequestMovieData = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getDataFromUrl;
