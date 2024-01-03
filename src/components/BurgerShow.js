import { BsArrowDown } from "react-icons/bs";
import {} from "react-icons/bs";

export default function BurgerShow() {
  return (
    <div
      className="section-burger-show w-screen text-dark-blue bg-medium-orange"
      id="burger-show"
    >
      <div className="pos-burger gap-10 w-full">
        <p className="font-bold">
          Overload Burger, A bold fusion of premium beef, smoky bacon, and
          savory delights in every bite.
        </p>

        <div className="burger-show w-full">
          <div className="w-72 h-64 mt-400 lg:flex hidden flex-col justify-end items-center gap-4">
            <BsArrowDown className="text-4xl arrow" />
            <h2 className="text-center font-semibold uppercase">
              Cheddar BLT burger with Tarragon Russian Dressing
            </h2>
            <img
              src="./images/burger/burger-1.png"
              alt="burger-1"
              className="h-32 w-32"
            />
          </div>
          <div className="mid-burger">
            <h2 className="lg:text-8xl sm:text-7xl text-6xl uppercase font-bold text-center">
              burgerrr
            </h2>
            <img
              src="./images/burger-full.png"
              alt="burger"
              className="main-burger lg:min-w-480 md:min-w-480 sm:w-480 w-480 mt-8"
            />
          </div>
          <h1 className="text-5xl uppercase font-bold w-72 lg:flex justify-start items-center hidden">
            100% pure beef and fresh veggies
          </h1>
        </div>
      </div>
    </div>
  );
}
