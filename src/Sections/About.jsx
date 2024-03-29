import React from "react";
import { arrowRightAbout } from "../assets/icons";
import Button from "../Components/Button";
import { about } from "../assets/images";

const About = () => {
  return (
    <section>
      <div className="flex justify-evenly items-center py-2 flex-col sm:flex-row max-w-full">
        <h1
          className=" text-slate-300 font-montserrat sm:text-6xl text-2xl px-2 py-4
        sm:text-left text-center"
        >
          <span className=" text-white font-semibold">INTRODUCTION</span> <br />{" "}
          TO HYDRA VR
        </h1>
        <img
          src={arrowRightAbout}
          alt="arrow right"
          srcset=""
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

      <div className="flex justify-evenly items-center py-2 flex-col sm:flex-row max-w-full">
        <div className="flex flex-1 justify-center items-center bg-cover bg-center py-14 px-2 mt-4 max-w-xl">
          <img
            src={about}
            alt="about"
            className=" object-contain relative z-10 w-[420px] h-[420px]"
          />
        </div>

        <div className=" relative xl:w-2/5 flex flex-col justify-center items-start  max-sm:items-center max-sm:text-center ">
          <h1 className="text-slate-300 font-montserrat sm:text-6xl text-2xl px-2 py-4
        sm:text-left text-center">
            <span className="text-white">ABOUT</span> <br /> HYDAR VR
          </h1>

          <p className=" text-white mt-4 font-palanquin text-lg text-justify ">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <div className="mt-6 flex justify-center items-center max-sm:w-full">
            <Button label="BUILD YOUR WORLD" border="bg-primary" fullwidth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
