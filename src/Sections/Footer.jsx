import React from "react";
import { Hydra, lineSubscribe, verticalLine } from "../assets/images";
import { hydraLogo } from "../assets/icons";
import { footerLinks, socialMedia } from "../Constants";
import Button from "../Components/Button";

const Footer = () => {
  return (
    <footer className=" max-container">
      <div className="flex justify-between lg:items-start items-center gap-20 flex-wrap max-lg:flex-col">

          <img src={hydraLogo} alt="Hydra logo" width={150} height={46} className=" m-auto" />
        
        <img src={verticalLine} alt="vertical line" className=" max-lg:hidden"/>

        <div className="flex flex-1 justify-between gap-10 flex-wrap max-lg:hidden">
          {footerLinks.map((section) => (
            <>
              <div key={section.title}>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-3 font-montserrat text-white leading-normal hover:text-slate-gray cursor-pointer font-semibold"
                      key={link.name}
                    >
                      {" "}
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <img src={verticalLine} alt="vertical line" />
            </>
          ))}
        </div>

        <div className=" flex flex-col gap-2 px-2 py-4 items-center justify-center">
          <h3 className=" font-montserrat text-white font-semibold ">
            SOCIALIZE WITH HYDRA
          </h3>
          <div className="flex items-center gap-5 mt-4 px-2 py-4">
            {socialMedia.map((item) => (
              <div className="flex justify-center items-center w-12 h-12 rounded-full">
                <img src={item.src} alt={item.alt} width={34} height={34} />
              </div>
            ))}
          </div>
          <Button label={"BUILD YOUR WORLD"} />
        </div>
      </div>
      <img src={lineSubscribe} alt="line" className=" m-auto  w-full py-4" />

      <div className=" flex items-center justify-center">
        <h3 className=" text-white font-bold font-montserrat text-center leading-normal ">2024 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </h3>
      </div>
    </footer>
  );
};

export default Footer;
