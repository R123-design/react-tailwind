import React from 'react';
import Hero from './components/Hero';
import Header2 from './components/Header2';
import Card from './components/Card';
import Benefits from './components/Benefits';

const App = () => {
    return (
        // <div className="max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        //     <div className="ml-6 pt-1">
        //         <h1 className="text-xl text-blue-700 leading-tight">
        //             Tailwind and Create React App
        //   </h1>
        //         <p className="text-base text-gray-700 leading-normal">
        //             Building apps together
        //   </p>
        //     </div>
        // </div>
        <div className="overflow-hidden">
            <Hero />
            <Header2 />
            <Card />
            <Benefits />
        </div>
    );
};

export default App;