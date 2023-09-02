import React from "react";
import CoffeeIcon from "./CoffeeIcon";

const RightTag = ({ hero }) => {
  return (
    <>
      <div className=" flex gap-x-3 items-center rotate-6  lg:rotate-[4deg] -left-14  mx-auto my-0  origin-left py-6 md:py-8 bg-biscotti-yellow absolute w-[200%] truncate overflow-hidden">
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
export default RightTag;
