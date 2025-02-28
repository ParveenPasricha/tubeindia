import React from 'react'
import { TfiAlignJustify } from "react-icons/tfi";

const Menu = () => {

    const menuClassname = "hover:border hover:px-4 hover:py-2 transition-all duration-200"

    const handleMenuClick = (item) => {
        console.log(`${item} clicked`);
    }

    return (
        <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 py-2 px-4 bg-gray-900 text-white font-bold">
            <button className="flex items-center gap-2">
                <TfiAlignJustify className="text-xl" />
                All
            </button>

            {[
                "Fresh",
                "MX Player",
                "Sell",
                "Best Seller",
                "Today's Deals",
                "Mobiles",
                "Prime",
                "Customer Service",
                "Electronics",
                "New Release",
                "Tube Pay",
                "Home & kitchen"
            ].map((item) => (
                <button
                    key={item}
                    className={menuClassname}
                    onClick={() => handleMenuClick(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Menu
