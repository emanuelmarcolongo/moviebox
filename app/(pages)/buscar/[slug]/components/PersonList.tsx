import { Actor } from "@/app/types/cast";
import { Person } from "@/app/types/search";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type PersonListProps = {
  persons: Person[];
};

const PersonList = ({ persons }: PersonListProps) => {
  const hrefHandler = (person: Actor | Person) => {
    const cleanName = person.name.replaceAll(" ", "-").toLowerCase();
    return { pathname: `/pessoa/${cleanName}`, query: { id: person.id } };
  };
  return (
    <section
      className={`space-y-6 mt-12 w-screen body-background-black border-t-2 border-b-2 border-white py-8`}
    >
      <h1 className="font-bold text-3xl py-2 text-white text-center">
        Pessoas
      </h1>

      <Carousel
        opts={{ dragFree: true }}
        className="max-w-[970px] mx-auto px-10  "
      >
        <CarouselContent>
          {persons?.map((item, idx) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5 hover:scale-[102%]  "
            >
              {item.profile_path && (
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
                <div className="body-background-gray w-full h-[70%]  text-white flex items-center justify-center text-center rounded-full">
                  Imagem <br></br>indisponível
                </div>
              )}

              <div className=" text-white font-bold flex flex-col items-center justify-center text-center rounded-b-2xl py-2 mt-6">
                <p>{item.name}</p>
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

export default PersonList;
