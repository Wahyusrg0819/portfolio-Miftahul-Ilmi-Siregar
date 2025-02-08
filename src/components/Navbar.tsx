"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-600" aria-label="Beranda">
            ポートフォリオ
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-pink-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Beranda
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Tentang
            </Link>
            <Link 
              href="/portfolio" 
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Portofolio
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              Kontak
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden pt-4 pb-2 space-y-2`}
        >
          <Link 
            href="/" 
            className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link 
            href="/about" 
            className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tentang
          </Link>
          <Link 
            href="/portfolio" 
            className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Portofolio
          </Link>
          <Link 
            href="/contact" 
            className="block py-2 text-gray-600 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontak
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 