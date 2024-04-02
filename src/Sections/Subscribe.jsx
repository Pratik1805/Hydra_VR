import React from "react";
import { lineSubscribe } from "../assets/images";
import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <div id="join" className="flex flex-col items-center justify-center sm:w-[60%] w-full m-auto Card shadow-xl rounded-3xl px-2 py-4">
      <div className=" ">
        <h2
          className=" text-white font-semibold font-montserrat sm:text-6xl text-3xl px-2 py-4
         text-center leading-normal"
        >
          JOIN HYDRA
        </h2>
        <img src={lineSubscribe} alt="line" className=" m-auto  w-[80%] py-4" />
        <p className="text-slate-300 tracking-wider text-center font-palanquin sm:text-3xl text-2xl px-2">
          Let’s Build Your VR Experience
        </p>
      </div>

      <div className=" mt-8 w-full px-4 py-2">
        <form action="">
          <div className="flex gap-4 sm:flex-row flex-col px-2 py-2">
            <div className=" w-full rounded-full border border-white overflow-hidden bg-transparent">
              <input
                type="text"
                placeholder="First Name"
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
            <div className=" w-full rounded-full border border-white overflow-hidden bg-transparent">
              <input
                type="text"
                placeholder="Last Name"
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
            <div className=" w-full rounded-full border border-white overflow-hidden bg-transparent">
              <input
                type="email"
                placeholder="Email"
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
            <div className=" w-full rounded-full border border-white overflow-hidden bg-transparent">
              <input
                type="text"
                placeholder="Phone Number"
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
            <div className=" w-full rounded-full border border-white overflow-hidden bg-transparent">
              <input
                type="text"
                placeholder="Subject"
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
          </div>
          <div className="flex gap-4 sm:flex-row flex-col  px-2 py-2">
            <div className=" w-full rounded-3xl   border border-white overflow-hidden bg-transparent">
              <textarea
                rows={10}
                cols={50}
                placeholder="Tell Us Something...."
                className=" w-full border-none bg-transparent text-white text-[16px] px-4 py-4"
              />
            </div>
          </div>
          <div className=" flex items-center justify-center px-2 py-4">
            <Button label={"SEND TO HYDRA"}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
