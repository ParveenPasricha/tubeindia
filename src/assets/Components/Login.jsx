import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setInput((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(input.email, input.password);
  };
  return (
    <div>
      <h1 className="text-center text-2xl p-5">
        TubeIndia<sub>.in</sub>
      </h1>
      <div className="border rounded-2xl text-center text-2xl p-2 mx-96">
        <div className="mx-5">
          <h1 className="text-left text-3xl font-bold">Sign in</h1>
          <h1 className="my-5">Enter your Email or Mobile Number</h1>
          <input
            className="border w-full text-center p-2 rounded-2xl"
            onChange={handleChange}
            value={input.email}
            type="text"
            placeholder="Email or Mobile"
            name="email"
          />
          <h1 className="my-5">Enter your Password</h1>
          <input
            className="border text-center p-2 w-full rounded-2xl"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={input.password}
            name="password"
          />
          <button
            onClick={handleLogin}
            className="font-bold bg-yellow-400 p-3 my-5 hover:bg-yellow-300 rounded-2xl"
          >
            Continue
          </button>

        </div>
        <Link to="/forget">Forget Password</Link>
        <hr/>
            <Link to="/signup">Create your TubeIndia account</Link>
      </div>
    </div>
  );
};

export default Login;
