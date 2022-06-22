import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="py-5 font-black text-sm md:text-2xl uppercase text-center">
        🚀 We ship America's most loved foods nationwide ❤️
      </h1>
      <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-2">
        <Link to="/fathers-day">
          <div className="bg-fuchsia-300 aspect-square grid place-items-center font-bold text-sm md:text-lg lg:text-2xl">
            FATHER'S DAY GIFTS
          </div>
        </Link>
        <Link to="/perfect-gift" className="col-span-2">
          <div className="bg-blue-600 grid place-items-center h-full font-bold text-sm md:text-lg lg:text-2xl">
            THE PERFECT GIFT FOR ANY OCCASION
          </div>
        </Link>
        <Link to="/chocolate-promo">
          <div className="bg-yellow-300 aspect-square grid place-items-center font-bold text-sm md:text-lg lg:text-2xl">
            CHOCOLATE FEVER
          </div>
        </Link>
        <Link to="/regional-eats">
          <div className="bg-indigo-300 aspect-square grid place-items-center font-bold text-sm md:text-lg lg:text-2xl">
            BEST REGIONAL EATS
          </div>
        </Link>
        <Link to="/best-sellers">
          <div className="bg-sky-300 aspect-square grid place-items-center font-bold text-sm md:text-lg lg:text-2xl">
            BEST SELLERS
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
