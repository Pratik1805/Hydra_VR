import React from "react";
import Button from "../Components/Button";
import { arrowRightSmall } from "../assets/icons";
import { hero } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex flex-col xl:flex-row min-h-screen max-container gap-8 justify-center max-md:flex-col-reverse padding-y"
    >
      <div className=" relative xl:w-2/5   flex flex-col justify-center items-start max-sm:items-center max-sm:text-center ">
        <h1 className="text-white text-8xl font-montserrat font-semibold leading-normal max-sm:text-[72px] max-w-[100%]">
          <span className="gradient">Dive</span> Into The Depths Of
          <span className="gradient"> Virtual Reality</span>
        </h1>

        <p className=" text-white mt-4  max-sm:hidden font-palanquin ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>

        <div className="mt-6 flex justify-center items-center max-sm:w-full">
          <Button label="BUILD YOUR WORLD" border="bg-primary" fullwidth />
          <img
            src={arrowRightSmall}
            alt="arrow-right"
            className="max-sm:hidden"
          />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center bg-cover bg-center xl:min-h-screen max-xl:py-28 mt-2 max-w-xl">
        <img
          src={hero}
          alt="hero"
          className=" object-contain relative z-10 "
          width={610}
          height={510}
        />
      </div>
    </section>
  );
};

export default Hero;
