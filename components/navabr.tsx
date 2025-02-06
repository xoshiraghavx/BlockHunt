import { Blocks, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky sm:top-10 top-5 z-50">
      <div className="grid grid-cols-3 container mx-auto px-2">
        <div className="flex items-center space-x-3">
          <Blocks className="h-10 w-10 text-blue-600" />
          <span className="text-2xl font-bold text-white">DappHunt</span>
        </div>
        
        <div className="flex h-16 items-center justify-center">
          <div className="hidden md:flex space-x-16">
            {["Product", "Launches", "News", "Community", "FAQs"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden justify-end items-center pr-4">
          <button
            className={`text-white transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full h-screen md:hidden bg-black py-4 px-8 space-y-4 flex flex-col items-center transition-transform duration-700 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        {["Product", "Launches", "News", "Community", "FAQs"].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-lg text-white"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}
