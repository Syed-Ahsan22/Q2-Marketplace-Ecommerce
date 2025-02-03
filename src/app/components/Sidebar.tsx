import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link href="/admin/dashboard">
            <a className="text-gray-300 hover:text-white">Dashboard</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/products">
            <a className="text-gray-300 hover:text-white">Products</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/orders">
            <a className="text-gray-300 hover:text-white">Orders</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/users">
            <a className="text-gray-300 hover:text-white">Users</a>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/admin/settings">
            <a className="text-gray-300 hover:text-white">Settings</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
