import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

interface OverlayProps {
  nav: boolean;
  setNav: (nav: boolean) => void;
}

const Overlay = ({ nav, setNav }: OverlayProps) => {
  return (
    <>
      {nav && (
        <div className="bg-black/80 dark:bg-space-gray fixed w-full h-screen z-10 top-0 left-0"></div>
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white dark:bg-black z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white dark:bg-black z-10 duration-500"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer dark:text-white"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4 dark:text-white">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 dark:text-white">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Overlay;
