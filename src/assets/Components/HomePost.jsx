import React, { useEffect, useState } from "react";

const HomePost = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">This is Testing Purpose</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-3">
            <img
              src={item.image}
              width={100}
              height={100}
              alt="Item Image"
              className="h-32 object-contain"
            />
            <p className="text-gray-700 font-semibold text-center">{item.title}</p>
            <p className="text-green-600 font-bold">Rs {item.price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePost;
