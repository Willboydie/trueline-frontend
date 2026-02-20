import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/15 flex items-center justify-center">
              <div className="w-4 sm:w-5 h-0.5 bg-white rounded-full" />
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
              TrueLine
            </span>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="text-sm sm:text-base text-white/90 mb-1 sm:mb-2">
              <span className="font-semibold text-white">TrueLine Lasers</span>
              <span className="mx-1 sm:mx-2">—</span>
              <span className="block sm:inline mt-1 sm:mt-0">Trading name of Galactic Lasers Ltd</span>
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-light">
              Copyright © 2026 TrueLine Lasers — All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}