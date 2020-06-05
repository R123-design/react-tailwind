import React from 'react';

const Header = () => {
    return (
        <div className="container mx-auto bg-transparent flex justify-center items-center py-16">
            <div className="font-extrabold tracking-wider">
                <h2 className=" text-lg">peng<span className="text-blue-500">inapan.</span></h2>
            </div>
            <div className="ml-48 text-sm text-gray-500 font-bold">
                <a className="hover:text-blue-500 ml-5 pointer:cursor" href="#">List Property</a>
                <a className="hover:text-blue-500 ml-5 pointer:cursor" href="#">Pricing</a>
                <a className="hover:text-blue-500 ml-5 pointer:cursor" href="#">About</a>
                <a className="hover:text-blue-500 ml-5 pointer:cursor" href="#">Blog</a>
            </div>
            
            <div className="ml-auto mr-10 text-sm">
                <button className="text-white px-4 py-2 mr-10">Login</button>
                <button className="text-white border-solid border-2 rounded-lg border-white px-4 py-2">Sign Up</button>
            </div>
        </div>
    );
}

export default Header;