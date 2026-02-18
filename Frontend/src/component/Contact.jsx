
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
   <>
   <Navbar/>
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Contact <span className="text-pink-500">Us</span>
        </h1>
        <p className="text-gray-500">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-500 text-xl" />
            <p>support@bookstore.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-pink-500 text-xl" />
            <p>+91 98765 43210</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-500 text-xl" />
            <p>New Delhi, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows="4"
          />
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>

      </div>

    </div>
    <Footer/>
   </>
  );
};

export default Contact;
