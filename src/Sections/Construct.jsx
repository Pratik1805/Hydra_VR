import React from "react";
import { arrowRightAbout } from "../assets/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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

      <VerticalTimeline lineColor="linear-gradient(#343045,#C0B7E8,#8176AF,#343045)">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg, #8176AF, #C0B7E8)",
            color: "#fff",
          }}
          iconStyle={{ background: " #8176AF" }}
          contentArrowStyle={{ borderRight: "7px solid  #C0B7E8" }}
          date="STEP-01"
        >
          <h3 className="vertical-timeline-element-title font-bold text-3xl">
            3D Conception & Design
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg, #C0B7E8, #8176AF)",
            color: "#fff",
          }}
          iconStyle={{ background: " #8176AF" }}
          contentArrowStyle={{ borderRight: "7px solid  #C0B7E8" }}
          date="STEP-02"
        >
          <h3 className="vertical-timeline-element-title font-bold text-3xl">
            Interaction Design
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg, #8176AF, #C0B7E8)",
            color: "#fff",
          }}
          iconStyle={{ background: " #8176AF" }}
          contentArrowStyle={{ borderRight: "7px solid  #C0B7E8" }}
          date="STEP-03"
        >
          <h3 className="vertical-timeline-element-title font-bold text-3xl">
            VR World User Testing
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(45deg,#C0B7E8, #8176AF)",
            color: "#fff",
          }}
          iconStyle={{ background: " #8176AF" }}
          contentArrowStyle={{ borderRight: "7px solid  #C0B7E8" }}
          date="STEP-04"
        >
          <h3 className="vertical-timeline-element-title font-bold text-3xl">
            Hydra VR Deploy
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Construct;
