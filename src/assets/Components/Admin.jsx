import React, { useState } from 'react'

const Admin = () => {
    const [input, setInput]= useState({
        email: "",
        password: ""
    })
    const handleChange= async(e)=>{
        const {name, value}= e.target
        setInput((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handleLogin=()=>{
        console.log(input.email, input.password)
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-blue-600">Admin Login</h1>
        <p className="text-center text-gray-600">This page is restricted to admins only.</p>
        
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              name='email'
              value={input.email}
            />
          </div>
          
          <div>
            <label className="block font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={input.password}
              name='password'
            />
          </div>
        </div>

        <hr className="border-t border-gray-300 my-4" />

        <button onClick={handleLogin}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500">© 2025 Admin Dashboard</p>
      </div>
    </div>
  )
}

export default Admin
