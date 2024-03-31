import React from "react";
import { technologies } from "../Constants";
import Carousel from "../Components/Carousel";

const Technologies = () => {
  return (
    <div
      id="technologies"
      className=" flex items-center justify-center flex-col"
    >
      <div className="rounded-full sm:w-[80%] w-full px-2 py-4 contact shadow-lg ">
        <h1 className=" text-slate-300 text-center sm:text-6xl text-3xl px-2 py-2 leading-normal">
          <span className=" text-white font-semibold">
            TECHNOLOGIES & HARDWARE
          </span>{" "}
          <br />
          USED BY HYDRA VR
        </h1>
      </div>

      <div className="flex mt-8 justify-evenly items-center w-full max-sm:flex-col">
        {technologies.map((items) => (
          <img
            src={items.imgUrl}
            alt=""
            key={items.id}
            width={256}
            height={256}
          />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
