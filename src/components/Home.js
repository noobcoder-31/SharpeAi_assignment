//O explanation needed, Home page it is where user lands on entering URL

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-4/6 mb-8">
        <h1 className="text-4xl mb-4 text-blue-600 font-bold">
          Welcome to Our Platform!
        </h1>

        <p className="text-gray-700 text-lg mb-6">
          Explore the amazing features of our platform and make your
          transactions with ease.
        </p>

        <Link to="/transaction">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 transition duration-300">
            Go to Transaction Page
          </button>
        </Link>

        <Link to="/data">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Go to Data Page
          </button>
        </Link>
      </div>

      <div className="bg-blue-500 p-12 rounded-lg text-white text-center w-4/6">
        <h2 className="text-5xl mb-4 font-bold">
          Discover a New Way to Transact!
        </h2>
        <p className="text-lg mb-6">
          Join us and experience secure and hassle-free transactions. Our
          platform provides cutting-edge technology and user-friendly
          interfaces.
        </p>

        <Link to="/transaction">
          <button className="bg-white text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
