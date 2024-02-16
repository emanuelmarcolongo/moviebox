import React from "react";
import HeroPoster from "@/public/images/moviebox-banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white drop-shadow-white rounded-3xl inset_shadow lg:w-[1000px] w-screen relative  -mt-24">
      <Image
        priority
        placeholder="blur"
        className="rounded-b-2xl  opacity-100 "
        alt="hero poster"
        src={HeroPoster}
      />
    </div>
  );
};

export default Hero;
