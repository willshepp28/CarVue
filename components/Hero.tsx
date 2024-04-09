"use client";

import React from "react";
import Image from "next/image";
import { StyledButton } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">
          Discover, reserve, or lease a vehicle - effortlessly and promptly.
        </div>

        <p className="hero__subtitle">
          Elevate your car rental adventure with our revolutionary booking
          method, designed for unparalleled ease and efficiency.
        </p>

        <StyledButton
          title="Explore Cars"
          layoutStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
