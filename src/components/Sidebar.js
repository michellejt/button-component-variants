import React from "react";

export default function Sidebar({ children }) {
  return (
    <>
      <div className="relative min-h-screen md:flex">
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="" className="block p-4 text-red-600">
            Dev<span className="text-black">challenges.io</span>
          </a>

          <button className="mobile-menu-btn p-4 focus:bg-gray-700">...</button>
        </div>

        <div className="sidebar text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <a href="" className="block p-4 text-red-600 font-semibold">
            Dev<span className="text-black">challenges.io</span>
          </a>

          <nav>
            <a
              href="#"
              className="block py-2.5 px-4 hover:bg-blue-700 rounded hover:text-white"
            >
              Home
            </a>
          </nav>
        </div>
        {children}
      </div>
    </>
  );
}
