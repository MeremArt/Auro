import Image from "next/image";
import FeatureCarousel from "./component/Carousel/Carousel";
import LegacySection from "./component/LegacySection/LegacySection";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744889102/Frame_1000005095_lr5fak.png')",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold tracking-wider mb-4">
            DeFi Roman Bank
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-montserrat">
            A decentralized finance platform inspired by ancient Rome.
          </p>
          <button className="bg-amber-500 text-white font-medium font-montserrat px-8 py-3 rounded-full hover:bg-amber-600 transition-colors">
            Launch App
          </button>
        </div>
        {/* Feature Carousel */}
        <div className="absolute inset-0 flex items-center justify-center z-10 top-[800px]">
          <FeatureCarousel />
        </div>
      </section>

      {/* Legacy Section */}
      <section className="mt-40">
        <LegacySection />
      </section>
    </main>
  );
}
