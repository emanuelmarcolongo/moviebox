import React from "react";
import HeroPoster from "@/public/images/hero-poster.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="-z-10 w-full h-[300px] absolute -top-44">
      <div className="">
        <div className="absolute -z-20 w-[30%] h-[50%] top-[20%] left-[30%] light_gradient" />
        <div className="absolute -z-20 w-[30%] h-[50%] top-[20%] left-[30%] light2_gradient" />
        <div className="absolute -right-[90px] overflow-hidden top-0  opacity-60 -z-10 ">
          <Image width={900} alt="Moviebox-Hero" src={HeroPoster} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
