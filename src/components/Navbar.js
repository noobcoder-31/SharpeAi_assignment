// Navbar for easy navigation between diferent Components

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          E-Wallet
        </Link>
        <div className="text-white text-lg font-bold">
          <a href="https://www.linkedin.com/in/raj-karan-singh-tomar-a2a376236/">
            Learn More
          </a>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/transaction"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Transaction
          </Link>
          <Link
            to="/data"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Data
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
