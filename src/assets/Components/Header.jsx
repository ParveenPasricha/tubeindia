import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="flex items-center text-black justify-between gap-5 border p-2 font-bold">
        <Link to="/" className="text-left text-xl">
          TubeIndia
        </Link>
        <div className="flex-grow">
          <input
            className="border-black border-2 w-full px-2 py-1 focus:bg-black  text-white"
            type="text"
          />
        </div>
        <button className="hover:bg-gray-800 px-3 py-1 rounded">Search</button>

        <Link
          to="/return&order"
          className="hover:bg-gray-800 px-3 py-1 rounded"
        >
          Return & Order
        </Link>
        <Link to="/cart" className="hover:bg-gray-800 px-3 py-1 rounded">
          Cart
        </Link>
        {user ? (
          <>
            <h1 className="text-bold text-blue-600">Welcome, {user.name} </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:bg-gray-800 px-3 py-1 rounded">
              Login
            </Link>
            <Link to="/admin" className="hover:bg-gray-800 px-3 py-1 rounded">
              Admin Login
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
