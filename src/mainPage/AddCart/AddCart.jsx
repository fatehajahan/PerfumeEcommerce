import React from "react";
import cartPerfume from '../../assets/broughtpageBlue/product1.jpg'

const AddCart = ({ cartOpen, setCartOpen }) => {
    return (
        <div className="">
            <div className={`fixed top-[60px] right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300  ${cartOpen ? "translate-x-0 " : "translate-x-full "} z-50`} >
                <div className="p-5 flex justify-between items-center border-b ">
                    <h2 className="text-xl font-semibold">Your Cart</h2>
                    <div className="text-red-500 text-lg cursor-pointer" onClick={() => setCartOpen(false)} >  X  </div>
                </div>
                <div className="p-5">
                    <div className="flex gap-x-[20px]">
                        <img src={cartPerfume} alt="" className="w-[60px] h-[60px]" />

                        <div>
                            <p>Cool Blue Perfume</p>
                            <div className="flex text-[15px]">
                                <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">-</p>
                                <p className="border px-[15px]">1</p>
                                <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">+</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[30px]">
                        <p>No items in cart.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;
