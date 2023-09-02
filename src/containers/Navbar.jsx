import React from "react";
import Header from "./Header";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-bread-cream py-4 px-8 bg-forest-green items-center">
      <h1 className=" font-termina font-extrabold text-2xl text-red-500">
        KAFF
      </h1>
      <ul className="md:flex font-extralight hidden sm:gap-4 md:gap-16">
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
      <div className="flex gap-2">
        <button className="px-6 py-2 rounded-3xl font-bold bg-bread-cream text-forest-green hover:bg-pine-green hover:text-bread-cream">
          Order Now
        </button>
        <Header />
      </div>
    </nav>
  );
};

export default Navbar;

const CoffeePreview = () => {
  return (
    <>
      <div className="flex"></div>
    </>
  );
};
