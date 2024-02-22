import { notFound } from "next/navigation";
import { IPerson } from "../@types/person";

const getPersonDataById = async (id: string): Promise<IPerson> => {
  const url = `https://api.themoviedb.org/3/person/${id}?append_to_response=movie_credits%2Ctv_credits%2Cimages&language=pt-br`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIEDB_API_TOKEN}`,
    },
    next: {
      revalidate: 9600,
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

export const personService = { getPersonDataById };
