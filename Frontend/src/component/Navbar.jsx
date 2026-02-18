import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Login from "./Login";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (value) => {
    setSearch(value);

    if (value.length > 1) {
      const res = await axios.get(
        `http://localhost:3000/book/search?keyword=${value}`,
      );
      setSuggestions(res.data);
    } else {
      setSuggestions([]);
    }
  };

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>

      <li>
        <a href="/admin">Admin</a>
      </li>
      <li>
        <a href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
  <a href="/profile">Profile</a>
</li>

    </>
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto">
        {/* NAVBAR */}
        <div className="navbar bg-[#111827] text-white shadow-md">
          {/* LEFT SIDE */}
          <div className="navbar-start">
            {/* Mobile Menu Button */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black"
              >
                {navItem}
              </ul>
            </div>

            {/* Logo + Title */}
            <a className="btn btn-ghost text-xl flex items-center gap-2">
              <img src={logo} alt="logo" className="w-8 h-8 rounded-md" />
              𝓑𝓸𝓸𝓴𝓢𝓽𝓸𝓻𝓮
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="navbar-end">
            {/* Large Screen Menu */}
            <div className="navbar-center hidden lg:flex mr-3">
              <ul className="menu menu-horizontal px-1">{navItem}</ul>
            </div>

           {/* Search Bar */}
<div className="relative">
  <input
    type="text"
    value={search}
    onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search books..."
    className="input input-bordered p-3 w-52 text-white"
  />

  {suggestions.length > 0 && (
    <div className="absolute bg-white text-black w-full mt-1 rounded shadow-lg z-50">
      {suggestions.map((book) => (
        <div
          key={book._id}
          className="p-2 hover:bg-gray-200 cursor-pointer"
          onClick={() => {
            setSearch(book.name);
            setSuggestions([]);
            navigate(`/course?search=${book.name}`);  // 👈 Added
          }}
        >
          {book.name}
        </div>
      ))}
    </div>
  )}
</div>


            <label className="swap pr-3 swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on  h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* Login Button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-red-500 p-2 hover:bg-red-600 text-white"
              >
                Logout
              </button>
            ) : (
              <button
                className="btn p-2 btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Login
              </button>
            )}

            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
