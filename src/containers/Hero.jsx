import React from "react";
import { ReactFitty } from "react-fitty";
import hero from "../assets/hero.png";
import LeftTag from "../components/LeftTag";
import RightTag from "../components/RightTag";
import premiumIcon from "../assets/icons/premium-icon.png";
const Hero = () => {
  return (
    <section id="hero" className="px-8 bg-forest-green overflow-x-hidden">
      {/* Maybe use something else */}
      <div className="flex flex-col  whitespace-nowrap text-[12dvw] sm:text-[12.5dvw] xl:text-[13dvw] font-termina  text-bread-cream font-black leading-[0.8] w-screen">
        {/* <ReactFitty> */}
        <h1 className="">EXPRESSO</h1>
        <h1 className="ml-2 lg:ml-4">YOURSELF</h1>

        {/* </ReactFitty> */}
      </div>
      <div className="w-full">
        <div className="relative z-10 top-60  md:top-56 lg:top-72 xl:top-80 2xl:top-[30rem]">
          <LeftTag hero={true} />
        </div>
        <div className="relative z-30 top-60  md:top-56 lg:top-72 xl:top-80 2xl:top-[30rem]">
          <RightTag hero={true} />
        </div>
        <div className="big rounded-b-[24rem] w-full -mt-20 md:-mt-28 lg:-mt-32 md:w-medium lg:w-large xl:-mt-38 xl:w-xLarge 2xl:-mt-44 2xl:w-xxLarge mx-auto overflow-hidden relative">
          <div className="circle z-0 shadow-inner w-full aspect-square md:mt-28 lg:mt-32 xl:mt-38 2xl:mt-44 md:w-medium md:h-medium lg:w-large lg:h-large xl:w-xLarge xl:h-xLarge 2xl:w-xxLarge 2xl:h-xxLarge mt-20 rounded-full ">
            <img
              className="absolute z-20 drop-shadow-2xl top-0"
              src={hero}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="-mx-8 bg-bread-cream h-60 -mt-[50%] md:hidden"></div>
      </div>
    </section>
  );
};

export default Hero;
