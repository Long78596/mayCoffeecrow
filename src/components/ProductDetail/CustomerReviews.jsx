import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";

const reviews = [
  { star: 5, count: 25 },
  { star: 4, count: 1 },
  { star: 3, count: 0 },
  { star: 2, count: 0 },
  { star: 1, count: 1 },
];
const reviews1 = [
  {
    name: "Mark Buckle",
    date: "22/05/25",
    title: "Best flavour, best service",
    content:
      "I'm a new customer but will be a long term customer. Robusta beans roasted to perfection and amazing service to boot. So happy I've found that rich flavour in NZ.",
    verified: true,
    rating: 5,
  },
  {
    name: "tim coopey",
    date: "18/05/25",
    title: "Best flavour, best service",
    content:
      "There is nothing wrong with the coffee but it’s more like a standard western style coffee, fine grind and not quite so rich. Still good though.👌",
    verified: false,
    rating: 4,
  },
  {
    name: "Ray Kelly",
    date: "09/05/25",
    title: "Best flavour, best service",
    content: "The best beans ever",
    verified: true,
    rating: 5,
  },
  {
    name: "Dallas Adams",
    date: "02/05/25",
    title: "Best flavour, best service",
    content: "Robusta is our favorite 😍 Deliciously strong and smooth!",
    verified: true,
    rating: 5,
  },
  {
    name: "Steve Sabine",
    date: "21/04/25",
    title: "Best flavour, best service",
    content:
      "Love the strong taste of this coffee over any shop purchased coffee or beans. 2kg lasts me about 5-6 weeks, 2-3 coffees in the morning. Also love it in egg or ice coffee.",
    verified: true,
    rating: 5,
  },
];

