const CarouselItem = ({item,key}) => {
  return (
    <div className=" px-2 py-0 inline-flex items-center justify-center h-full w-full mt-2"
    key={item.name}>
      <div className=" px-2">
        <img src={item.imgURl} className="w-[72px] h-[72px]" />
      </div>

      <div className="text-base my-4 mx-0 whitespace-normal flex flex-col items-start justify-center max-w-[80%]">
        <h3 className="text-white font-semibold text-xl">{item.name}</h3>
        <p className="text-gray-200">{item.value}</p>
      </div>
    </div>
  );
};

export default CarouselItem;
