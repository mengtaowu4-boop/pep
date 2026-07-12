import React from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer id="portfolio-footer" className="w-full pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-100 flex flex-col items-center text-center space-y-6">
      
      {/* Symmetrical logo brand mark */}
      <div className="relative w-14 h-14 flex items-center justify-center bg-blue-600 rounded-full shadow-lg select-none hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-full h-full p-2.5">
          <path
            d="M50 20 C25 20, 20 40, 20 50 C20 65, 30 80, 50 80 C68 80, 75 68, 78 55 C65 65, 48 65, 38 52 C30 42, 35 25, 50 20 Z"
            fill="white"
          />
          <circle cx="76" cy="74" r="10" fill="#10b981" />
        </svg>
      </div>

      {/* Title & Roles */}
      <div className="flex flex-col space-y-1.5 max-w-md">
        <h3 className="text-lg font-bold text-gray-900 font-display">Leo</h3>
        <p className="text-xs text-gray-500 tracking-wider">
          Brand Strategy, Branding & Packaging
        </p>
      </div>

      {/* Button */}
      <div className="pt-2">
        <button
          onClick={onContactClick}
          className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs md:text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-300 cursor-pointer"
        >
          WhatsApp
        </button>
      </div>

      {/* Subtext info */}
      <div className="pt-8 border-t border-gray-50 w-full flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-400 font-mono tracking-wide gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-gray-300" /> Shanghai, China
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3 text-gray-300" /> contact@leo-brand.com
          </span>
        </div>
        <div>
          <span>&copy; {new Date().getFullYear()} LEO BRAND PORTFOLIO. ALL RIGHTS RESERVED.</span>
        </div>
      </div>

    </footer>
  );
}
