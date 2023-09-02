import React from "react";
import caramelLatte from "../assets/coffee-images/caramel-latte-with-chocolade-table.jpg";
import dopio from "../assets/coffee-images/vertical-selective-focus-closeup-glass-fresh-coffee.jpg";
import galao from "../assets/coffee-images/milky-coffee-drink-with-strawberry-syrup.jpg";
import lungo from "../assets/coffee-images/lungo.jpg";
import affogato from "../assets/coffee-images/affogato.jpg";
import redEye from "../assets/coffee-images/red-eye.jpg";
import mocha from "../assets/coffee-images/mocha.jpg";
import flatWhite from "../assets/coffee-images/flat-white.jpg";
import cortado from "../assets/coffee-images/cortado.jpg";
const Coffee = () => {
  return (
    <section
      id="coffee"
      className="p-8 md:-mt-48 lg:-mt-64 xl:-mt-72 2xl:-mt-96  bg-bread-cream"
    >
      <div className="flex md:h-48 lg:h-64 xl:h-72 2xl:h-96"></div>
      <div className="flex mt-4 flex-col-reverse gap-y-4md:flex-row md:justify-between text-forest-green">
        <h4 className="font-light w-64 text-sm">
          There' always rom for cofffee, it's not just coffee, it's an
          experience, life is better with coffee
        </h4>
        <h2 className="text-6xl font-bold font-termina">OUR COFFEE</h2>
      </div>
      <CoffeeGrid />
    </section>
  );
};

export default Coffee;

const CoffeeGrid = () => {
  return (
    <>
      <div className="text-forest-green font-termina text-sm my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-row-3">
        {coffeeItems.map((coffee, index) => (
          <div className="w-full aspect-square" key={index}>
            {coffee.coffeeName}
            <img
              className="w-full h-full rounded-full object-cover"
              src={coffee.source}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

const coffeeItems = [
  {
    coffeeName: "Latte",
    source: caramelLatte,
  },
  {
    coffeeName: "Dopio",
    source: dopio,
  },
  {
    coffeeName: "Cortado",
    source: cortado,
  },
  {
    coffeeName: "Red Eye",
    source: redEye,
  },
  {
    coffeeName: "Galao",
    source: galao,
  },
  {
    coffeeName: "Lungo",
    source: lungo,
  },
  {
    coffeeName: "Affogato",
    source: affogato,
  },
  {
    coffeeName: "Mocha",
    source: mocha,
  },
  {
    coffeeName: "Flat White",
    source: flatWhite,
  },
];
