import { notFound } from "next/navigation";
import { SearchData } from "../@types/search";

const searchContent = async (word: string): Promise<SearchData> => {
  const url = `https://api.themoviedb.org/3/search/multi?query=${word}&include_adult=false&language=pt-br&page=1`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_API_TOKEN}`,
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

export const searchService = { searchContent };
