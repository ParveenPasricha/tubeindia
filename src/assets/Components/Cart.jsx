import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((state) => state.Cart.cartItem)

  const handleBuy = (item) => {
    console.log('Buying item:', item)
  }

  if (!cartItems || cartItems.length === 0) {
    return <h1 className="text-center text-2xl font-bold bg-gradient-to-tl from-blue-500 to-white ">Your Cart is Empty</h1>
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cartItems.map((item) => (
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
            <p className="text-black font-bold">Rs {item.price}/-</p>
            <p className="text-black font-bold">Quantity {item.quantity} </p>
          </div>
          <button
            onClick={() => handleBuy(item)}
            className="bg-blue-400 hover:bg-blue-300 p-2 bg-gradient-to-br from-blue-700 text-white"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default Cart
