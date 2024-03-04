import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/images/moviebox-logo.png";
import Link from "next/link";

import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <div className="w-full body-background-black h-[50px] bg-opacity-0 fixed top-0 hover:bg-opacity-50 z-50">
      <div className="max-w-[970px] mx-auto flex justify-between items-center text-xs md:text-sm px-12">
        <Link href={`/`}>
          <Image
            className="mr-6"
            alt="moviebox logo"
            src={Logo}
            height={50}
            width={150}
          />
        </Link>
        <SearchInput />
        <div className="text-white font-semibold uppercase flex items-center justify-center mr-6 space-x-3">
          <p>Assistir</p>

          <p>Entrar</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
