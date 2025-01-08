import React from "react";
import CoffeeIcon from "./CoffeeIcon";
import MarqueeText from "./MarqueeText";
const LeftTag = ({ hero }) => {
  let footer = [
    <CoffeeIcon />,
    <MarqueeText title="order now" />,
    <MarqueeText title="order now" />,
    <CoffeeIcon />,
    <MarqueeText title="order now" />,
    <MarqueeText title="order now" />,
    <CoffeeIcon />,
    <MarqueeText title="order now" />,
    <MarqueeText title="order now" />,
  ];
  let cn = [
    <CoffeeIcon />,
    <MarqueeText title="latte" />,
    <CoffeeIcon />,
    <MarqueeText title="mocha" />,
    <CoffeeIcon />,
    <MarqueeText title="Cappucino" />,
    <CoffeeIcon />,
    <MarqueeText title="galao" />,
    <CoffeeIcon />,
    <MarqueeText title="Cappucino" />
  ];
  return (
    <>
      <div className="-rotate-6 lg:-rotate-[4deg] -left-14  mx-auto my-0  origin-bottom-right-right py-6 md:py-8 bg-rough-yellow absolute w-[200%] truncate overflow-hidden">
        <div className="marquee-track-text flex gap-x-6 w-max pl-6 [--speed:30s]">
        {hero ? cn : footer}
        {hero ? cn : footer}
        </div>
      </div>
    </>
  );
};

export default LeftTag;
