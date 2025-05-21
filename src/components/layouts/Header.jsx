import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaUser,
  FaSearch,
  FaShoppingCart,
  FaLaptopHouse,
  FaBars,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {useState} from "react";
const shopItems = [
  {
    href: "/collections",
    img: "./header/shop/cafe.avif",
    alt: "Vietnamese Coffee",
    title: "COFFEE",
    description: "Premium Vietnamese Coffee",
  },
  {
    href: "/collections/bundles",
    img: "./header/shop/Bundle.avif",
    alt: "Bundles",
    title: "BUNDLES",
    description: "Bundle up & Save",
  },
  {
    href: "/collections",
    img: "./header/shop/Brew_Tools.avif",
    alt: "Phin Filter",
    title: "BREW TOOLS",
    description: "Original Vietnamese Phin Filters",
  },
];

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <header className="w-full">
        {/* === giao diện desktop === */}
        <div className="hidden md:block">
          <div className="bg-orange-200 text-center py-2 text-sm font-semibold text-teal-700">
            <p>
              <strong>FREE SHIPPING ON ALL ORDERS $65+</strong>
            </p>
          </div>

          <div
            className=" text-white py-2"
            style={{ backgroundColor: "rgb(18, 111, 134)" }}
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              {/* Social Icons */}
              <div className="flex gap-2 text-lg">
                {[FaFacebook, FaInstagram, FaTiktok, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-center px-1 py-1 bg-white rounded-full"
                    >
                      <Icon className="cursor-pointer h-6 w-6 text-teal-800" />
                    </a>
                  )
                )}
              </div>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-lg font-bold relative">
                <ul className="flex items-center gap-6">
                  <li
                    className="relative group"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <div className="cursor-pointer flex items-center gap-1">
                      SHOP <span>▼</span>
                    </div>

                    {/* Mega Dropdown */}
                    {showDropdown && (
                      <div className="fixed left-0 right-0 w-full mt-2 transition-opacity duration-700 h-screen bg-black/70 opacity-100 z-50">
                        <div className="py-12 bg-white">
                          <div className="container mx-auto text-teal-700">
                            <div className="flex gap-20">
                              <div>
                                <Link
                                  className="flex space-x-2 items-center"
                                  to="/collections"
                                >
                                  <span className="font-anton text-xl text-teal-800">
                                    SHOP ALL PRODUCTS
                                  </span>
                                  <div className="w-6">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </div>
                                </Link>

                                <div className="grid grid-cols-4 gap-8 mt-5">
                                  {shopItems.map((item, index) => (
                                    <Link key={index} to={item.href}>
                                      <div className="flex flex-col justify-end space-y-4 h-full">
                                        <img
                                          loading="eager"
                                          src={item.img}
                                          alt={item.alt}
                                        />
                                        <p className="font-semibold uppercase text-xl">
                                          {item.title}
                                        </p>
                                        <p className="text-xs">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/wholesale">WHOLESALE</Link>
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        src="/logo.svg"
                        alt="May Coffee Crew"
                        className="h-8"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/stockists">STOCKISTS</Link>
                  </li>
                </ul>
              </nav>

              {/* User Actions */}
              <div className="flex gap-3 items-center">
                <Link to="/login">
                  <FaUser className="h-6 w-6" />
                </Link>
                <Link to="/search">
                  <FaSearch className="h-6 w-6" />
                </Link>
                <Link to="/cart">
                  <FaShoppingCart className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === giao diện trên MOBILE  === */}
        <div className="block md:hidden">
          {/* Marquee banner */}
          <div className="bg-orange-200 text-center py-2 text-sm font-semibold text-teal-700 overflow-hidden whitespace-nowrap">
            <marquee behavior="scroll" direction="left">
              <strong>FREE SHIPPING ON ALL ORDERS $65+</strong>
            </marquee>
          </div>

          {/* Navbar mobile */}
          <div
            className=" text-white py-2 px-4 flex justify-between items-center"
            style={{ backgroundColor: "rgb(18, 111, 134)" }}
          >
            <button onClick={toggleMenu} className="cursor-pointer">
              <FaBars className="h-6 w-6" />
            </button>
            <img src="/logo.svg" className="h-8" alt="Logo" />
            <div className="flex gap-3 items-center">
              <FaSearch className="h-5 w-5" />
              <FaUser className="h-5 w-5" />
              <FaShoppingCart className="h-5 w-5" />
            </div>
          </div>

          {/* Slide menu */}
          {isMenuOpen && (
            <div className=" mt-5 w-full h-full fixed left-0 top-[56px]  flex flex-col justify-between bg-black/80">
              <div
                className="flex-1 h-full w-[80vw] px-4 text-white"
                style={{ backgroundColor: "rgb(18, 111, 134)" }}
              >
                <div className="text-xl flex flex-col py-4">
                  <div
                    className="border-b py-2 flex justify-between  cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="uppercase font-semibold text-white">
                      Shop
                    </span>
                    <FaChevronRight
                      className={`text-sm text-white transition-transform duration-300 ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  {open && (
                    <ul className="pl-4 text-lg  text-white transition-all duration-300">
                      <li className="py-1 border-b uppercase">
                        <Link to="/collection">Shop all</Link>
                      </li>
                      <li className="py-1 border-b uppercase">
                        <Link to="/collection">Coffee</Link>
                      </li>
                      <li className="py-1 border-b uppercase">
                        <Link to="/collection">Brew tools</Link>
                      </li>
                      <li className="py-1 border-b uppercase">
                        <Link to="/collection">Bundles</Link>
                      </li>
                    </ul>
                  )}

                  <Link
                    to="#"
                    className="uppercase border-b mb-2 font-semibold"
                  >
                    Wholesale
                  </Link>

                  <div className="grid grid-cols-1 mt-10 gap-2">
                    <a href="/collections" onClick={closeMenu}>
                      Shop
                    </a>
                    <a href="/pages/sustainability" onClick={closeMenu}>
                      Sustainability
                    </a>
                    <a href="/pages/about-our-story" onClick={closeMenu}>
                      About Us
                    </a>
                    <a href="/pages/about-coffee" onClick={closeMenu}>
                      Our coffee
                    </a>
                  </div>
                </div>
              </div>
              {/* Overlay click to close */}
              <div className="flex-1" onClick={closeMenu}></div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
