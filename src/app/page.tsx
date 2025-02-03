"use client";

import React from "react";
import Image from "next/image";
import ProductCards from "./products/page";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-w-[1344px] h-auto mt-[58px] mx-auto px-4">
        {/* Image Section */}
        <div className="w-full h-auto flex justify-center">
          <Image 
            src="/shoes.png" 
            alt="Shoes Image" 
            width={1344} 
            height={700} 
            className="w-full h-auto object-contain"
          />
        </div>
        
        <div className="w-full max-w-[1008px] h-auto flex justify-center mx-auto mt-6">
          <Image 
            src="/Frame.png" 
            alt="Shoes Image" 
            width={1008} 
            height={229} 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Product Cards */}
      <ProductCards/>
      
      <div className="w-full max-w-[880px] h-auto flex justify-center mx-auto mt-6">
        <Image 
          src="/Frame1.png" 
          alt="nike" 
          width={880} 
          height={192} 
          className="w-full h-auto"
        />
      </div>
      <Footer/>
    </div>
  );
}
