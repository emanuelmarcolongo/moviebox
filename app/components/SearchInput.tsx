"use client";

import { Input } from "@/components/ui/input";
import React, { SetStateAction, useRef, useState } from "react";
import { SearchIcon } from "./Icons";
import { useRouter } from "next/navigation";

type SearchInputProps = {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchInput = ({ showInput, setShowInput }: SearchInputProps) => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!showInput && inputRef.current) {
      setShowInput(true);
      inputRef.current.focus();
    } else if (showInput) {
      if (value.length >= 3) {
        setShowInput(false);
        setValue("");
        router.push(`/buscar/${value}`);
      }
    }
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="flex  max-w-sm items-center space-x-2  h-[50px] relative"
    >
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        className={`text-xs md:text-sm text-black relative ease-in transition-all duration-300 ${
          showInput
            ? "block w-[150px] md:w-[250px]"
            : "w-0 bg-transparent border-transparent"
        }`}
        type="text"
        placeholder="Buscar"
      />

      <button className="absolute right-2" type="submit">
        <SearchIcon
          className={`hover:scale-y-110 hover:cursor-pointer ${
            showInput ? "fill-black" : "fill-white"
          }`}
        />
      </button>
    </form>
  );
};

export default SearchInput;
