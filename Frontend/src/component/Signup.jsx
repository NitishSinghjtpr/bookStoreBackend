"use client";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post("http://localhost:3000/user/signup", formData);
      alert("Signup Successful");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-2xl px-8 py-10">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-white">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="
                input input-bordered w-full mt-1
                bg-white text-black 
                dark:bg-gray-700 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-300
              "
              placeholder="Enter your full name"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="text-sm text-red-500">Fullname is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="
                input input-bordered w-full mt-1
                bg-white text-black 
                dark:bg-gray-700 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-300
              "
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="
                input input-bordered w-full mt-1
                bg-white text-black 
                dark:bg-gray-700 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-300
              "
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white w-full py-2 rounded-md font-semibold mt-4"
          >
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}
