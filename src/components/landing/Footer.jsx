import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Company Info */}
          <div className="text-center md:text-center">
            <div className="text-sm sm:text-base text-white/90 mb-1 sm:mb-2">
              <span className="font-semibold text-white">TrueLine Lasers</span>
              <span className="mx-1 sm:mx-2">—</span>
              <span className="block sm:inline mt-1 sm:mt-0">Trading name of TrueLine Lasers Limited</span>
            </div>
            <div className="text-xs sm:text-sm text-white/60 font-light">
              Copyright © 2026 TrueLine Lasers — All Rights Reserved.
            </div>
          </div>
      </div>
    </footer>
  );
}