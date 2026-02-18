
import React from "react";
import { FaBookOpen, FaUsers, FaRocket } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-pink-500">BookStore</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          BookStore is a modern online platform designed to provide
          high-quality programming and educational books to learners
          worldwide.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaBookOpen className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Wide Collection
          </h3>
          <p className="text-gray-500">
            Explore a large collection of free and premium books
            across multiple programming domains.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaUsers className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Community Focused
          </h3>
          <p className="text-gray-500">
            Built for learners, developers and students who want to
            grow their skills every day.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
          <FaRocket className="text-4xl text-pink-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Fast & Secure
          </h3>
          <p className="text-gray-500">
            Secure authentication system and smooth shopping
            experience with modern UI.
          </p>
        </div>

      </div>

      {/* Mission Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto">
          Our mission is to make quality learning resources accessible
          to everyone and empower students to achieve their goals
          through knowledge and technology.
        </p>
      </div>

    </div>
    <Footer/>
    </>
  );
};

export default About;
