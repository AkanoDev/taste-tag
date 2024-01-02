export default function Featured() {
  return (
    <div className="featured">
      <h2 className="uppercase font-semibold as-featured opacity-50">
        As featured in
      </h2>
      <div className="flex lg:gap-10 gap-4">
        <img
          src="./images/techcrunch.png"
          alt=""
          className="lg:h-9 h-3 brightness-0 opacity-50"
        />
        <img
          src="./images/business-insider.png"
          alt=""
          className="lg:h-9 h-4 brightness-0 opacity-50"
        />
        <img
          src="./images/the-new-york-times.png"
          alt=""
          className="lg:h-9 h-4 brightness-0 opacity-50"
        />
        <img
          src="./images/forbes.png"
          alt=""
          className="lg:h-9 h-3 brightness-0 opacity-50"
        />
        <img
          src="./images/usa-today.png"
          alt=""
          className="lg:h-9 h-3 brightness-0 opacity-50"
        />
      </div>
    </div>
  );
}
