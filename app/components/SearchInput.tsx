"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SetStateAction, useState } from "react";
import { SearchIcon } from "./Icons";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 p-2 h-[50px]">
      <Input
        value={value}
        onChange={handleInputChange}
        className="text-xs md:text-sm text-black"
        type="text"
        placeholder="Buscar"
      />{" "}
      <Link href={`/buscar/${value}`}>
        <SearchIcon className="hover:scale-y-110 hover:cursor-pointer" />
      </Link>
    </div>
  );
};

export default SearchInput;
