import React from 'react'
import productImg from '../../assets/broughtpageBlue/product1.jpg'

const ViewCart = () => {

    return (
        <div className="container mx-auto py-[150px]">
            <h1 className="text-4xl font-serif text-center mb-8">Cart</h1>
            <div className="flex flex-col md:flex-row gap-8">

                <div className="w-full md:w-2/3 border border-gray-300">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-4 font-semibold">Product</th>
                                <th className="p-4 font-semibold">Price</th>
                                <th className="p-4 font-semibold">Quantity</th>
                                <th className="p-4 font-semibold">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 flex items-center gap-4">
                                    <button className="text-gray-500 hover:text-red-500">X</button>
                                    <img src={productImg} className="w-16 h-16 object-cover border" />
                                    <span className="font-medium">Cool Blue Perfume</span>
                                </td>
                                <td className="p-4 font-bold">$225.00</td>
                                <td className="p-4">
                                    <div className="flex text-[15px]">
                                        <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">-</p>
                                        <p className="border px-[15px]">1</p>
                                        <p className="border px-[15px] cursor-pointer hover:bg-black hover:text-white transition duration-300">+</p>
                                    </div>
                                </td>
                                <td className="p-4 font-bold">$225.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
                <div className="w-full md:w-1/3 border border-gray-300 p-6">
                    <h2 className="text-lg font-semibold mb-4">Cart totals</h2>
                    <div className="flex justify-between border-b py-2">
                        <span>Subtotal</span>
                        <span>$225.00</span>
                    </div>
                    <div className="flex justify-between border-b py-2 font-bold">
                        <span>Total</span>
                        <span>$225.00</span>
                    </div>
                    <p className="mt-4 text-sm">Have a coupon?</p>
                    <button className="mt-4 bg-black text-white px-6 py-3 w-full text-center uppercase font-semibold">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewCart