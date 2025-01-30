import React from "react";

const products = [
  { id: 1, name: "Nike Air Max", gender: "Men" },
  { id: 2, name: "Nike Sweater", gender: "Unisex" },
  { id: 3, name: "Nike T-Shirt", gender: "Men" },
  { id: 4, name: "Nike Hoodie", gender: "Women" },
  { id: 5, name: "Nike Running Shoes", gender: "Men" },
  { id: 6, name: "Nike Joggers", gender: "Women" },
  { id: 7, name: "Nike Cap", gender: "Unisex" },
  { id: 8, name: "Nike Socks", gender: "Unisex" },
  { id: 9, name: "Nike Backpack", gender: "Unisex" },
  { id: 10, name: "Nike Leggings", gender: "Women" },
];

const Sidebar = () => {
  return (
    <div className="w-1/4 p-6 border-r">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <div>
        <h3 className="text-lg font-semibold mt-4">Men</h3>
        <ul>
          {products.filter(p => p.gender === "Men").map((product) => (
            <li key={product.id} className="py-2 text-gray-700">{product.name}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Women</h3>
        <ul>
          {products.filter(p => p.gender === "Women").map((product) => (
            <li key={product.id} className="py-2 text-gray-700">{product.name}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mt-4">Unisex</h3>
        <ul>
          {products.filter(p => p.gender === "Unisex").map((product) => (
            <li key={product.id} className="py-2 text-gray-700">{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
