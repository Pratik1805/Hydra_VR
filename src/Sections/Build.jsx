import React from "react";
import { arrowRightAbout } from "../assets/icons";
import { Services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";

const  Build = () => {
  return (
    <section id="services">
      <div className="flex justify-evenly items-center py-2 m-auto flex-col sm:flex-row max-w-[80%]">
        <h1
          className=" text-slate-300 font-montserrat sm:text-6xl text-3xl px-2 py-4
        sm:text-left text-center leading-normal"
        >
          <span className=" text-white font-semibold">WHY BUILD</span> <br />{" "}
          WITH HYDRA?
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

      <div className="mt-16 grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-14 sm:gap-4 rounded-md ">
        {Services.map((items) => (
          <ServiceCard img={items.imgURl} heading = {items.heading} description={items.description}/>
        ))}
      </div>

    </section>
  );
};

export default Build;
