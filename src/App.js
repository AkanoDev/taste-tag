import Featured from "./components/Featured";
import Hero from "./components/Hero";
import BurgerShow from "./components/BurgerShow";
import Menu from "./components/Menu";
import SpecialOffer from "./components/SpecialOffers";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menus from "./pages/Menus";
import Grilled from "./pages/Grilled";
import Cheesy from "./pages/Cheesy";
import Titan from "./pages/Titan";
import Chicken from "./pages/Chicken";
import Plant from "./pages/Plant";
import Drink from "./pages/Drink";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Featured />
                <BurgerShow />
                <Menu />
                <SpecialOffer />
                <Footer />
              </>
            }
          />
          <Route path="/menus" element={<Menus />} />
          <Route path="/grilled" element={<Grilled />} />
          <Route path="/cheesy" element={<Cheesy />} />
          <Route path="/titan" element={<Titan />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/drink" element={<Drink />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
