"use client";

import { ChartNoAxesColumn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/about", label: "ABOUT" },
        { href: "/#discography", label: "DISCOGRAPHY" },
        { href: "/#schedule", label: "SCHEDULE" },
        { href: "https://api.whatsapp.com/send/?phone=%2B6287770922416&text&type=phone_number&app_absent=0", label: "BOOKINGS" },
    ];

    return (
        <nav className="w-fit fixed top-2 z-50 lg:hidden space-y-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-neutral-500/10 backdrop-blur-lg rounded-xl">
                <div className="flex items-center w-fit gap-20 h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-40 h-12">
                                <Image
                                    src="/assets/realityclublogo.svg"
                                    alt="Reality Club Logo"
                                    fill
                                    className="object-contain transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-0 transition-transform duration-300"
                            aria-expanded={isMenuOpen}
                            style={{
                                transform: isMenuOpen ? 'rotate(180deg)' : 'none'
                            }}
                        >
                            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
                            <ChartNoAxesColumn className="text-white rotate-90 scale-y-[-1] h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-500/10 backdrop-blur-lg rounded-xl">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-white font-helvetica-bold text-red-600 block px-3 py-2 rounded-md text-base text-center transition-all duration-500 transform origin-top"
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                                transform: isMenuOpen ? 'scaleY(1)' : 'scaleY(0)',
                                opacity: isMenuOpen ? 1 : 0
                            }}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;