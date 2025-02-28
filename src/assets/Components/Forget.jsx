import React, { useState } from 'react'

const Forget = () => {
    const [input, setInput] = useState({
        email: "",
      });
    
      const handleChange = async (e) => {
        const { name, value } = e.target;
        setInput((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleLogin = () => {
        console.log(input.email);
      };
  return (
    <div>
      <h1 className="text-center text-2xl p-5">
        TubeIndia<sub>.in</sub>
      </h1>
      <div className="border rounded-2xl text-center text-2xl p-2 mx-96">
        <div className="mx-5">
          <h1 className="text-left text-3xl font-bold my-5">Password assistance</h1>
          <p>Enter the email address or mobile phone number associated with your Amazon account.</p>
          <h1 className="my-5">Enter your Email or Mobile Number</h1>
          <input
            className="border w-full text-center p-2 rounded-2xl"
            onChange={handleChange}
            value={input.email}
            type="text"
            placeholder="Email or Mobile"
            name="email"
          />
          <button
            onClick={handleLogin}
            className="font-bold bg-yellow-400 p-3 my-5 hover:bg-yellow-300 rounded-2xl"
          >
            Continue
          </button>

        </div>
    </div>
    </div>
  )
}

export default Forget
