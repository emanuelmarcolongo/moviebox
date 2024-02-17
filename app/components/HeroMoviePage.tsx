import React from 'react'
import Image from "next/image";

type HeroProps = {
  imageUrl: string;
}

const HeroMoviePage = ({imageUrl}: HeroProps) => {
    if (!imageUrl) return <p>Loading img...</p>
    return (
     
        <Image alt="movie poster" width={500} height={500} src={imageUrl} />
      
    );
  };

export default HeroMoviePage