"use client";

import React, { useState } from "react";

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      id="hamburguerMenuButton"
      className="flex-col justify-center items-center lg:flex"
      onClick={handleMenuClick}
    >
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.7"
        }`}
      ></span>
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-1"
        }`}
      ></span>
      <span
        className={`bg-white transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburguerMenu;
