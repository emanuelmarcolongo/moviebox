import { Actor } from "@/app/@types/cast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type CastListProps = {
  cast: Actor[];
};

const CastList = ({ cast }: CastListProps) => {
  const hrefHandler = (person: Actor) => {
    const cleanName = person.name.replaceAll(" ", "-").toLowerCase();
    return { pathname: `/pessoa/${cleanName}`, query: { id: person.id } };
  };
  return (
    <section
      className={`space-y-6 mt-12 w-screen body-background-black border-t-2 border-b-2 border-white py-8`}
    >
      <h1 className="font-bold text-3xl py-2 text-white text-center">Elenco</h1>

      <Carousel className="max-w-[970px] mx-auto px-10 ">
        <CarouselContent>
          {cast?.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 hover:scale-[102%]  "
            >
              {item.profile_path && idx < 5 && (
                <Link href={hrefHandler(item)}>
                  <Image
                    priority
                    loading="eager"
                    className="hover:cursor-pointer  w-full rounded-full "
                    alt={`${item.name} image`}
                    width={180}
                    height={200}
                    src={`${process.env.IMG_URL}${item.profile_path}`}
                  />
                </Link>
              )}
              {item.profile_path && idx >= 5 && (
                <Link href={hrefHandler(item)}>
                  <Image
                    loading="lazy"
                    className="hover:cursor-pointer  w-full rounded-full"
                    alt={`${item.name} image`}
                    width={180}
                    height={200}
                    src={`${process.env.IMG_URL}${item.profile_path}`}
                  />
                </Link>
              )}
              {!item.profile_path && (
                <div className="body-background-gray w-[180px] h-[250px] text-white flex items-center justify-center text-center flex-wrap rounded-full">
                  Imagem <br></br>indisponível
                </div>
              )}

              <div className=" text-white font-bold -mt-1 flex flex-col items-center justify-center text-center rounded-b-2xl py-2 mt-6">
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

export default CastList;
