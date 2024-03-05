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

  console.log(!personInfo.tv_credits.cast);

  return (
    <main className="flex min-h-screen flex-col items-center relative space-y-6 mt-24">
      <h1 className="text-white flex flex-start font-bold text-3xl md:self-start">
        {personInfo.name}
      </h1>
      <PersonInfo personInfo={personInfo} />
      {personInfo.movie_credits.cast.length > 0 && (
        <PersonMovies movies={personInfo.movie_credits.cast} />
      )}
      {personInfo.tv_credits.cast.length > 0 && (
        <PersonShows shows={personInfo.tv_credits.cast} />
      )}
      {personInfo.images.profiles.length > 0 && (
        <PersonImages images={personInfo.images.profiles} />
      )}
    </main>
  );
};

export default PersonPage;
