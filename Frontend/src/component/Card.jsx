import React from "react";
import axios from "axios";

const Card = ({ item }) => {
  const handleBuy = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    return;
  }

  try {
    await axios.post("http://localhost:3000/user/buy", {
      userId: user._id,
      bookId: item._id,
    });

    alert("Book Purchased Successfully");
  } catch (error) {
    console.log(error);
  }
};

const handleAddToCart = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first");
    return;
  }

  await axios.post("http://localhost:3000/user/cart", {
    userId: user._id,
    bookId: item._id,
  });

  alert("Added to cart");
};


  return (
   <>
    <div className="card w-80 bg-white dark:bg-gray-900 mb-5
                    text-gray-900 dark:text-white 
                    hover:scale-105 duration-300 transition-all shadow-md">

      {/* FIXED IMAGE SIZE */}
      <figure className="h-56 w-full overflow-hidden rounded-t-xl">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">

        {/* BOOK NAME */}
        <h2 className="card-title text-gray-900 dark:text-white">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-700 dark:text-gray-300">
          {item.title}
        </p>

        {/* PRICE + BUY NOW */}
        <div className="card-actions justify-between mt-2">
          
          <div className="badge badge-outline 
                          text-gray-900 dark:text-gray-200">
            ${item.price}
          </div>

          <button
  onClick={handleBuy}
  className="badge badge-outline cursor-pointer"
>
  Buy Now
</button>

<button
  onClick={handleAddToCart}
  className="badge badge-outline cursor-pointer"
>
  Add to Cart
</button>


        </div>
      </div>

    </div>
    
   </>
  );
};

export default Card;
