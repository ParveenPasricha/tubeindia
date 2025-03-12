import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/authSlice";
import { Bars } from "react-loading-icons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  const handleLogin = async () => {
    if (!input.email || !input.password) {
      setError("⚠️ Please fill all fields"); 
      return;
    }

    setLoading(true); 

    try {
      const response = await axios.post("http://localhost:3500/api/login", {
        email: input.email,
        password: input.password,
      });

      if (response.data.user) {
        dispatch(login(response.data.user));
        navigate("/");
      } else {
        setError("Login failed! Please try again.");
      }
    } catch (error) {
      console.log("Error: ", error);
      setError("Backend server is down. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6 border border-gray-300">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          TubeIndia<sub className="text-sm">.in</sub>
        </h1>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="text-gray-600">Enter your Email or Mobile Number</p>

          <input
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={input.email}
            type="text"
            placeholder="Email or Mobile"
            name="email"
          />

          <p className="mt-2 text-gray-600">Enter your Password</p>

          <input
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={input.password}
            name="password"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full font-bold bg-yellow-500 p-3 rounded-lg hover:bg-yellow-400 transition duration-300 flex justify-center items-center disabled:opacity-50"
            disabled={loading}
          >
            {loading ? <Bars className="h-6 w-6" /> : "Continue"}
          </button>
        </div>

        <div className="flex justify-between text-blue-600">
          <Link to="/forget" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="hover:underline">
            Create your TubeIndia account
          </Link>
        </div>

        <p className="text-center text-gray-500 text-xs">
          © 2025 TubeIndia.in - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
