import Image from "next/image";
import React from "react";
import Logo from "@/public/images/moviebox-logo.png";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "./Icons";
import Link from "next/link";

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
        <InputWithButton />
        <div className="text-white font-semibold uppercase flex items-center justify-center mr-6 space-x-3">
          <p>Assistir</p>

          <p>Entrar</p>
        </div>
      </div>
    </div>
  );
};

const InputWithButton = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 p-2 h-[50px]">
      <Input
        className="text-xs md:text-sm"
        type="text"
        placeholder="Pesquisar um filme, série ou pessoa..."
      />{" "}
      <SearchIcon className="hover:scale-y-110 hover:cursor-pointer" />
    </div>
  );
};

export default Navbar;
