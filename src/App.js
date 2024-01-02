import Featured from "./components/Featured";
import Hero from "./components/Hero";
import BurgerShow from "./components/BurgerShow";
import Menu from "./components/Menu";
import SpecialOffer from "./components/SpecialOffers";
import Footer from "./components/Footer";
import { FaHamburger } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <BurgerShow />
      <Menu />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [stickyClass, setStickyClass] = useState("");

  function onToggleShow() {
    setShowNav((nav) => !nav);
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 700
        ? setStickyClass("fixed left-0 right-0 z-50 second-nav")
        : setStickyClass("relative");
    }
  };
  return (
    <header
      className={`h-24 flex justify-between items-center lg:px-10 px-4 bg-lightest-orange text-medium-gray ${stickyClass}`}
    >
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
      <nav className="flex items-center">
        <ul className="lg:flex hidden gap-x-12 items-center">
          <a href="#hero">
            <NavbarList className="text-lg font-bold">Home</NavbarList>
          </a>
          <a href="#burger-show">
            <NavbarList className="text-lg font-bold">Recommended</NavbarList>
          </a>
          <a href="#menu-section">
            <NavbarList className="text-lg font-bold">Menu</NavbarList>
          </a>
          <a href="#testimonials">
            <NavbarList className="text-lg font-bold">Testimonials</NavbarList>
          </a>
          <button className="py-2 px-7 rounded font-bold bg-medium-orange text-white uppercase">
            Try for free
          </button>
        </ul>
      </nav>

      <div className="block lg:hidden ">
        {showNav ? (
          <RxCross2 className="text-2xl" onClick={onToggleShow} />
        ) : (
          <FaHamburger className="text-2xl" onClick={onToggleShow} />
        )}
        {showNav && (
          <ul className="lg:flex md:flex flex flex-col items-center absolute left-0 right-0 top-16 pt-11 py-10 gap-10 bg-dark-blue z-10">
            <a href="#hero" onClick={onToggleShow}>
              <NavbarList className="text-lg font-bold">Home</NavbarList>
            </a>
            <a href="#burger-show" onClick={onToggleShow}>
              <NavbarList className="text-lg font-bold">Recommended</NavbarList>
            </a>
            <a href="#menu-section" onClick={onToggleShow}>
              <NavbarList className="text-lg font-bold">Menu</NavbarList>
            </a>
            <a href="#testimonials" onClick={onToggleShow}>
              <NavbarList className="text-lg font-bold">
                Testimonials
              </NavbarList>
            </a>
            <button className="py-2 px-7 rounded font-bold bg-medium-orange text-white uppercase">
              Try for free
            </button>
          </ul>
        )}
      </div>
    </header>
  );
}

function NavbarList({ children, className }) {
  return <li className={className}>{children}</li>;
}
