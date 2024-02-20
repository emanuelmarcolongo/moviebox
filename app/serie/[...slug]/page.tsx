import { notFound } from "next/navigation";
import { IShowsResultsById } from "@/app/@types/shows";
import ShowInfo from "./components/ShowInfo";
import CastList from "@/app/components/shared/CastList";
import TrailerList from "@/app/components/shared/TrailerList";
import Banner from "@/app/components/shared/Banner";

const getShowDetails = async (id: string): Promise<IShowsResultsById> => {
  const url = `https://api.themoviedb.org/3/tv/${id}?append_to_response=videos%2Ccredits&language=pt-br`;

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

const ShowPage = async ({ searchParams }: { searchParams: { id: string } }) => {
  const id = searchParams.id;
  const showInfo = await getShowDetails(id);
  const imageUrl = process.env.IMG_URL + showInfo.backdrop_path;
  const relatedVideos = showInfo.videos.results;

  return (
    <main className="flex min-h-screen flex-col items-center relative ">
      <div className="-z-10 relative box-border">
        <Banner imageUrl={imageUrl} />
      </div>

      <ShowInfo showInfo={showInfo} />

      <CastList cast={showInfo.credits.cast} />
      <TrailerList videos={relatedVideos} />
    </main>
  );
};

export default ShowPage;
