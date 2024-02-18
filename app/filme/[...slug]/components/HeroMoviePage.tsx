import Image from "next/image";

type HeroMoviePageProps = {
  imageUrl: string;
  className?: string;
};

const HeroMoviePage = ({ imageUrl, className }: HeroMoviePageProps) => {
  return (
    <div
      className={`${className} bg-transparent rounded-xl inset_shadow lg:w-[1024px] w-screen aspect-video -mt-24 relative`}
    >
      <Image
        sizes="(min-width: 1080px) 1024px, 95.26vw"
        priority
        placeholder="empty"
        alt="movie poster"
        src={imageUrl}
        className="-z-[1] rounded-2xl"
        fill
      />
    </div>
  );
};

export default HeroMoviePage;
