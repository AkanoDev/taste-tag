import { BsArrowDown } from "react-icons/bs";
import {} from "react-icons/bs";

export default function BurgerShow() {
  return (
    <div className="section-burger-show text-dark-blue bg-medium-orange">
      <div className="pos-burger gap-10">
        <p className="font-bold">
          Overload Burger, A bold fusion of premium beef, smoky bacon, and
          savory delights in every bite.
        </p>

        <div className="burger-show">
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
            <h2 className="lg:text-8xl text-7xl uppercase font-bold text-center">
              burgerrr
            </h2>
            <img
              src="./images/burger-full.png"
              alt="burger"
              className="main-burger"
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
