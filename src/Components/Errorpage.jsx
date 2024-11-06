import React from 'react';
import { Link } from 'react-router-dom';
import err from '../../src/assets/page-found-glitch-background_23-2148077106-removebg-preview.png'

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <p className="text-2xl text-gray-700 mb-2">OOPS!</p>
            <h1 className="text-6xl font-bold text-red-500 mb-2">404</h1>
            <img src={err}  className="w-1/3 h-96 mb-4" />
            <div className="flex flex-col items-center">
                <p className="text-lg text-gray-600 mb-4">We can't seem to find the page you're looking for.</p>
                <p className="text-xl text-red-500 mb-4">Not Found: 404</p>
                <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
