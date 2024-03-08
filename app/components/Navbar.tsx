"use client";

import Image from "next/image";
import Logo from "@/public/icons/cat-logo.svg";
import Link from "next/link";
import SearchInput from "./SearchInput";
import HamburguerMenu from "./HamburguerMenu";
import { useState } from "react";

const Navbar = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  return (
    <div className="w-full bg-black bg-opacity-40 h-[50px]  fixed top-0 hover:bg-opacity-100 z-50">
      <div
        onClick={() => setShowInput(false)}
        className="max-w-[970px] mx-auto flex justify-between items-center text-xs md:text-sm"
      >
        <Link href={`/`}>
          <Image
            className="mr-6"
            alt="moviebox logo"
            src={Logo}
            height={50}
            width={35}
          />
        </Link>
        <div onClick={(e) => e.stopPropagation()}>
          <SearchInput showInput={showInput} setShowInput={setShowInput} />
        </div>
        <HamburguerMenu></HamburguerMenu>
      </div>
    </div>
  );
};

export default Navbar;
