import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if(!input.email || !input.password){
      alert("Please Fill all Field")
      return
    }
    try {
      const response = await axios.post("http://localhost:5000/api/login",
        {email: input.email, password: input.password} 
      )
      console.log("Login Successfull" , response.data)
      alert("login Successfully")
      navigate('/')

    } catch (error) {
      console.log(error)
    }

    console.log(input.email, input.password);
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

          <button
            onClick={handleLogin}
            className="w-full font-bold bg-yellow-500 p-3 rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Continue
          </button>
        </div>

        <div className="flex justify-between text-blue-600">
          <Link to="/forget" className="hover:underline">Forgot Password?</Link>
          <Link to="/signup" className="hover:underline">Create your TubeIndia account</Link>
        </div>

        <p className="text-center text-gray-500 text-xs">© 2025 TubeIndia.in - All rights reserved</p>
      </div>
    </div>
  );
};

export default Login;
