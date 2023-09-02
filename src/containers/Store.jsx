import React from "react";
import hero from "../assets/hero.png";
import coffeeIcon from "../assets/coffee-icons/coffee-cup.png";
import RightTag from "../components/RightTag";
import LeftTag from "../components/LeftTag";
const Store = () => {
  return (
    <section id="store" className="bg-forest-green px-8 pt-6 overflow-hidden ">
      <div className="relative h-56">
        <LeftTag />
        <RightTag />
      </div>
      {/* h-60 md:h-96 lg:h-[27rem] xl:h-[36rem] mt-10 */}
      <h1 className="self-end font-termina text-center text-7xl md:text-9xl font-bold text-white mb-10">
        ORDER
        <br />
        NOW
      </h1>
      <div className="text-bread-cream relative h-32 sm:h-56 md:h-60">
        <div className="absolute w-[20rem] sm:w-[30rem] -top-32 md:-top-40 md:w-[35rem] left-0 right-0 my-0 mx-auto overflow-hidden">
          <img className="w-full h-full" src={hero} />
        </div>
      </div>
      <footer className="flex text-bread-cream items-center py-8 justify-between">
        <div className="flex items-center">
          <span className="text-bread-cream w-4 h-4 sm:w-6 md:w-8 sm:h-6 md:h-8 inline ">
            <img className="w-full h-full" src={coffeeIcon} />
          </span>
          <h1 className=" font-termina font-extrabold sm:text-lg md:text-3xl text-red-500">
            KAFF
          </h1>
        </div>

        <ul className="flex-col sm:flex lg:flex-row font-extralight text-xs  sm:gap-x-2 md:gap-x-16">
          <li>
            <a href="#hero">Stories</a>
          </li>
          <li>
            <a href="#coffee">Coffee</a>
          </li>
          <li>
            <a href="#equipment">Equipment</a>
          </li>
          <li>
            <a href="#store">Store</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Store;

const CoffeeIcon = () => {
  return (
    <svg
      className=""
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="52"
      x="0"
      y="0"
      viewBox="0 0 28 28"
      // style="enable-background:new 0 0 512 512"
    >
      <g>
        <path
          fill="currentColor"
          d="M22 10H6a2.003 2.003 0 0 1-2-2V7a2.003 2.003 0 0 1 2-2h.514l.155-.673A2.984 2.984 0 0 1 9.592 2h8.816a2.984 2.984 0 0 1 2.923 2.328l.155.672H22a2.003 2.003 0 0 1 2 2v1a2.003 2.003 0 0 1-2 2zm-.223 2.324A.999.999 0 0 0 21.04 12H6.96a1 1 0 0 0-.996 1.086l.88 10.17A2.982 2.982 0 0 0 9.83 26h8.34a2.982 2.982 0 0 0 2.986-2.744l.88-10.17a.997.997 0 0 0-.259-.762zM12 19a2 2 0 1 1 2 2 2 2 0 0 1-2-2z"
          data-original="#0a0b12"
          className=""
        ></path>
      </g>
    </svg>
  );
};
