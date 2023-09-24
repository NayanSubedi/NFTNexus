import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; 

import NFTNexusLogo from '../assets/NFTNexus.png';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  return (
    <footer className="gradient-bg-footer text-white">
      <div className="container mx-auto py-8 flex flex-col items-center">
        <div className="flex justify-center items-center mb-4">
          <img src={NFTNexusLogo} alt="NFT Nexus Logo" className="w-32" />
        </div>

        <div className="flex flex-wrap justify-center">
          <Link
            to="home"
            smooth={true}
            duration={500} // Duration of the scroll animation in milliseconds
            className="text-white text-base mx-3 hover:text-blue-500 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="creators"
            smooth={true}
            duration={500}
            className="text-white text-base mx-3 hover:text-blue-500 cursor-pointer"
          >
            Artworks
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-white text-base mx-3 hover:text-blue-500 cursor-pointer"
          >
            Creators
          </Link>
          <Link
            to="transactions"
            smooth={true}
            duration={500}
            className="text-white text-base mx-3 hover:text-blue-500 cursor-pointer"
          >
            Transactions
          </Link>
        </div>

        <div className="mt-6 text-base text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="mt-4">
          <div className="text-center text-gray-400 text-sm">
            <p>Subscribe to our newsletter for updates:</p>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="py-2 px-4 rounded-l-md border-t border-b border-l text-gray-800 focus:outline-none"
            />
            <button
              className="bg-[#1526bd] hover:bg-[#b45609] text-white py-2 px-4 rounded-r-md border border-blue-500 focus:outline-none"
              onClick={scrollToTop}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
