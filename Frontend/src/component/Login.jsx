"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // TRACK INPUT VALUES
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // LOGIN API CALL
const handleLogin = async () => {
  try {
    const res = await axios.post(
      "http://localhost:3000/user/login",
      input
    );

    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login Successful");
    localStorage.setItem("user", JSON.stringify(res.data.user));
window.location.reload();


    document.getElementById("my_modal_1").close();
  } catch (err) {
    console.log(err);
  }
};


  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Login</h3>

        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter your email..."
            className="w-80 px-3 border rounded-md outline-none"
          />
        </div>

        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter your password..."
            className="w-80 px-3 border rounded-md outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-around mt-4 mb-1">
          <button
            onClick={handleLogin}
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
          >
            Login
          </button>

          <p>
            Not Register?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
        </div>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-red-500 hover:bg-red-700">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Login;
