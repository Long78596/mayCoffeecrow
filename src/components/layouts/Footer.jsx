import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
const footerData = [
  {
    title: "Shop",
    links: [
      { to: "#", label: "Coffee" },
      { to: "#", label: "Brewing" },
      { to: "#", label: "Wholesale" },
      { to: "#", label: "Affiliate Program" },
    ],
  },
  {
    title: "About Us",
    links: [
      { to: "#", label: "Our Coffee" },
      { to: "#", label: "Our Story" },
      { to: "#", label: "Our Values" },
      { to: "#", label: "Sustainability" },
      { to: "#", label: "Blog" },
    ],
  },
  {
    title: "Information",
    links: [
      { to: "#", label: "Contact Us" },
      { to: "#", label: "Brewing Guide" },
      { to: "#", label: "FAQs" },
      { to: "#", label: "Returns" },
      { to: "#", label: "Shipping Policy" },
      { to: "#", label: "Terms of Service" },
      { to: "#", label: "Privacy Policy" },
    ],
  },
];


export const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <footer className="bg-white text-slate-800 px-4 md:px-16 py-12">
      <section>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl bg-[#90e9f6] p-4 lg:p-8 flex flex-col justify-center space-y-2">
            <p className="text-4xl font-anton text-[#0a7485]">
              <strong>JOIN THE CREW</strong>
            </p>
            <p className="text-2xl mt-2 text-[#0a7485]">
              Get exclusive offers straight to your inbox - be the first to
              know.
            </p>
            <input
              className="border border-black bg-white rounded-full h-[60px] w-full px-4 py-1 placeholder:text-2xl"
              type="text"
              placeholder="Your name"
            />
            <div className="flex rounded-full border border-primary bg-white pl-4">
              <input
                type="email"
                className="border-none  border-black outline-none w-full h-[60px] bg-transparent placeholder:text-2xl"
                placeholder="Enter your Email"
                required
              />
              <button
                className="rounded-full px-6 py-2 bg-[#0a7485] text-white flex items-center justify-center"
                type="submit"
              >
                <FaArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className=" lg:row-start-auto flex items-end justify-center lg:justify-end">
            <img
              loading="eager"
              className="w-[80%]"
              src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/3mascot.webp?v=1699621517"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-20">
          <div className="w-[300px]  mx-auto space-x-1.5 lg:mx-0 flex flex-col items-center">
            <img
              src="https://maycoffeecrew.co.nz/cdn/shop/files/logo.svg?v=1699640189&width=500"
              alt=" May coffer crew"
              className="w-[70%] mx-auto lg:w-full"
            />

            <div className="flex space-y-2 mt-5 items-center gap-5 justify-center">
              <Link
                to="#"
                className="flex justify-center items-center w-10 h-10 bg-[#065e6c] rounded-full"
              >
                <FaFacebookF className="text-white text-2xl" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-10 h-10 bg-[#065e6c] rounded-full"
              >
                <FaInstagram className="text-white text-2xl" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-10 h-10 bg-[#065e6c] rounded-full"
              >
                <FaTiktok className="text-white text-2xl" />
              </Link>
              <Link
                to="#"
                className="flex justify-center items-center w-10 h-10 bg-[#065e6c] rounded-full"
              >
                <FaYoutube className="text-white text-2xl" />
              </Link>
            </div>
            <p className=" mt-2 text-center pt-1 text-2xl">
              © 2025 May Coffee Crew
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:gap-4 lg:gap-10 text-primary w-full">
            {footerData.map((data, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b-[2px] md:border-b-0 border-[#044a54] py-2 md:py-0 w-full"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between md:cursor-default"
                  >
                    <span className="text-[#065e6c] text-title font-bold text-left">
                      {data.title}
                    </span>

                    <span
                      className={`md:hidden  ${isOpen ? "rotate-180" : ""}`}
                    >
                      <FaChevronDown className="text-[#065e6c] text-xs" />
                    </span>
                  </button>

                  <ul
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                    } md:max-h-none md:mt-4 list-disc pl-5`}
                  >
                    {data.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          to={link.to}
                          className="text-teal-800 text-2xl block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

