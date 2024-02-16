import React from "react";
import HeroPoster from "@/public/images/moviebox-banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white rounded-3xl lg:w-[1000px] w-screen relative  -mt-24">
      <Image
        priority
        placeholder="blur"
        className="rounded-b-3xl shadow-[inset_20px_20px_20px_rgba(0,0,0,1)] opacity-100"
        alt="hero poster"
        src={HeroPoster}
      />
    </div>
  );
};

export default Hero;
