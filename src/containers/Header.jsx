import { useState } from "react";
import menu from "../assets/icons/menu.png";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* //implement dropdown menu */}
      <button onClick={() => setIsNavOpen(!isNavOpen)} className="h-8 w-8">
        <img className="h-full w-full" src={menu} alt="" />
      </button>
      {isNavOpen && (
        <div className="absolute p-4 top-14 right-0 w-32 h-44 z-50 rounded-md bg-biscotti-yellow backdrop-blur-lg">
          <ul className="flex font-extralight text-forest-green flex-col">
            <li className="border-b pb-2 font-semibold border-b-forest-green">
              <a href="#hero">Stories</a>
            </li>
            <li className="border-b py-2 font-semibold border-b-forest-green">
              <a href="#coffee">Coffee</a>
            </li>
            <li className="border-b py-2 font-semibold border-b-forest-green">
              <a href="#equipment">Equipment</a>
            </li>
            <li className="pt-2 font-semibold">
              <a href="#store">Store</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
