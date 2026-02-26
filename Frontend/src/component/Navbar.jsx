import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Login from "./Login";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // ---------------- THEME HANDLER ----------------
  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // ---------------- SEARCH HANDLER ----------------
  const handleSearch = async (value) => {
    setSearch(value);

    if (value.length > 1) {
      const res = await axios.get(
        `http://localhost:3000/book/search?keyword=${value}`
      );
      setSuggestions(res.data);
    } else {
      setSuggestions([]);
    }
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // ---------------- NAV ITEMS ----------------
  const navItem = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/admin">Admin</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/profile">Profile</Link></li>
    </>
  );

  return (
    <div className="w-full bg-[#111827] text-white shadow-md">
      <div className="navbar container mx-auto px-4">

        {/* LEFT SECTION */}
        <div className="navbar-start">
          {/* Mobile Hamburger */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black rounded-box z-50 mt-3 w-52 p-2 shadow">
              {navItem}
            </ul>
          </div>

          {/* Logo */}
          <Link className="btn btn-ghost text-xl flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-md" />
            𝓑𝓸𝓸𝓴𝓢𝓽𝓸𝓻𝓮
          </Link>
        </div>

        {/* CENTER - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end gap-3">

          {/* Search Box */}
          <div className="relative w-40 sm:w-48 md:w-60">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search books..."
              className="input input-bordered p-2 w-full text-white"
            />

            {suggestions.length > 0 && (
              <div className="absolute bg-white text-black w-full mt-1 rounded shadow-lg z-50 max-h-48 overflow-auto">
                {suggestions.map((book) => (
                  <div
                    key={book._id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSearch(book.name);
                      setSuggestions([]);
                      navigate(`/course?search=${book.name}`);
                    }}
                  >
                    {book.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* THEME BUTTON */}
          <label className="swap swap-rotate cursor-pointer">
            <input type="checkbox" className="hidden" />

            {/* Sun */}
            <svg
              className="swap-off h-7 w-7"
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71..." />
            </svg>

            {/* Moon */}
            <svg
              className="swap-on h-7 w-7"
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1..." />
            </svg>
          </label>

          {/* LOGIN / LOGOUT */}
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Login
            </button>
          )}

          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;