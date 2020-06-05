import React from 'react';
import Header from './Header';
import { FaMapMarkerAlt } from "react-icons/fa";
import { TiLocationArrow, TiCalendarOutline, TiArrowUnsorted } from "react-icons/ti";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdStar } from "react-icons/md";
import user_1 from "./user-1.jpg";
import user_2 from "./user-2.jpg";
import user_3 from "./user-3.jpg";
import user_4 from "./user-4.jpg";

export default function Hero() {
    return (
        <div className="h-screen hero-img">
            <Header />
            <div className="h-screen ">

                <div className="container mx-auto h-full">
                    <div className="wd h-full flex flex-shrink-0">
                        <div className="w-8/12 h-full">
                            <div className="flex flex-col">
                                <div className="flex flex-col mr-64">
                                    <h1 className="text-6xl font-extrabold">Find HomeStay</h1>

                                    <h1 className="text-6xl font-extrabold -mt-6">that <span className="text-purple-500">Suite You</span> </h1>

                                    <p className="text-gray-500 font-medium text-lg tracking-wide mt-4">The result is new way to rent the right homestay for you.</p>
                                </div>

                                <div className="flex mt-10">
                                    <div className="flex justify-center search_box items-center rounded-lg shadow-md border-solid bg-white border-4 border-white">

                                        <FaMapMarkerAlt className="text-sm text-gray-500 cursor-pointer mr-3" />

                                        <h3 className="text-lg font-bold py-5">1020 San Souch Walnut Creek. CA </h3>

                                        <TiLocationArrow className="cursor-pointer ml-3 rounded-full text-sm text-blue-500" />
                                    </div>
                                    <div className="flex search_box rounded-lg shadow-md justify-center border-solid bg-white border-4 border-white">
                                        <div className="flex justify-center items-center">
                                            <TiCalendarOutline className="cursor-pointer mr-3 text-sm text-gray-500" />
                                            <h3 className="text-lg font-bold">1 Month</h3>
                                            <TiArrowUnsorted className="cursor-pointer text-sm ml-3" />
                                        </div>
                                        <button className="font-bold ml-12 text-lg text-white w-1/2 bg-blue-600 border-solid rounded-lg px-4 hover:bg-blue-500">Find HomeStay</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        
                    <div className="w-4/12 relative">
                        <div className="flex flex-col w-full mr-40 ml-auto">
                            <div className="absolute left-0 ml-12">
                                <img src={user_1} alt="User-1" className="rounded-full h-16 w-16" />
                            </div>

                            <div className="flex justify-center items-center user_width mr-14 mt-16 ml-48 h-24 border-solid border-2 border-transparent rounded-lg bg-transparent blurr">
                                <div className="h-20 w-20 py-3">
                                    <img src={user_2} alt="User-2" className="rounded-full h-12 w-12 absolute left-20 top-20" />
                                </div>
                               
                                <p className=" uppercase py-4 tracking-widest ml-5 leading-normal text-xs font-bold text-white tracking-widest">Watch story victor ada</p>
                                
                                <IoMdArrowDroprightCircle className="text-7xl text-red-600 pl-2" />
                    
                            </div>


                            <div className="">
                                <img src={user_3} alt="User-3" className="rounded-full absolute right-10 top-20 h-12 w-12" />
                            </div>

                            <div className="user4_width ml-32 mt-20 relative border-solid border-2 rounded-lg border-transparent blurr">
                                <div className="flex star_width justify-evenly items-center ml-12 mb-8 -mt-5 rounded-lg bg-white">
                                    <MdStar className="text-yellow-400 text-sm " />
                                    <MdStar className="  text-yellow-400 text-sm" />
                                    <MdStar className="  text-yellow-400 text-sm" />
                                    <MdStar className="  text-yellow-400 text-sm" />
                                    <MdStar className="  text-yellow-400 text-sm" />
                                </div>

                                <div className="w-full" >
                                    <p className="text-sm font-bold leading-loose tracking-widest text-white -mt-4 pl-5">I just rent HomeStay for two week and we absolutely loved it!</p>
                                </div>

                                <p className="text-sm text-white font-bold tracking-widest py-4 pl-5">Matt Donovan</p>

                                <img src={user_4} alt="User-4" className="rounded-full absolute bottom-0 right-0 h-12 w-12" />
                            </div>
                        </div>
                    </div>

                    </div>


                </div>

            </div>
            {/* <div className="h-full container mx-auto">

                <div className="h-full flex wd flex-shrink-0">

                    <div className="flex w-8/12 mt-24">

                        <div className="flex justify-start flex-col items-end w-full">
                            <div className="text-black mr-64">

                                <h1 className="text-8xl font-extrabold ">Find HomeStay</h1>

                                <h1 className="text-8xl font-extrabold -mt-12 "> that  <span className="text-purple-500">Suite You</span> </h1>


                                <p className="text-gray-500 font-medium text-2xl tracking-wide mt-4 pt-5">The result is new way to rent the right homestay for you.</p>
                            </div>
                            <div className="flex mt-10 self-end h-full">

                                <div className="flex search_box ml-48 flex-row h-32 px-8 rounded-lg shadow-md flex flex-row items-center border-solid bg-white border-4 border-white">

                                    <FaMapMarkerAlt className="mr-5 text-2xl text-gray-500 cursor-pointer" />

                                    <h3 className="text-xl font-bold">1020 San Souch Walnut Creek. CA </h3>

                                    <TiLocationArrow className="cursor-pointer ml-10 border-solid border-2 border-blue-600 rounded-full text-4xl text-blue-500" />
                                </div>

                                <div className="flex search_box flex-row h-32 pl-8 rounded-lg shadow-md flex flex-row items-center border-solid bg-white border-4 border-white">
                                    <TiCalendarOutline className="cursor-pointer mr-5 text-2xl text-gray-500" />
                                    <h3 className="text-xl font-bold">1 Month</h3>
                                    <TiArrowUnsorted className="cursor-pointer mr-2 text-2xl ml-5" />
                                    <button className="ml-auto btn_height font-bold text-xl text-white w-1/2 bg-blue-600 border-solid rounded-lg px-8 hover:bg-blue-500">Find HomeStay</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-5/12 h-auto relative">
                        <div className="flex flex-col w-full mr-40 ml-auto">
                            <div className="h-40 ml-32">
                                <img src={user_1} alt="User-1" className="rounded-full h-24 w-24 absolute left-20" />
                            </div>

                            <div className="flex justify-center items-center user_width mr-14 ml-64 h-24 border-solid border-2 border-transparent rounded-lg bg-transparent blurr">
                                <div className="h-20 w-20 py-3 ml-8">
                                    <img src={user_2} alt="User-2" className="rounded-full h-12 w-12 absolute left-20 top-20" />
                                </div>
                                <div className="h-24 w-48">
                                    <p className="uppercase py-4 tracking-widest w-40 px-3 leading-normal text-base font-bold text-white tracking-widest">Watch story victor ada</p>
                                </div>
                                <div>
                                    <IoMdArrowDroprightCircle className="text-5xl -mr-6 text-red-600" />
                                </div>
                            </div>


                            <div className="h-32 -mt-20">
                                <img src={user_3} alt="User-3" className="rounded-full absolute right-10 top-20 h-24 w-24" />
                            </div>

                            <div className="height_content user4_width ml-48 mt-12 mb-3 relative border-solid border-2 rounded-lg border-transparent blurr">
                                <div className="flex star_width ml-12 mb-8 -mt-5 rounded-lg bg-white">
                                    <MdStar className="h-6 w-6 text-yellow-400 mt-2 ml-3" />
                                    <MdStar className="h-6 w-6 text-yellow-400 mt-2 ml-1" />
                                    <MdStar className="h-6 w-6 text-yellow-400 mt-2 ml-1" />
                                    <MdStar className="h-6 w-6 text-yellow-400 mt-2 ml-1" />
                                    <MdStar className="h-6 w-6 text-yellow-400 mt-2 ml-1" />
                                </div>

                                <div className="w-full h-auto" >
                                    <p className="ml-12 text-xl font-bold leading-loose tracking-widest text-white -mt-4">I just rent HomeStay for two week and we absolutely loved it!</p>
                                </div>

                                <p className="ml-12 text-xl text-white font-bold tracking-widest mt-3">Matt Donovan</p>

                                <img src={user_4} alt="User-4" className="rounded-full absolute bottom-0 right-0 h-16 w-16" />
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    );

}
