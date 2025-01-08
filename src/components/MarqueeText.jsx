import React from "react";

const MarqueeText = ({ title }) => {
  return (
    <p className="font-termina uppercase inline text-hazelnut text-4xl md:text-5xl font-bold">
      {title}
    </p>
  );
};

export default MarqueeText;
