import React from "react";
import banner from "../images/books.png";



const Banner = () => {

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-12 px-4 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-6">

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500 font-semibold">new everyday!!!</span>
          </h1>

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            placeat illum, enim atque expedita blanditiis ad eveniet repellat
            fuga, necessitatibus vitae porro quis quia nisi fugit voluptates,
            exercitationem est consequuntur!
          </p>

          {/* EMAIL INPUT */}
          <label className="input validator mt-6 w-[90%] max-w-md flex items-center gap-3 text-white">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>

          <button className="btn mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6">
            Secondary
          </button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={banner}
            alt="banner"
            className="w-full md:w-[90%] lg:w-[100%] h-auto object-cover"
          />
        </div>

      </div>
    </>
  );
};

export default Banner;
