import React from 'react'
import { AiFillHome, AiOutlinePercentage, AiOutlineDeploymentUnit, AiOutlineSafety } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Home from './jericka-cruz-vis3HYjSvzU-unsplash.jpg';

export default function Benefits() {
    return (
        <div className="h-screen bg-gray-100">
            <div className="flex flex-col justify-center items-center py-10">
                <h3 className="uppercase text-sm font-extrabold text-blue-500 tracking-widest">
                    Renting Your Home?
                </h3>

                <h1 className="mt-3 tracking-wider text-2xl font-extrabold ">
                    Rent Out Your Spare Room
                </h1>
            </div>

            <div className="w-screen sm:hidden md:block">
                <div className="benefitCont_width mx-auto my-0">
                    <div className="flex justify-center">
                        <div className="w-1/3 px-4 flex flex-col justify-between">
                            <div className="self-end my-12">
                                <div className="flex flex-col">
                                    <h1 className="font-extrabold text-xl self-end">Real Homes</h1>
                                    <p className="text-gray-500 text-sm font-medium">Settle into life in a new place</p>
                                </div>
                            </div>

                            <div className="self-end my-12">
                                <div className="flex flex-col">
                                    <h1 className="self-end font-extrabold text-xl">Real Connections</h1>
                                    <p className="text-gray-500 text-sm font-medium">Find the perfect host family for you</p>
                                </div>
                            </div>

                        </div>

                        <div className="w-1/3 px-4 relative">
                            <img src={Home} alt="back-Home" className="benefit_image rounded-lg" />
                            <div className="absolute top-0 left-0 mt-12 rounded-full blurr border-solid border-2 border-transparent">
                                <AiFillHome className="text-2xl" />
                            </div>
                            <div className="absolute top-0 right-0 mt-12 h-10 w-10 rounded-full blurr border-solid border-2 border-transparent">
                                <AiOutlinePercentage className="text-2xl mx-auto my-0" />
                            </div>
                            <div className="absolute bottom-0 left-0 mb-12 h-10 w-10 rounded-full blurr border-solid border-2 border-transparent">
                                <AiOutlineDeploymentUnit className="text-2xl mx-auto my-0" />
                            </div>
                            <div className="absolute bottom-0 right-0 mb-12 h-10 w-10 rounded-full blurr border-solid border-2 border-transparent">
                                <AiOutlineSafety className="text-2xl mx-auto my-0" />
                            </div>

                        </div>

                        <div className="w-1/3 px-4 flex flex-col justify-between">
                            <div className="my-12">
                                <h1 className="font-extrabold text-xl">True Value</h1>
                                <p className="text-gray-500 text-sm font-medium">Offering good quality and affordability</p>
                            </div>

                            <div className="my-12">
                                <h1 className="font-extrabold text-xl">Secure Priority</h1>
                                <p className="text-gray-500 text-sm font-medium">More than just hand over keys</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden">
                <h1> Second Box </h1>
            </div>

            <div className="py-10 flex flex-col">
                <p className="text-lg font-medium text-gray-400 self-center">Earn extra income renting out your spare room to professionals, international</p>
                <p className="text-lg font-medium text-gray-400 self-center">students and tourists looking for nighty, weekly and monthly stays</p>
                <button className="bg-blue-500 rounded-lg flex justify-center items-center self-center mt-6">
                    <h2 className="text-white text-sm font-extrabold py-5 px-3">Start Renting Now</h2>
                    <MdKeyboardArrowRight className="text-2xl text-blue-800" />
                </button>
            </div>
        </div>
    )
}
