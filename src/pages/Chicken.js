import { Link } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const chickendata = [
  {
    name: "CS1",
    image: "./images/burger/chicken-1.png",
  },
  {
    name: "CS2",
    image: "./images/burger/chicken-2.png",
  },
  {
    name: "CS3",
    image: "./images/burger/chicken-3.png",
  },
  {
    name: "CS4",
    image: "./images/burger/burger-10.png",
  },
];

export default function Chicken() {
  const [showNav, setShowNav] = useState(false);

  function onToggleShow() {
    setShowNav((nav) => !nav);
  }
  return (
    <div className="px-12">
      <div className="flex items-center justify-between">
        <nav className="flex gap-16 py-12">
          <Link to="/">
            <strong className="flex text-3xl">
              <span className="uppercase">Taste</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                viewBox="0 -960 960 960"
                width="36"
                fill="#E59C44"
              >
                <path d="M570-104q-23 23-57 23t-57-23L104-456q-11-11-17.5-26T80-514v-286q0-33 23.5-56.5T160-880h286q17 0 32 6.5t26 17.5l352 353q23 23 23 56.5T856-390L570-104Zm-57-56 286-286-353-354H160v286l353 354ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640ZM160-800Z" />
              </svg>
              <span className="uppercase">ag</span>
            </strong>
          </Link>
          <ul className="lg:flex hidden gap-10 items-center">
            <Link to="/menus" className="text-lg font-medium">
              <GiHamburger className="text-medium-orange text-4xl" />
            </Link>
            <Link to="/grilled" className="text-lg font-medium">
              Grilled Burger
            </Link>
            <Link to="/cheesy" className="text-lg font-medium">
              Cheesy Burger
            </Link>
            <Link to="/titan" className="text-lg font-medium">
              Titan Burger
            </Link>
            <Link to="/chicken" className="text-lg font-medium">
              Chicken Sandwich
            </Link>
            <Link to="/plant" className="text-lg font-medium">
              Plant Sandwich
            </Link>
            <Link to="/drink" className="text-lg font-medium">
              Drinks
            </Link>
          </ul>
        </nav>

        <div className="block lg:hidden ">
          {showNav ? (
            <RxCross2 className="text-2xl" onClick={onToggleShow} />
          ) : (
            <FaHamburger className="text-2xl" onClick={onToggleShow} />
          )}
          {showNav && (
            <ul className="lg:flex md:flex flex flex-col items-center absolute left-0 right-0 top-28 pt-11 py-10 gap-10 bg-light-white z-10">
              <Link to="/menus" className="text-lg font-medium">
                <GiHamburger className="text-medium-orange text-4xl" />
              </Link>
              <Link to="/grilled" className="text-lg font-medium">
                Grilled Burger
              </Link>
              <Link to="/cheesy" className="text-lg font-medium">
                Cheesy Burger
              </Link>
              <Link to="/titan" className="text-lg font-medium">
                Titan Burger
              </Link>
              <Link to="/chicken" className="text-lg font-medium">
                Chicken Sandwich
              </Link>
              <Link to="/plant" className="text-lg font-medium">
                Plant Sandwich
              </Link>
              <Link to="/drink" className="text-lg font-medium">
                Drinks
              </Link>
            </ul>
          )}
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <ul className="w-4/6 flex flex-wrap justify-center gap-10 lg:px-10 py-5">
          {chickendata.map((menus) => (
            <ChickenList menus={menus} key={menus.image} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChickenList({ menus }) {
  return (
    <li className="flex flex-col items-center">
      <img src={menus.image} alt={menus.name} className="h-24" />
      <h2 className="text-lg capitalize font-semibold">{menus.name}</h2>
    </li>
  );
}
