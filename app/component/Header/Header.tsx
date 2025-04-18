// Optimized Header.tsx for Next.js
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { Menu, X } from "lucide-react";

// Type definition for user data
interface UserData {
  role: string;
  [key: string]: unknown; // For other properties
}

const Logo: React.FC = () => {
  return (
    <main className="flex items-center gap-2">
      <section className="flex items-center justify-center h-[30px] w-auto">
        <Image
          src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1744956833/AUREUS_LOGO_lobdn9.png"
          height={20}
          alt="Aureus Logo"
          width={80}
        />
      </section>
    </main>
  );
};

const ConnectWalletButton: React.FC = () => {
  return (
    <button className="bg-gradient-to-r font-montserrat from-[#CB6D51] to-[#ECAC54] text-white font-medium rounded-full px-6 py-3">
      Connect wallet
    </button>
  );
};

const NavItem: React.FC<{
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}> = ({ to, label, isActive, onClick }) => {
  return (
    <Link
      href={to}
      className={`
        flex items-center justify-center px-4 py-2
        transition-colors duration-200
      `}
      onClick={onClick}
    >
      <span
        className={`
          font-bold  font-montserrat text-[16px]
          ${isActive ? "text-[#C94D57]" : "text-[#B8B8B8]"}
        `}
      >
        {label}
      </span>
    </Link>
  );
};

const MobileNav: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  userData: UserData | null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ isOpen, onClose, userData }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleConnectWallet = () => {
    toast.success("Connecting wallet...", {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#333",
        color: "#fff",
      },
    });
    onClose();
  };

  // Define navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/market", label: "Market" },
    { to: "/stake", label: "Stake" },
    { to: "/about", label: "About" },
  ];

  if (!isOpen) return null;

  return (
    <main className="fixed inset-0 bg-black bg-opacity-80 z-50 md:hidden">
      <section className="absolute right-0 top-0 bottom-0 w-72 bg-[#1A0304] shadow-xl h-full">
        <div className="flex justify-between items-center p-5 border-b border-[#3A1516]">
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-[#2E0D0E] text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col font-montserrat p-4 space-y-3">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              isActive={pathname === item.to}
              onClick={onClose}
            />
          ))}

          <div className="mt-8 pt-4 border-t border-[#3A1516]">
            <button
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-r from-[#CB6D51] to-Gold text-white rounded-full py-3 px-4 mt-2 text-base font-medium"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Get user data from localStorage
    try {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  // Define navigation items for desktop view
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/market", label: "Market" },
    { to: "/stake", label: "Stake" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {/* Container with gradient background */}
      <div className="w-full bg-gradient-to-r from-[#000] to-[#2E0D0E]">
        <header className="w-full flex items-center justify-between px-4 md:px-12 lg:px-20 h-[80px] max-w-[1920px] mx-auto">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                label={item.label}
                isActive={pathname === item.to}
              />
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Connect Wallet Button (Desktop) */}
            <div className="hidden md:block">
              <ConnectWalletButton />
            </div>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-[40px] h-[40px] text-white"
            >
              <Menu className="w-[28px] h-[28px]" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        userData={userData}
      />

      {/* Toast container for notifications */}
      <Toaster />
    </>
  );
};

export default Header;
