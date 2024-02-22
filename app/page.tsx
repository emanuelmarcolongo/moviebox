import ContentList from "./components/ContentList";
import Hero from "./components/Hero";
import urls from "./constants/apiURLs";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Hero />

      <ContentList title="filmes em alta" url={urls.trendingMovies} />

      <ContentList
        className="body-background-black  border-t-2 border-b-2 border-white"
        title="series em alta"
        url={urls.trendingShows}
      />
    </main>
  );
}
