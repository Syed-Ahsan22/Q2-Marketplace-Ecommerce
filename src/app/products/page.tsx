"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "uvum0s8r",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

interface Product {
  _id: string;
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  colors: string[];
  category: string;
  status: string;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        productName,
        price,
        description,
        "imageUrl": image.asset->url,
        colors,
        category,
        status
      }`;

      const data = await sanity.fetch(query);
      setProducts(data || []); // Ensure data is always an array
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    // setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to your cart!`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      
      <h2 className="text-center text-slate-800 mt-4 mb-4 text-2xl font-bold">
        Products from API
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={200}
                height={200}
                className="rounded"
                priority={false} // Improve page loading performance
              />
              <h3 className="text-lg font-semibold mt-2 text-gray-800">
                {product.productName}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.description}
              </p>
              <p className="text-md font-bold text-blue-600 mb-2">
                ${product.price.toFixed(2)}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors?.length > 0 ? (
                  product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
                    >
                      {color}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-gray-500">No colors</span>
                )}
              </div>

              <button
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
