import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await axios.get(
      `http://localhost:3000/user/cart/${user._id}`
    );
    setCart(res.data);
  };

  const removeItem = async (bookId) => {
    await axios.post("http://localhost:3000/user/cart/remove", {
      userId: user._id,
      bookId,
    });
    fetchCart();
  };

  const total = cart.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return (
   <>
   <Navbar/>
    <div className="max-w-4xl mx-auto p-6 mt-10">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaShoppingCart className="text-3xl text-pink-500" />
        <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">Your cart is empty 🛒</p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.book._id}
                className="flex items-center justify-between bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                {/* Left Side */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.book.image}
                    alt={item.book.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.book.name}
                    </h2>
                    <p className="text-gray-500">
                      ₹{item.book.price}
                    </p>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                <button
                  onClick={() => removeItem(item.book._id)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  <FaTrash />
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-10 bg-pink-50 dark:bg-gray-700 p-6 rounded-xl shadow-md flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total Amount
            </h2>
            <h2 className="text-2xl font-bold text-pink-600">
              ₹{total}
            </h2>
          </div>
        </>
      )}
    </div>
    <Footer/>
   </>
  );
};

export default Cart;
