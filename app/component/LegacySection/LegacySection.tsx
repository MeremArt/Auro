"use client";
import React from "react";
import Image from "next/image";

export default function LegacySection() {
  return (
    <section className="opacity-50 bg-[#333] backdrop-blur-[15px] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
          The Legacy of Auro
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-amber-500 text-4xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                >
                  <path
                    d="M20.4766 55H22.9766V37.5125C22.9916 36.2575 23.4191 30 30.4766 30C37.5341 30 37.9616 36.2575 37.9766 37.5V55H55.4766V50H52.9766V10H55.4766V5H5.47656V10H7.97656V50H5.47656V55H20.4766ZM47.9766 10V15H12.9766V10H47.9766ZM12.9766 20H47.9766V50H42.9766V37.5C42.9766 33.1775 40.3641 25 30.4766 25C20.5891 25 17.9766 33.1775 17.9766 37.5V50H12.9766V20Z"
                    fill="url(#paint0_linear_110_1718)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_1718"
                      x1="30.4766"
                      y1="5"
                      x2="30.4766"
                      y2="55"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F5C750" />
                      <stop offset="1" stopColor="#936A00" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="text-xl mb-3 font-montserrat text-[25px] font-bold leading-[48px]">
              Inspired by Ancient Rome
            </h3>
            <p className="text-gray-300 text-[20px] font-medium leading-[48px] font-montserrat">
              AURO draws on classical design and timeless economic values.
            </p>
          </div>

          {/* Middle Column - Coin Image with Spinning Animation and Blur Effect */}
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              {/* Blur Effect Background */}
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-lg animate-pulse"></div>

              {/* Spinning Coin */}
              <div className="absolute inset-0 rounded-full shadow-lg flex items-center justify-center animate-spin-slow">
                <Image
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744929617/9DE07EE3-3D1A-4D38-A71B-6D1BF1B975A5_1_gmrkea.png"
                  alt="Coin_Logo"
                  width={500}
                  height={500}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-amber-500 text-4xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.2841 5.1275C25.8941 3.8925 28.1341 3.125 30.4766 3.125C32.8191 3.125 35.0591 3.8925 38.6691 5.1275L40.4866 5.7525C44.1891 7.0175 47.0491 7.9975 49.0941 8.8275C50.1241 9.245 51.0116 9.6525 51.7241 10.065C52.4116 10.465 53.0991 10.9625 53.5666 11.63C54.0291 12.2875 54.2691 13.0975 54.4191 13.88C54.5766 14.69 54.6691 15.6625 54.7316 16.78C54.8516 18.995 54.8516 22.035 54.8516 25.975V29.9775C54.8516 45.23 43.3316 52.5425 36.4816 55.5375L36.4141 55.565C35.5641 55.9375 34.7641 56.285 33.8466 56.52C32.8791 56.77 31.8491 56.875 30.4766 56.875C29.1016 56.875 28.0766 56.77 27.1066 56.52C26.1891 56.285 25.3891 55.9375 24.5391 55.565L24.4716 55.5375C17.6216 52.5425 6.10156 45.23 6.10156 29.975V25.975C6.10156 22.035 6.10156 18.995 6.22156 16.7775C6.28406 15.6625 6.37656 14.69 6.53406 13.8775C6.68406 13.0975 6.92406 12.2875 7.38406 11.6275C7.85406 10.9625 8.54156 10.465 9.22906 10.065C9.94156 9.6525 10.8291 9.245 11.8591 8.8275C13.9041 7.9975 16.7641 7.0175 20.4666 5.7525L22.2841 5.1275ZM28.6016 7.095C27.3566 7.365 25.7641 7.9 23.1766 8.785L21.7466 9.275C17.9641 10.57 15.2066 11.515 13.2716 12.3C12.5294 12.5872 11.8078 12.9246 11.1116 13.31C10.9311 13.4149 10.7575 13.5309 10.5916 13.6575C10.5419 13.6948 10.4959 13.7367 10.4541 13.7825C10.4212 13.8413 10.3944 13.9033 10.3741 13.9675C10.3241 14.1042 10.2716 14.3108 10.2166 14.5875C10.0783 15.3791 9.99481 16.1794 9.96656 16.9825C9.86406 18.8825 9.85156 21.4575 9.85156 24.8975L28.6016 18.6475V7.095ZM32.3516 7.095V18.6475L51.1016 24.8975C51.1016 21.4575 51.0891 18.88 50.9866 16.9825C50.9583 16.1794 50.8748 15.3791 50.7366 14.5875C50.6973 14.3777 50.6447 14.1706 50.5791 13.9675C50.5587 13.9033 50.5319 13.8413 50.4991 13.7825C50.4572 13.7367 50.4112 13.6948 50.3616 13.6575C50.1957 13.5301 50.022 13.4132 49.8416 13.3075C49.1452 12.9238 48.4236 12.588 47.6816 12.3025C45.7466 11.515 42.9891 10.57 39.2066 9.2775L37.7741 8.785C35.1891 7.9 33.5966 7.365 32.3516 7.095ZM28.6016 22.6025L9.85156 28.8525V29.9775C9.85156 42.9175 19.5266 49.285 25.9741 52.1C26.9016 52.505 27.4391 52.735 28.0366 52.8875C28.2082 52.9325 28.3966 52.9717 28.6016 53.005V22.6025ZM32.3516 53.005V22.6025L51.1016 28.8525V29.9775C51.1016 42.9175 41.4266 49.285 34.9791 52.1C34.0516 52.505 33.5141 52.735 32.9166 52.8875C32.7449 52.9325 32.5566 52.9717 32.3516 53.005Z"
                    fill="url(#paint0_linear_110_1640)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_110_1640"
                      x1="30.4766"
                      y1="3.125"
                      x2="30.4766"
                      y2="56.875"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFD45C" />
                      <stop offset="1" stopColor="#7C5C00" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3 text-[25px] leading-[48px]">
              Designed for Longevity.
            </h3>
            <p className="text-gray-300 text-[20px] font-medium leading-[48px] font-montserrat">
              Value backed, transparent, and built to last.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-16">
          <div className="w-full border-t border-amber-500 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500"></div>
          </div>
        </div>

        {/* Bottom Text */}
        <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-center">
          Built for Modern DeFi
        </h3>
      </div>

      {/* Add custom animation for slow spinning */}
      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
