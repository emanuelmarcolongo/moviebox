import { ITrailer } from "@/app/@types/movies";

type MovieTrailersProps = {
  videos: ITrailer[];
};
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ShowTrailers = ({ videos }: MovieTrailersProps) => {
  const trailers = videos.filter(
    (video) =>
      video.type === "Trailer" && video.official && video.site === "YouTube"
  );

  return (
    <section className=" text-white my-12 space-y-8">
      {trailers.length > 0 && (
        <>
          <h1 className="font-semibold text-white text-3xl text-center">
            Trailer
          </h1>

          <Carousel className="lg:w-[970px] w-full mx-auto md:px-12 text-black ">
            <CarouselContent>
              {trailers?.map((trailer, idx) => (
                <CarouselItem className="" key={trailer.id}>
                  <iframe
                    className="w-3/4 h-[400px] rounded-2xl mx-auto"
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    allowFullScreen
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </>
      )}
    </section>
  );
};

export default ShowTrailers;
