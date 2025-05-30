import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FaArrowUp } from "react-icons/fa";


export const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />

        {/* {isScrolled && (
          <button
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-[#5b9ea6] text-white p-3 rounded-full shadow-md hover:opacity-80 transition"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )} */}
        {isScrolled && (
          <button
            onClick={handleScrollToTop}
            className=" cursor-pointer fixed bottom-6 right-6 z-50 bg-[#5b9ea6] text-white p-3 rounded-full shadow-md hover:opacity-80 transition"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};
