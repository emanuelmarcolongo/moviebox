import React from 'react'


const getMovieDetails = async (id: string) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-br`;

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
      console.error(err);
    }
}


const MoviePage = async ({searchParams}:{searchParams: {id: string}}) => {
  const id = searchParams.id
  const movieInfo = await getMovieDetails(id);

  console.log(movieInfo)
  


  return (
    <div className='mt-64 text-white'>page</div>
  )
}

export default MoviePage;