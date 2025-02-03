"use client"

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Banner */}
<div className="w-full h-12 bg-black flex items-center justify-center px-4 md:px-0">
  <div className="text-white text-sm flex flex-col md:flex-row justify-between w-full md:w-[70%] items-center text-center space-y-2 md:space-y-0">
    <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
      Summer Sale For All Nike Shoes And Free Express Delivery - OFF 50%!
    </p>
    <button className="font-semibold underline text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
      Shop Now
    </button>

    <div className="flex items-center gap-2 mt-2 md:mt-0">
      <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">English</p>
      
    </div>
  </div>
</div>


      {/* Main Navigation */}
      <div className="w-full h-14 mt-4 flex justify-between items-center px-4 md:px-10 lg:px-20">
        {/* Logo */}
        <p className="text-2xl font-bold">Exclusive.Nike</p>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 justify-center mx-8">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md h-10 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-200 p-4 space-y-4">
          <Link href="/Contact" className="hover:underline">
            Contact Us
          </Link>
          <Link href="/List" className="hover:underline">
            ProductsList
          </Link>
          <Link href="/About" className="hover:underline">
            About
          </Link>
          <Link href="/SignUp" className="hover:underline">
            Sign Up
          </Link>
          <Link href="/Men" className="hover:underline">
            Add to Cart
          </Link>
          <Link href="/Checkout" className="hover:underline">
            Check Order
          </Link>
          <Link href="/shipping" className="hover:underline">
            Tracking
          </Link>
        </div>
      )}

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-lg justify-center mt-4">
        <Link href="/Contact" className="hover:underline">
          Contact Us
        </Link>
        <Link href="/List" className="hover:underline">
          ProductsList
        </Link>
        <Link href="/About" className="hover:underline">
          About
        </Link>
        <Link href="/SignUp" className="hover:underline">
          Sign Up
        </Link>
        <Link href="/Men" className="hover:underline">
          Add to Cart
        </Link>
        <Link href="/Checkout" className="hover:underline">
          Check Order
        </Link>
        <Link href="/shipping" className="hover:underline">
          Tracking
        </Link>
      </div>
    </div>
  );
}