import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'

const Freebook = () => {
  
  const [book,setBook]=useState([]) 
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:3000/book")
        console.log(res.data)
        setBook(res.data.filter((item) => item.category === "Free"))
      } catch (error) {
        console.log(error);
        
      }
    };
    getBook();
  },[])

  const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch("/list.json")
  //     .then((res) => res.json())
  //     .then((data) => setList(data));
  // }, []);

  // const filterdata = list.filter((item) => item.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">

        <h1 className="text-2xl font-bold mb-2">Free Offered Courses</h1>
        <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Slider className=" mb-10" {...settings}>
          {book.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">

                {/* FIXED IMAGE CONTAINER */}
                <div className="w-full h-56 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="text-lg font-semibold mt-3">{item.name}</h2>

                <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full inline-block mt-2">
                  NEW
                </span>

                <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">
                  {item.title.slice(0, 60)}...
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-200">${item.price}</p>

                  <button className="btn btn-sm p-3 hover:bg-pink-600 ease-in-out duration-300 rounded-lg bg-gray-900 text-white hover:bg-gray-700">
                    Buy Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Freebook;
