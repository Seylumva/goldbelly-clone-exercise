import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-cyan-600 text-white">
      <div className="container mx-auto px-4 xl:px-0 flex flex-wrap md:flex-nowrap md:flex-row gap-5 justify-between md:justify-center items-center pt-5">
        <h1 className="text-xl leading-6 md:leading-8 md:text-3xl font-black uppercase w-min md:mr-5">
          <Link to="/">Meal Delivery</Link>
        </h1>
        <div className="flex w-full order-3 md:order-2">
          <input
            className="w-full py-2 px-4 focus:outline-none text-black border-stone-400 border-l border-t border-b rounded-tl rounded-bl"
            type="text"
            placeholder="Search America's Greatest Foods &amp; Shops"
          />
          <button className="rounded-tr rounded-br border-stone-400 border-r border-b border-t bg-white text-black px-3">
            <FaSearch />
          </button>
        </div>
        <Link
          to="/cart"
          className="ml-5 -scale-x-100 order-2 md:order-3 text-2xl"
        >
          <FaShoppingCart />
        </Link>
      </div>
      <nav className="mt-3 pb-3">
        <ul className="flex gap-8 justify-center text-md uppercase font-black">
          <li>
            <Link to="/categories">Foods</Link>
          </li>
          <li>
            <Link to="/gifts">Gifts</Link>
          </li>
          <li>
            <Link to="/sales">Sales</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
