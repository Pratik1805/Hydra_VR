import { useState } from "react";
import { contact } from "../Constants";
import CarouselItem from "./CarouselItem";
import { circleLeftArrow, circleRightArrow } from "../assets/icons";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
        newIndex = 0;
    }
    else if(newIndex >= contact.length){
        newIndex = contact.length - 1;
    }

    setActiveIndex(newIndex);
  }
  return (
    <div className=" overflow-hidden max-w-[100%] flex flex-col justify-center items-center relative m-auto">
      <div
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
        className=" whitespace-nowrap transition transform duration-[0.3s] w-[85%]"
      >
        {contact.map((item) => (
          <CarouselItem item={item} key={item.name}/>
        ))}
      </div>

      <div className=" absolute inset-0 flex justify-between items-center cursor-pointer p-4">
        <button onClick={() => {
            updateIndex(activeIndex - 1);
        }}>
          <img src={circleLeftArrow} alt="" />
        </button>
        <button onClick={() => {
            updateIndex(activeIndex + 1);
        }}>
          <img src={circleRightArrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
