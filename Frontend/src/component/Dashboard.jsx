import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    if (user) {
      fetchPurchased();
    }
  }, []);

  const fetchPurchased = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/user/purchased/${user._id}`
      );
      setPurchased(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Please Login First</h1>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-screen-lg mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user.fullname}
      </h1>

      <h2 className="text-xl font-bold mb-4">Purchased Books</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {purchased.map((book) => (
          <div
            key={book._id}
            className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-xl"
          >
            <img
              src={book.image}
              alt={book.name}
              className="h-40 w-full object-cover rounded-md"
            />
            <h3 className="font-bold mt-3">{book.name}</h3>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div><Footer/>

    </>
  );
};

export default Dashboard;
