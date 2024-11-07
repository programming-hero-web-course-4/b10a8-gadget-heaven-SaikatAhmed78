import React from 'react';
import aboutImage from '../../src/assets/download.jpeg'
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
         

            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 py-10 animate-fadeIn">
            <Helmet>
                <title>About | Gadget Haven</title>
            </Helmet>
            <h1 className="text-5xl font-extrabold text-white mb-6">About Us</h1>
            <p className="text-lg text-white mb-8 px-4 md:px-20 lg:px-40 text-center">
                Welcome to Gadget Heaven! We are dedicated to bringing you the latest and greatest in tech gadgets. Whether you're looking for the newest smart devices, or the coolest accessories, we have it all. Explore our collection and discover your next favorite gadget.
            </p>
            <img src={aboutImage}  className=" w-[500px]  bg-cover h-[300px] rounded-lg border-2 shadow-md" />
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl transform transition-all duration-500 hover:scale-105">
                <p className="text-gray-700 mb-4">
                    Our mission is to provide you with an exceptional shopping experience, bringing you the best in technology. From the latest innovations to the most popular gadgets, we ensure you stay ahead of the tech curve.
                </p>
                <p className="text-gray-700">
                    Browse through our wide selection of products, and feel free to contact us if you have any questions or need assistance. Thank you for choosing Gadget Heaven!
                </p>
            </div>
            <div className="mt-10">
                <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transform transition-all duration-300 hover:scale-105">
                    Contact Us
                </button>
            </div>
        </div>
        </>
    );
};

export default About;

