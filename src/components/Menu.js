import { GiHamburger } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi2";
const burgerdata = [
  {
    name: "burger beef",
    image: "./images/burger/burger-1.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-2.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-3.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-4.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-5.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-6.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-7.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-8.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-9.png",
  },
  {
    name: "burger beef",
    image: "./images/burger/burger-10.png",
  },
];
export default function Menu() {
  return (
    <div className="menu-section">
      <div className="flex justify-center items-center gap-3 pb-5">
        <GiHamburger className="text-medium-orange text-4xl" />
        <h2 className="text-center text-2xl uppercase font-semibold text-dirty-white">
          Featured Menu
        </h2>
        <GiHamburger className="text-medium-orange text-4xl" />
      </div>

      <ul className="flex flex-wrap justify-center gap-10 lg:px-44 py-5">
        {burgerdata.map((burger) => (
          <MenuList burger={burger} key={burger.image} />
        ))}
      </ul>
      <a href="_" className="flex justify-center items-center gap-1 pt-3">
        <h2 className="text-dirty-white border border-b-1 border-t-0 border-r-0 border-l-0">
          click for more
        </h2>

        <HiArrowRight className="text-lg text-dirty-white" />
      </a>
    </div>
  );
}

function MenuList({ burger }) {
  return (
    <li className="burger-list">
      <img src={burger.image} alt={burger.name} />
      <h2 className="text-lg capitalize font-semibold">{burger.name}</h2>
    </li>
  );
}
