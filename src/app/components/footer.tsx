import Link from "next/link";
import Image from "next/image"; // Import Image component from Next.js
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <Image
              src="/b1.png" // Use Image component for optimized image loading
              alt="Nike Logo"
              width={128} // Adjust as needed
              height={128} // Adjust as needed
            />
            <p className="mt-4 text-gray-400 text-sm">Just Do It</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <Link href="/List" className="text-gray-400 hover:text-white text-sm">
              Shop
            </Link>
            <Link href="/sale" className="text-gray-400 hover:text-white text-sm">
              Sale
            </Link>
            <Link href="/new-arrivals" className="text-gray-400 hover:text-white text-sm">
              New Arrivals
            </Link>
            <Link href="/locations" className="text-gray-400 hover:text-white text-sm">
              Find a Store
            </Link>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Customer Service</h3>
            <Link href="/help" className="text-gray-400 hover:text-white text-sm">
              Help & Support
            </Link>
            <Link href="/returns" className="text-gray-400 hover:text-white text-sm">
              Returns & Exchanges
            </Link>
            <Link href="/Contact" className="text-gray-400 hover:text-white text-sm">
              Contact Us
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/shazer.ali.50"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com/nike"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/nike"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.youtube.com/user/nike"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nike Inc All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
