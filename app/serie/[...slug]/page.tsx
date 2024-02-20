import ShowInfo from "./components/ShowInfo";
import CastList from "@/app/components/shared/CastList";
import TrailerList from "@/app/components/shared/TrailerList";
import Banner from "@/app/components/shared/Banner";
import { showService } from "@/app/services/ShowService";

const ShowPage = async ({ searchParams }: { searchParams: { id: string } }) => {
  const id = searchParams.id;
  const showInfo = await showService.getShowDataById(id);
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
