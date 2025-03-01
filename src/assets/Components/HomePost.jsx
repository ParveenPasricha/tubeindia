import React, { useEffect, useState } from "react";
import { Bars } from 'react-loading-icons';
import { useDispatch } from "react-redux";
import { Addtocart } from "../Redux/AddCartSlice";

const HomePost = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  const handleCart = (item) => {
    dispatch(Addtocart(item))
    console.log("Added to Cart: ", item)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return(
    <div className="bg-black z-10">
      <h1 className="text-4xl h-screen font-bold text-center">
        <Bars />
      </h1>
    </div>
    )
  }
  return (
    <div className="p-5 min-h-screen bg-gray-100 shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        This is Testing Purpose
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-3"
          >
            <img
              src={item.image}
              width={100}
              height={100}
              alt="Item Image"
              className="h-32 object-contain"
            />
            <p className="text-gray-700 font-semibold text-center h-20">
              {item.title}
            </p>
            <div className="flex justify-between w-full items-center mt-auto">
              <p className="text-green-600 font-bold">Rs {item.price}/-</p>
              <button
                onClick={() => handleCart(item)}
                className="bg-blue-400  hover:bg-blue-300 p-2"
              >
                AddToCart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePost;
