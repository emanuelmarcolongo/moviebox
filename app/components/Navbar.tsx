import Image from "next/image";
import React from "react";
import Logo from "@/public/images/moviebox-logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-black h-[50px] bg-opacity-40  ">
      <div className="max-w-[970px] mx-auto flex justify-between text-xs md:text-sm px-12">
        <Image
          className="mr-6"
          alt="moviebox logo"
          src={Logo}
          height={50}
          width={150}
        ></Image>
        <p className="text-white uppercase font-semibold  flex items-center justify-center ">
          PESQUISAR
        </p>
        <div className="text-white font-semibold uppercase flex items-center justify-center mr-6 space-x-3">
          <p>Assistir</p>

          <p>Entrar</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
