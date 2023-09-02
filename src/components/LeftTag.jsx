import React from "react";
import CoffeeIcon from "./CoffeeIcon";
const LeftTag = ({ hero }) => {
  return (
    <>
      <div className=" flex gap-x-6  -rotate-6 lg:-rotate-[4deg] -left-14  mx-auto my-0  origin-bottom-right-right py-6 md:py-8 bg-rough-yellow absolute w-[200%] truncate overflow-hidden">
        {/* <marquee behavior="" direction="right"> */}
        <span className="text-hazelnut text-opacity-60">
          <CoffeeIcon />
        </span>

        <h3 className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
          {hero ? "latte" : "ORDER NOW"}
        </h3>
        {hero && (
          <span className="text-hazelnut text-opacity-60">
            <CoffeeIcon />
          </span>
        )}
        <h3 className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
          {hero ? "mocha" : "ORDER NOW"}
        </h3>
        <span className="text-hazelnut text-opacity-60">
          <CoffeeIcon />
        </span>
        <h3 className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
          {hero ? "Cappucino" : "ORDER NOW"}
        </h3>
        {hero && (
          <span className="text-hazelnut text-opacity-60">
            <CoffeeIcon />
          </span>
        )}
        <h3 className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
          {hero ? "galao" : "ORDER NOW"}
        </h3>
        <span className="text-hazelnut text-opacity-60">
          <CoffeeIcon />
        </span>
        <h3 className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
          {hero ? "Cappucino" : "ORDER NOW"}
        </h3>
      </div>
    </>
  );
};

export default LeftTag;
