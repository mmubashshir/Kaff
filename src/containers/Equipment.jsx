import React from "react";
import arrow from "../assets/icons/right-arrow.png";
const Equipment = () => {
  const roastings = [
    "light roast",
    "medium roast",
    "medium-dark roast",
    "dark roast",
  ];
  return (
    <section
      id="equipment"
      className="bg-forest-green px-8 text-bread-cream py-16 "
    >
      <h2 className="font-termina break-all text-4xl sm:text-6xl md:text-7xl font-bold py-8 text-justify ">
        USE PREMIUM ARABICA BEANS AND FRSHLY GROUND SPICES TO ACHIEVE AN{" "}
        <ArrowIcon />
        UNDENIABLY RICH, FLAVOURS COFFEE
      </h2>
      <div className="py-8 flex flex-col md:flex-row items-center justify-between text-bread-cream">
        <h2 className="font-termina font-bold text-4xl sm:text-6xl md:text-7xl ">
          OUR ROASTING
        </h2>
        <h4 className="self-start text-left md:text-right font-light w-72 text-sm">
          A cup of coffee on a warm summer day reminds you there's a bright side
          to every day, There's a great big coffee world waiting for you. And it
          tastes great!{" "}
        </h4>
      </div>
      <div className="flex flex-col gap-y-6">
        {roastings.map((roasting, index) => (
          <div
            key={index}
            className="cursor-pointer flex gap-2 group/roast hover:bg-biscotti-yellow items-center justify-between rounded-full hover:text-pine-green bg-pine-green p-8 "
          >
            <h3 className="font-termina uppercase  text-2xl sm:text-4xl md:text-5xl font-bold">
              {roasting}
            </h3>
            <span className="bg-biscotti-yellow  group-hover/roast:bg-pine-green p-4 w-16 aspect-square rounded-full">
              {/* <ArrowIcon/> */}
              <Redirects />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipment;

const ArrowIcon = () => (
  <svg
    className="h-14 -mt-2 mx-2 rounded-full  bg-biscotti-yellow px-8 py-2 text-hazelnut inline"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
  >
    <path
      className="-rotate-45 origin-center"
      fill="currentColor"
      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
    />
  </svg>
);

const Redirects = () => (
  <svg
    className="text-hazelnut inline group-hover/roast:text-biscotti-yellow h-8 ml-[2px]"
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
  >
    <path
      className="-rotate-45 origin-center"
      fill="currentColor"
      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
    />
  </svg>
);
