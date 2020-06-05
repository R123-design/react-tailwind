import React from 'react';
import { BsPlus } from "react-icons/bs";
import { MdStar, MdStarBorder, MdLocationOn } from "react-icons/md";

export default function Card() {
    return (
        <div className="h-screen mt-32 flex justify-center">
            <div className="card_res building_1 mx-24 rounded-lg relative">
                <BsPlus className="absolute top-0 right-0 mt-4 mr-4 rounded-lg text-4xl text-white blurr" />
                <div className="flex flex-col items-center mt-56">
                    <div className="mr-24 blurr flex justify-center items-center rounded-lg w-32 ">
                        <MdLocationOn className="text-xs text-white" />
                        <h6 className="text-xs uppercase py-2 pl-2 text-white">Indonesia</h6>
                    </div>
                    <div className="w-5/6 bg-white rounded-lg relative">

                        <h2 className="text-sm font-extrabold tracking-wide px-10 pt-4">The Sabini Casino Club</h2>
                        <h2 className="text-sm font-extrabold tracking-wide px-10">Hotel & Apartments</h2>
                        <div className="flex justify-center -ml-20 py-1">
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm  text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStarBorder className="text-sm" />
                        </div>
                        <h3 className="text-sm font-semibold text-orange-600 px-10">8.6 Superb</h3>
                        <div className="rounded-lg bg-blue-500 absolute right-0 bottom-0">
                            <div className="flex mx-3 my-2">
                                <p className="text-xs text-white font-bold">$</p>
                                <p className="text-sm text-white font-extrabold self-end pl-1">1245</p>
                                <p className=" text-xs text-white font-bold self-end pl-1">/ y</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className="w-5/6 bg-white rounded-lg relative">
                    <h2 className="text-xl font-extrabold tracking-wider px-5 pt-5">The Sabini Casino Club</h2>
                    <h2 className="text-xl font-extrabold tracking-wider px-5">Hotel & Apartments</h2>
                    <div className="flex justify-center items-center">
                        <MdStar className="text-xl text-orange-500" />
                        <MdStar className="text-xl  text-orange-500" />
                        <MdStar className="text-xl text-orange-500" />
                        <MdStar className="text-xl text-orange-500" />
                        <MdStarBorder className="text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-600">8.6 Superb</h3>
                    <div className="w-40 h-16 rounded-lg bg-blue-500 absolute right-0 bottom-0">
                        <div className="flex">
                            <p className="text-lg text-white font-bold">$</p>
                            <p className="text-3xl text-white font-bold self-end">1245</p>
                            <p className=" text-lg text-white font-bold self-end">/ y</p>
                        </div>
                    </div>
                </div> */}

            <div className="card_res building_2 rounded-lg relative">
                <BsPlus className="absolute top-0 right-0 mt-4 mr-4 rounded-lg text-4xl text-white blurr" />
                <div className="flex flex-col items-center mt-56">
                    <div className="mr-24 blurr flex justify-center items-center rounded-lg w-32 ">
                        <MdLocationOn className="text-xs text-white" />
                        <h6 className="text-xs uppercase py-2 pl-2 text-white">Singapore</h6>
                    </div>
                    <div className="w-5/6 bg-white rounded-lg relative">

                        <h2 className="text-sm font-extrabold tracking-wide px-10 pt-4">South King Royal Palace</h2>
                        <h2 className="text-sm font-extrabold tracking-wide px-10">Pool & Apartments</h2>
                        <div className="flex justify-center -ml-20 py-1">
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm  text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStarBorder className="text-sm" />
                        </div>
                        <h3 className="text-sm font-semibold text-orange-600 px-10">9.3 Exceptional</h3>
                        <div className="rounded-lg bg-blue-500 absolute right-0 bottom-0">
                            <div className="flex mx-3 my-2">
                                <p className="text-xs text-white font-bold">$</p>
                                <p className="text-sm text-white font-extrabold self-end pl-1">4921</p>
                                <p className=" text-xs text-white font-bold self-end pl-1">/ y</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card_res building_3 mx-24 rounded-lg relative">
                <BsPlus className="absolute top-0 right-0 mt-4 mr-4 rounded-lg text-4xl text-white blurr" />
                <div className="flex flex-col items-center mt-56">
                    <div className="mr-24 blurr flex justify-center items-center rounded-lg w-32 ">
                        <MdLocationOn className="text-xs text-white" />
                        <h6 className="text-xs uppercase py-2 pl-2 text-white">Portugal</h6>
                    </div>
                    <div className="w-5/6 bg-white rounded-lg relative">

                        <h2 className="text-sm font-extrabold tracking-wide px-10 pt-4">The LUX Casino & Club</h2>
                        <h2 className="text-sm font-extrabold tracking-wide px-10">Hotel Apartments</h2>
                        <div className="flex justify-center -ml-20 py-1">
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm  text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStar className="text-sm text-orange-500" />
                            <MdStarBorder className="text-sm" />
                        </div>
                        <h3 className="text-sm font-semibold text-orange-600 px-10">9.7 Deluxe</h3>
                        <div className="rounded-lg bg-blue-500 absolute right-0 bottom-0">
                            <div className="flex mx-3 my-2">
                                <p className="text-xs text-white font-bold">$</p>
                                <p className="text-sm text-white font-extrabold self-end pl-1">5489</p>
                                <p className=" text-xs text-white font-bold self-end pl-1">/ y</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="card_res building_1 mr-24 margin_card rounded-lg">
                <div className="h-20">
                    <BsPlus className=" h-12 w-12 mt-8 margin_card-1 border-solid border-2 border-gray-500 blurr rounded-lg" />
                </div>
                <div className="w-5/6 mx-auto h-48 margin_top bg-white rounded-lg relative">
                    <h2 className="text-2xl font-extrabold tracking-wider px-5 pt-5">The Sabini Casino Club</h2>
                    <h2 className="text-2xl font-extrabold tracking-wider px-5">Hotel & Apartments</h2>
                    <div className="flex justify-center items-center mt-2 mr-40">
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStarBorder className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-600 ml-8 mt-2">8.6 Superb</h3>
                    <div className="w-40 h-16 rounded-lg bg-blue-500 absolute right-0 bottom-0">
                        <div className="flex ml-10 mt-3">
                            <p className="text-lg text-white font-bold -ml-3">$</p>
                            <p className="text-3xl text-white font-bold self-end ml-1">1245</p>
                            <p className=" text-lg text-white font-bold self-end ml-1">/ y</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card_res building_2 rounded-lg">
                <div className="h-20">
                    <BsPlus className="mt-8 margin_card-1 h-12 w-12 border-solid rounded-lg border-2 border-gray-500 blurr" />
                </div>

                <div className="w-5/6 mx-auto h-48 margin_top bg-white rounded-lg relative">
                    <h2 className="text-2xl font-extrabold tracking-wider px-5 pt-5">South King Royal Palace</h2>
                    <h2 className="text-2xl font-extrabold tracking-wider px-5">Pool & Apartments</h2>
                    <div className="flex justify-center items-center mt-2 mr-40">
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStarBorder className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-600 ml-8 mt-2">9.5 Exceptional</h3>
                    <div className="w-40 h-16 rounded-lg bg-blue-500 absolute right-0 bottom-0">
                        <div className="flex ml-10 mt-3">
                            <p className="text-lg text-white font-bold -ml-3">$</p>
                            <p className="text-3xl text-white font-bold self-end ml-1">4921</p>
                            <p className=" text-lg text-white font-bold self-end ml-1">/ y</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card_res building_3 ml-24 relative rounded-lg">
                <div className="h-20">
                    <BsPlus className="mt-8 margin_card-1 h-12 w-12 border-solid rounded-lg border-2 border-gray-500 blurr" />
                </div>

                <div className="w-5/6 mx-auto h-48 margin_top bg-white rounded-lg relative">
                    <h2 className="text-2xl font-extrabold tracking-wider px-5 pt-5">The Sabini Casino Club</h2>
                    <h2 className="text-2xl font-extrabold tracking-wider px-5">Hotel Apartments</h2>
                    <div className="flex justify-center items-center mt-2 mr-40">
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStar className="h-6 w-6 text-orange-500" />
                        <MdStarBorder className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-orange-600 ml-8 mt-2">9.7 Superb</h3>
                    <div className="w-40 h-16 rounded-lg bg-blue-500 absolute right-0 bottom-0">
                        <div className="flex ml-10 mt-3">
                            <p className="text-lg text-white font-bold -ml-3">$</p>
                            <p className="text-3xl text-white font-bold self-end ml-1">2852</p>
                            <p className=" text-lg text-white font-bold self-end ml-1">/ y</p>
                        </div>
                    </div>
                </div>    

            </div> */}

        </div>
    )
}
