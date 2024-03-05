import { notFound } from "next/navigation";
import { IShowsResultsById } from "../types/shows";

const getShowDataById = async (id: string): Promise<IShowsResultsById> => {
  const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=videos%2Ccredits&language=pt-br`;

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

    const data = await response.json();
    return data;
  } catch (err) {
    notFound();
  }
};

export const showService = { getShowDataById };
