import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Toggle from "./toggle-theme";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} className="dark:text-white" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 dark:text-white">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-purple-500 rounded-full p-1 text-[14px] shadow-md shadow-slate-200 dark:shadow-none">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2 text-black">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] shadow-md shadow-slate-200 dark:shadow-none">
        <AiOutlineSearch size={20} className="dark:text-black" />
        <input
          type="text"
          placeholder="Search food"
          className="bg-transparent p-2 focus:outline-none w-full text-black"
        />
      </div>
      <button className="dark:bg-white bg-black text-black hidden md:flex items-center py-2 rounded-full shadow-md shadow-slate-200 dark:shadow-none">
        <BsFillCartFill size={20} className="mr-2 dark:text-black text-white" />
        <span className="dark:text-black text-white">Cart</span>
      </button>
      <div className="ml-2">
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
