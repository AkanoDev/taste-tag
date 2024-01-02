export default function Hero() {
  return (
    <main
      className="h-screen lg:px-20 px-5 bg-lightest-orange text-medium-gray"
      id="hero"
    >
      <section className="pt-12 pb-32">
        <div className="lg:grid lg:grid-cols-2 items-center lg:gap-32 px-3">
          <div className="flex flex-col lg:gap-12 gap-10">
            <h1 className="text-5xl font-bold">
              Delicious burgers, delivered daily to your door.
            </h1>
            <p className="text-xl">
              Indulge in a delectable burger subscription, 365 days a year.
              Tailored and personalized to your unique taste, it's the smart and
              savory way to savor your favorite flavors daily.
            </p>
            <div className="flex gap-4">
              <a
                href="#menu-section"
                className="py-4 lg:px-10 px-4 rounded-lg font-bold bg-medium-orange text-white uppercase"
              >
                Start eating well
              </a>
              <a
                href="#testimonials"
                className="py-4 lg:px-14 px-8 rounded-lg font-bold bg-white text-medium-orange uppercase"
              >
                Learn more
              </a>
            </div>

            <div className="flex items-center gap-8 pt-12">
              <div className="flex">
                <div className="h-10 w-10 rounded-full  bg-blue-400 border border-white"></div>
                <div className="h-10 w-10 rounded-full -ml-3 bg-green-400 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full -ml-3 bg-red-400 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full -ml-3 bg-yellow-400 border-2 border-white"></div>
                <div className="h-10 w-10 rounded-full -ml-3 bg-purple-400 border-2 border-white"></div>
              </div>
              <p className="font-bold text-lg">
                250,000+ burgers delivered last year!
              </p>
            </div>
          </div>

          <div>
            <img
              src="./images/burger-flying.png"
              alt="hero"
              className="max-h-500 hidden lg:flex "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