export const  CustomerReviews= () => {
  const totalReviews = reviews.reduce((sum, r) => sum + r.count, 0);
  const average = (
    reviews.reduce((sum, r) => sum + r.star * r.count, 0) / totalReviews
  ).toFixed(2);
  

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(reviews1.length / perPage);

  const currentReviews = reviews1.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  return (
    <div className="container mx-auto  mt-10">
      <div className="div mt-5 mb-5 justify-center items-center">
        <h2 className="font-bold text-3xl text-[#0a7485] text-center ">
          Customer Review
        </h2>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row items-start lg:items-center rounded p-6 bg-white space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-1 text-cyan-700 text-xl font-semibold">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i}>{i < Math.round(average) ? "★" : "☆"}</span>
              ))}
            <span className="text-xl font-normal ml-2">{average} out of 5</span>
          </div>
          <div className="text-xl text-gray-600 mt-1">
            Based on {totalReviews} reviews{" "}
            <span className="inline-block align-middle ml-1">
              <img
                className="inline w-4 h-4"
                src="https://judgeme-public-images.imgix.net/judgeme/logos/verified-checkmark.svg"
                alt="Verified"
              />
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col space-y-1">
          {reviews.map((r) => {
            const percent =
              totalReviews === 0 ? 0 : (r.count / totalReviews) * 100;
            return (
              <div key={r.star} className="flex items-center space-x-2">
                <div className="flex space-x-0.5 text-cyan-700 w-20 mr-15">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span className="text-2xl" key={i}>
                        {i < r.star ? "★" : "☆"}
                      </span>
                    ))}
                </div>
                <div className="w-[80%]  bg-gray-200  h-5">
                  <div
                    className="bg-cyan-700 h-full "
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="w-6 text-sm text-right">{r.count}</div>
              </div>
            );
          })}
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <button className="bg-cyan-700 text-white px-6 py-2 rounded font-semibold text-2xl hover:bg-cyan-800 transition">
            Write a review
          </button>
        </div>
      </div>

      <hr className="mt-5 mb-5 border text-[#adecf6]" />
      <div className="items-center justify-center flex flex-rows px-10 mt-10 gap-4">
        <div className="">
          <Link to="#">
            <img
              className="h-full w-full"
              src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/auth/gold.svg?auto=format"
              alt=""
            />
            <div className="text-[#cded18] text-center text-xl ">96.2</div>
          </Link>
        </div>
        <div className="div">
          <Link to="#">
            <img
              className="h-full w-full"
              src="https://judgeme-public-images.imgix.net/judgeme/medals-v2-2025-rebranding/tran/diamond.svg?auto=format"
              alt=""
            />
            <div className="text-[#2940d5] text-xl text-center">100.0</div>
          </Link>
        </div>
      </div>
      <div className="items-center justify-center flex flex-rows px-2 py-2 text-2xl text-[#0a7485]">
        <Link
          to="#"
          class="px-2 underline"
          href="https://app.judge.me/reviews/stores/maycoffeecrew.co.nz"
          target="_blank"
        >
          Verified
        </Link>
        <svg
          width="20"
          height="20"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41221 0C0.908409 0 0.5 0.408409 0.5 0.912207V15.0879C0.5 15.5917 0.908409 16.0001 1.41221 16.0001H15.5878C16.0916 16.0001 16.5 15.5917 16.5 15.0879V9.09481C16.5 8.80642 16.1485 8.66519 15.949 8.8734L12.7891 12.1708C11.4389 13.5797 10.0296 14.2803 8.56106 14.2725C7.10415 14.2763 5.72054 13.6231 4.41024 12.3128C3.01877 10.9213 2.28569 9.41149 2.21099 7.78333C2.15231 6.27994 2.73914 4.83048 3.97149 3.43497C4.1276 3.25818 4.39581 3.25584 4.56243 3.42246L7.33696 6.19699C7.50217 6.36219 7.50389 6.63088 7.35958 6.81526C6.68903 7.67203 6.66365 8.41032 7.28346 9.03013C7.90962 9.65629 8.60847 9.56682 9.38 8.76171L16.411 1.42462C16.4681 1.36505 16.5 1.28573 16.5 1.20322V0.912207C16.5 0.408409 16.0916 0 15.5878 0H1.41221Z"
            fill="#3EB2A2"
          ></path>
        </svg>
      </div>

      {/* Danh sách đánh giá */}

      <div className="mt-5 text-[#0a7485] border-y border-[#0a7485] py-4 px-4 flex ">
        <select className="rounded border border-[#0a7485] px-2 py-1 text-[#0a7485] focus:outline-none">
          <option value="most-recent">Most Recent</option>
          <option value="highest-rating">Highest Rating</option>
          <option value="lowest-rating">Lowest Rating</option>
          <option value="with-pictures">Only Pictures</option>
          <option value="pictures-first">Pictures First</option>
          <option value="videos-first">Videos First</option>
          <option value="most-helpful">Most Helpful</option>
        </select>
      </div>

      <div className="">
        <div className=" bg-white rounded text-[#0a7485] w-full text-xl ">
          {currentReviews.map((r, i) => (
            <div key={i} className="border-b py-6 ">
              <div className="flex flex-rows text-cyan-700 text-lg mb-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>{index < r.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm mb-1">
                <div className="flex items-center  space-x-1 font-medium">
                  <span className="bg-[#90b5bb] px-2 py-2">
                    <FaUser className="text-center" />
                  </span>
                  <span> {r.name}</span>
                  {r.verified && (
                    <span className="bg-gray-200 text-xl px-2 py-0.5 rounded text-cyan-700">
                      Verified
                    </span>
                  )}
                </div>
                <div className="text-gray-500 text-xl">{r.date}</div>
              </div>

              {r.title && (
                <div className="font-bold mb-1 text-[#0a7485]">
                  <strong> {r.title}</strong>
                </div>
              )}

              <div className="text-xl text-[#0a7485]">{r.content}</div>
            </div>
          ))}

          {/*phân trang */}
          <div className="flex justify-center items-center space-x-2 mt-6 text-cyan-700 font-medium">
            <button
              className="px-2 disabled:text-gray-400 cursor-pointer"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <MdKeyboardArrowLeft className="text-2xl text-[#0a7485] " />
            </button>
            <button
              className="px-2 disabled:text-gray-400"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-2 cursor-pointer ${
                  currentPage === i + 1
                    ? "font-bold underline cursor-pointer"
                    : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="px-2 disabled:text-gray-400"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
            <button
              className="px-2 disabled:text-gray-400 cursor-pointer"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <MdKeyboardArrowRight className="text-2xl text-[#0a7485]" />
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
}
