import React from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const products = [
  { id: 1, name: "Nike Air Max", description: "Comfortable running shoes", price: "$120", gender: "Men", image: "/b1.png" },
  { id: 2, name: "Nike Tracksuit", description: "Warm and stylish", price: "$80", gender: "Unisex", image: "/e2.png" },
  { id: 3, name: "Nike Best Shoe", description: "Soft and comfy", price: "$35", gender: "Men", image: "/featured/shoe1.png" },
  { id: 4, name: "Nike Shoes", description: "Perfect for winter", price: "$90", gender: "Men", image: "/featured/shoe2.png" },
  { id: 5, name: "Nike Running Shoes", description: "Lightweight and durable", price: "$110", gender: "Men", image: "/featured/shoe3.png" },
  { id: 6, name: "Nike Sports Shoe", description: "Wind-resistant and stylish", price: "$130", gender: "Unisex", image: "/featured/shoe4.png" },
  { id: 7, name: "Nike Joggers", description: "Comfortable fit", price: "$70", gender: "Men", image: "/featured/shoe5.png" },
  { id: 8, name: "Nike Comfy Shoes", description: "High performance", price: "$140", gender: "Men", image: "/featured/shoe6.png" },
  { id: 9, name: "Nike Polo Shoe", description: "Casual and classy", price: "$45", gender: "Men", image: "/featured/shoe7.png" },
  { id: 10, name: "Nike Tank Top Shoe", description: "Perfect for gym", price: "$30", gender: "Women", image: "/featured/shoe8.png" },
  { id: 11, name: "Nike Training Shoes", description: "Great for workouts", price: "$100", gender: "Men", image: "/featured/shoe9.png" },
  { id: 12, name: "Nike Classic Shoe", description: "Adjustable fit", price: "$25", gender: "Unisex", image: "/featured/shoe10.png" },
  { id: 13, name: "Nike Best of One", description: "Pack of 3", price: "$20", gender: "Unisex", image: "/b1.png" },
  { id: 14, name: "Nike Backpack", description: "Spacious and durable", price: "$60", gender: "Unisex", image: "/nike.png" },
  { id: 15, name: "Nike Wristband", description: "Sweat-absorbing", price: "$15", gender: "Unisex", image: "/nike2.png" },
];

const ProductList = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-3/4">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={320} 
                height={320} 
                className="rounded-lg shadow-lg w-full h-40 object-cover mb-2" 
                priority={true} 
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-sm text-gray-500">Gender: {product.gender}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
