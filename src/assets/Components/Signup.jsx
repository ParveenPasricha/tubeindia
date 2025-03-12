import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [input, setInput] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    });

    const inputRef = useRef(null);  // For auto focus
    const navigate = useNavigate();  // Correct way to navigate

    useEffect(() => {
        inputRef.current.focus();  // Auto-focus on Name input
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignup = async () => {
        console.log("Signup Details:", input);

        if (!input.name || !input.mobile || !input.email || !input.password) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3500/api/signup', {
                name: input.name,
                mobile: input.mobile,
                email: input.email,
                password: input.password
            });

            console.log("Signup Successful:", response);
            alert("Signup Successful!");

            setInput({ name: "", mobile: "", email: "", password: "" });

            // Navigate to home page ("/")
            navigate('/login');
        } catch (err) {
            console.error("Signup Error:", err);
            alert("Signup Failed! Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6 border border-gray-300">
                <h1 className="text-center text-3xl font-bold text-blue-600">
                    TubeIndia<sub className="text-sm">.in</sub>
                </h1>

                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Signup Page</h1>

                    <p className="text-gray-600">Enter your Name</p>
                    <input
                        ref={inputRef}
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={input.name}
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                    />

                    <p className="text-gray-600">Enter your Mobile Number</p>
                    <input
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={input.mobile}
                        type="text"
                        placeholder="Enter your Mobile No."
                        name="mobile"
                    />

                    <p className="text-gray-600">Enter your Email</p>
                    <input
                        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={handleChange}
                        value={input.email}
                        type="email"
                        placeholder="Email"
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
                        onClick={handleSignup}
                        className="w-full font-bold bg-yellow-500 p-3 rounded-lg hover:bg-yellow-400 transition duration-300"
                    >
                        Continue
                    </button>
                </div>

                <div className="flex justify-between text-blue-600">
                    <Link to="/login" className="hover:underline">
                        Back to Login Page
                    </Link>
                </div>

                <p className="text-center text-gray-500 text-xs">
                    © 2025 TubeIndia.in - All rights reserved
                </p>
            </div>
        </div>
    );
};

export default Signup;
