import { ImageInfo } from "@/app/@types/person";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type PersonImagesProps = {
  images: ImageInfo[];
};

const PersonImages = ({ images }: PersonImagesProps) => {
  return (
    <section className=" py-12 body-background-black w-screen space-y-6 border-t-2 border-b-2 border-white">
      <h1 className="text-white font-bold text-2xl text-center">Galeria</h1>
      <Carousel className="max-w-[500px] mx-auto px-12 md:px-0  ">
        <CarouselContent>
          {images?.map((item, idx) => (
            <CarouselItem key={idx} className="mx-auto md:px-20">
              <Image
                className="rounded-xl"
                alt="person image"
                src={`${process.env.IMG_URL + item.file_path}`}
                width={400}
                height={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default PersonImages;
