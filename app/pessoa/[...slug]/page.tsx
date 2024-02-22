import { personService } from "@/app/services/PersonService";
import PersonInfo from "./components/PersonInfo";
import PersonMovies from "./components/PersonMovies";
import PersonShows from "./components/PersonShows";
import PersonImages from "./components/PersonImages";

const PersonPage = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const id = searchParams.id;
  const personInfo = await personService.getPersonDataById(id);
  const imageUrl = process.env.IMG_URL + personInfo.profile_path;

  return (
    <main className="flex min-h-screen flex-col items-center relative space-y-6 ">
      <PersonInfo personInfo={personInfo} />
      {!!personInfo.movie_credits.cast && (
        <PersonMovies movies={personInfo.movie_credits.cast} />
      )}
      {!!personInfo.tv_credits.cast && (
        <PersonShows shows={personInfo.tv_credits.cast} />
      )}
      {!!personInfo.images.profiles && (
        <PersonImages images={personInfo.images.profiles} />
      )}
    </main>
  );
};

export default PersonPage;
