import React from "react";
import Button from "../Components/Button";
import { arrowRightSmall } from "../assets/icons";
import { hero } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full flex flex-col xl:flex-row min-h-screen max-container gap-10 justify-center max-sm:flex-col-reverse"
    >
      <div className=" relative xl: w-2/5 max-sm:w-full flex flex-col justify-center items-start max-sm:items-center">
        <h1 className="text-white text-6xl font-montserrat mt-2 font-semibold leading-normal max-sm:text-[36px] ">
          <span className="gradient">Dive</span> Into The
          Depths <br/>Of<span className="gradient"> Virtual Reality</span>
        </h1>

        <p className=" text-white mt-4  max-sm:hidden font-palanquin ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>

        <div className="mt-6 flex justify-center items-center max-sm:w-full">
          <Button label="BUILD YOUR WORLD" border="bg-primary" fullwidth/>
          <img src={arrowRightSmall} alt="arrow-right" className="max-sm:hidden"/>
        </div>
      </div>

      <div className="flex justify-center items-center bg-center mt-2">
        <img src={hero} alt="hero"
        className=" object-contain relative z-10 "
        width={400}
        height={400} />
      </div>
    </section>
  );
};

export default Hero;
