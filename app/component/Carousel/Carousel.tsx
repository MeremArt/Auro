"use client";
import { useState, useEffect, useRef } from "react";

export default function FeatureCarousel() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
      description:
        "Create your account and join the decentralized Roman economy quickly and easily.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      description:
        "Connect your wallet and start using our DeFi services with just one click.",
      bgColor: "bg-white",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      description:
        "No ERGO required. Our platform minimizes fees and transaction times.",
      bgColor: "bg-amber-100",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      description:
        "Connect your hardware wallet for maximum security and peace of mind.",
      bgColor: "bg-white",
    },
  ];

  const containerRef = useRef(null);
  const [duplicatedFeatures, setDuplicatedFeatures] = useState([
    ...features,
    ...features,
  ]);
  const [position, setPosition] = useState(0);
  const [animationActive, setAnimationActive] = useState(true);

  useEffect(() => {
    const animate = () => {
      if (!animationActive) return;

      const duration = 20000; // 20 seconds for one complete cycle
      const step = 1;

      const moveCarousel = () => {
        setPosition((prevPosition) => {
          const newPosition = prevPosition + step;

          // Reset position when we've moved a complete feature width
          if (newPosition >= 100) {
            return 0;
          }

          return newPosition;
        });
      };

      const interval = setInterval(moveCarousel, duration / 100);
      return () => clearInterval(interval);
    };

    const animation = animate();
    return () => animation && animation();
  }, [animationActive]);

  const pauseAnimation = () => setAnimationActive(false);
  const resumeAnimation = () => setAnimationActive(true);

  return (
    <section className="bg-gradient-to-b py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className="relative"
          onMouseEnter={pauseAnimation}
          onMouseLeave={resumeAnimation}
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-500 ease-linear"
            style={{ transform: `translateX(-${position}%)` }}
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} rounded-lg p-8 shadow-lg flex-shrink-0 w-full md:w-1/2 lg:w-1/4 mx-2 hover:scale-105 transition-transform`}
              >
                <div className="flex items-center justify-center mb-6 text-amber-500">
                  <div className="p-3 bg-amber-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <p className="text-gray-700 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
