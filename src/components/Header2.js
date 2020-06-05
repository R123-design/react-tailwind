import React from 'react';
import { MdLocationOn, MdStar } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";


export default function Header2() {
    return (
        <div className="container mt-32 mx-auto">
            <div className="flex justify-center items-center ml-auto">
                <div className="flex justify-center items-center border-transparent bg-white border-2 rounded-lg w-20 h-8">
                    <MdLocationOn className="text-xl text-blue-500 " />
                    <MdStar className="text-xl  text-yellow-500" />
                    <IoIosHeart className="text-xl text-red-600" />
                </div>
                <div className="px-6">
                    <p className="text-sm text-blue-500 font-bold tracking-widest uppercase">Recommendation</p>
                    <h1 className="font-extrabold text-black text-4xl">Good Places</h1>
                    <h1 className="font-extrabold text-black text-4xl">by Customer</h1>
                </div>
            </div>
        </div>

    )
}
{/* <div className="container">
                
            </div>
            <div className="flex w-64 h-24 ml-64 -mt-48 border-solid border-white border-2 rounded-lg bg-white">
                <MdLocationOn className="mt-5 ml-6 border-solid border-2 rounded-full h-10 w-10 bg-blue-500 text-white " />
                <MdStar className="mt-5 ml-6 border-solid border-2 rounded-full h-10 w-10 bg-yellow-500 text-white " />
                <IoIosHeart className="mt-5 ml-6  border-solid border-2 rounded-full h-10 w-10 text-white bg-red-500 " />
            </div> */}