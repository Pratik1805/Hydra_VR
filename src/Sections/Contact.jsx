import React from "react";
import { contact } from "../Constants";
import Carousel from "../Components/Carousel";

const Contact = () => {
  return (
    <div>
      <section className="contact rounded-3xl flex justify-evenly items-center gap-14 overflow-hidden sm:max-w-[100%] max-md:max-w-sm max-md:max-h-28 m-auto ">
      {contact.map((item) => (
        <div
          key={item.name}
          className="flex  items-center justify-center text-center flex-wrap py-4 max-md:hidden"
        >
          <img src={item.imgURl} className="w-[72px] h-[72px]" />
          <div className="flex flex-col items-center p-4">
            <h3 className="text-white font-semibold text-xl">{item.name}</h3>
            <p className="text-gray-200">{item.value}</p>
          </div>
        </div>
      ))}

      <div className="max-md:block hidden py-4 ">
        <Carousel></Carousel>
      </div>
    </section>
    </div>
  );
};

export default Contact;
