import React from "react";
import { arrowRightAbout } from "../assets/icons";

const Construct = () => {
  return (
    <section id="how-to">
      <div className="flex justify-evenly items-center py-2 m-auto flex-col sm:flex-row max-w-[80%]">
        <h1
          className=" text-slate-300 font-montserrat sm:text-6xl text-3xl px-2 py-4
        sm:text-left text-center leading-normal"
        >
          <span className=" text-white font-semibold">HOW WE BUILD</span> <br />{" "}
          WITH HYDRA VR?
        </h1>
        <img
          src={arrowRightAbout}
          alt="arrow right"
          className="hidden md:block"
        />
        <p className="text-slate-300 font-palanquin text-lg text-wrap max-w-[80%] hidden md:block px-2 text-justify">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className="bg-construct bg-center bg-cover">
        <div className=" ">

        </div>
        
      </div>
    </section>
  );
};

export default Construct;
