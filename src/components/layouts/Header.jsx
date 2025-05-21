import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header class="w-full">
        <div className="bg-orange-200 text-center py-2 text-sm  font-semibold text-teal-700 ">
          <p>
            <strong> FREE SHIPPING ON ALL ORDERS $65+</strong>
          </p>
        </div>
        <div className="bg-teal-800 text-white py-2 top-0 left-0">
          <div className="container mx-auto px-4 flex  justify-between items-center ">
            {/* {* icon navabar  *} */}
            <div className="flex gap-2 text-lg">
              <a
                href="#"
                className="items-center justify-center flex px-1 py-1 bg-white rounded-full"
              >
                <FaFacebook className="cursor-pointer h-6 w-6 rounded-full text-teal-800" />
              </a>
              <a
                href="#"
                className="items-center justify-center flex px-1 py-1 bg-white rounded-full"
              >
                <FaInstagram className="cursor-pointer h-6 w-6 rounded-full text-teal-800" />
              </a>
              <a
                href="#"
                className="items-center justify-center flex px-2 py-1 bg-white rounded-full"
              >
                <FaTiktok className="cursor-pointer h-6 w-6 rounded-full  text-teal-800" />
              </a>
              <a
                href="#"
                className="items-center justify-center flex px-1 py-1 bg-white rounded-full"
              >
                <FaYoutube className="cursor-pointer h-6 w-6 rounded-full  text-teal-800" />
              </a>
            </div>
            {/* menu */}
            <nav className="flex flex-1 items-center gap-6 text-sm font-bold relative">
            <div className="div">
123
            </div>
            <div className="div">
123
            </div>
            <div className="div">
123
            </div>
            <div className="div">
123
            </div>

            </nav>
            <div className="flex gap-3 items-center">
              <Link to="/login" className="cursor-pointer h-6 w-6">
                <FaUser className="h-6 w-6" />
              </Link>
              <Link to="/search" className="cursor-pointer">
                <FaSearch className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="cursor-pointer">
                <FaShoppingCart className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
