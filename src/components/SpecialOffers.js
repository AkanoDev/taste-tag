import { FaFire } from "react-icons/fa6";
import { LuBeef } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const specialdata = [
  {
    name: "Double Quarter Pound",
    image: "./images/burger/burger-12.png",
    calories: "900",
    rating: "4.9 rating (9,000)",
  },
  {
    name: "BLT Spicy Chicken",
    image: "./images/burger/chicken-1.png",
    calories: "840",
    rating: "4.4 rating (12,000)",
  },
];

export default function SpecialOffer() {
  return (
    <div
      className="flex flex-col px-10 pt-32 pb-20 lg:h-screen h-auto bg-slate-100 text-medium-gray"
      id="testimonials"
    >
      <h2 className="text-center text-xl uppercase text-dark-blue font-medium pb-20">
        - Specials -
      </h2>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
        <div className="flex lg:flex-row md:flex-row flex-col gap-12">
          {specialdata.map((special) => (
            <Offer special={special} key={special.name} />
          ))}
        </div>
        <div className="testimony flex h-auto flex-col p-5 gap-2">
          <div className="flex items-center gap-6">
            <FaQuoteLeft className="text-5xl" />
            <em className="text-2xl">Testimonials</em>
          </div>
          <em className="pl-4 font-medium bg-white p-2 rounded-lg">
            "The burger experience was sheer delight! Succulent, seasoned beef
            blended seamlessly with crispy bacon, melted cheese, and a symphony
            of savory toppings. Every bite offered an explosion of flavors,
            leaving an indelible mark on my taste buds. This burger transcends
            the ordinary, a true culinary gem that earns my heartfelt
            recommendation. A 5-star delight for any discerning palate!"
          </em>

          <em className="pl-4 font-medium bg-white p-2 rounded-lg md:hidden">
            "This burger is a flavor symphony! Juicy, savory, and utterly
            satisfying. A solid 5/5 indulgence!"
          </em>

          <em className="pl-4 font-medium bg-white p-2 rounded-lg md:hidden">
            "This burger is an absolute delight! A perfect blend of juicy beef,
            flavorful toppings, and a hint of smokiness. A solid 5/5 – it
            surpassed expectations, making every bite a culinary joy. If you're
            a burger enthusiast, this is a must-try for an unforgettable taste
            experience!"
          </em>
        </div>
      </div>
    </div>
  );
}

function Offer({ special }) {
  return (
    <div className="special-offer">
      <div className="special-offer-card">
        <div className="bg-medium-orange w-full flex justify-center h-52 py-2 rounded-t-2xl">
          <div className="flex items-center">
            <img src={special.image} alt=".." />
          </div>
        </div>
        <h2 className="text-2xl font-medium pb-6">{special.name}</h2>
        <div className="special-content">
          <div className="flex flex-col gap-2">
            <FaFire className="text-3xl text-red-600" />
            <LuBeef className="text-3xl text-rose-400" />
            <FaRegStar className="text-3xl text-yellow-600" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl">{special.calories}</p>
            <p className="text-xl">Pure Beef</p>
            <p className="text-xl">{special.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
