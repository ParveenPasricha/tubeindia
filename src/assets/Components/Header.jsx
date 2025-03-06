import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center bg-black text-white justify-between gap-5 border p-2 font-bold">
        <Link to="/" className="text-left text-xl">TubeIndia</Link>
        <div className="flex-grow">
          <input className="border-white border-2 w-full px-2 py-1 focus:bg-white  text-black" type="text" />
        </div>
        <button className="hover:bg-gray-800 px-3 py-1 rounded">Search</button>
        <Link to="/login" className="hover:bg-gray-800 px-3 py-1 rounded">
          Login
        </Link>
        <Link to="/return&order" className="hover:bg-gray-800 px-3 py-1 rounded">
          Return & Order
        </Link>
        <Link to="/cart" className="hover:bg-gray-800 px-3 py-1 rounded">Cart</Link>
        <Link to="/admin" className="hover:bg-gray-800 px-3 py-1 rounded">Admin Login</Link>
      </div>
    </>
  );
};

export default Header;
