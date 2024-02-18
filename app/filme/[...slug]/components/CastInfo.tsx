import { Actor } from "@/app/interfaces/crew";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type CastInfoProps = {
  cast: Actor[];
};
const CastInfo = ({ cast }: CastInfoProps) => {
  return (
    <section className="mt-24  px-12 space-y-4">
      <h1 className="font-semibold text-white text-3xl">Elenco</h1>

      <Carousel className=" mx-auto  ">
        <CarouselContent>
          {cast?.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 hover:scale-[102%]  "
            >
              {item.profile_path && idx < 5 && (
                <Image
                  priority
                  loading="eager"
                  className="hover:cursor-pointer  w-full rounded-t-2xl "
                  alt={`${item.name} image`}
                  width={180}
                  height={200}
                  src={`${process.env.IMG_URL}${item.profile_path}`}
                />
              )}
              {item.profile_path && idx >= 5 && (
                <Image
                  loading="lazy"
                  className="hover:cursor-pointer  w-full rounded-t-2xl"
                  alt={`${item.name} image`}
                  width={180}
                  height={200}
                  src={`${process.env.IMG_URL}${item.profile_path}`}
                />
              )}
              {!item.profile_path && (
                <div className="body-background w-[180px] h-[250px] text-white flex items-center justify-center text-center flex-wrap">
                  Imagem <br></br>indisponível
                </div>
              )}

              <div className="bg-black text-white border-2 font-bold -mt-1 flex flex-col items-center justify-center text-center rounded-b-2xl py-2">
                <p>{item.name}</p>

                <p className="font-normal text-center ">{item.character}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default CastInfo;
