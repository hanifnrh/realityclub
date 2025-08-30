"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NavbarProps {
    className?: string;
}

const navLinks = [
    { href: "/about", label: "ABOUT" },
    { href: "/#discography", label: "DISCOGRAPHY" },
    { href: "/#schedule", label: "SCHEDULE" },
    { href: "https://api.whatsapp.com/send/?phone=%2B6287770922416&text&type=phone_number&app_absent=0", label: "BOOKINGS" },
]

function Navbar({ className = "" }: NavbarProps = {}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={navRef}
            className={`hidden lg:flex font-helvetica-bold w-fit text-red-600 rounded-full transition-all duration-300 ease-in-out items-center justify-center fixed top-2 py-4 px-10 z-50 gap-16 ${isScrolled
                ? "backdrop-blur-lg bg-neutral-900/50"
                : "bg-transparent"
                } ${className}`}
        >
            {navLinks.slice(0, 2).map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="relative group"
                >
                    <span className="transition-all duration-300 hover:text-red-100 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:scale-105 nav-glow">
                        {label}
                    </span>
                </Link>
            ))}

            <Link href="/" className="">
                <Image
                    src="/assets/realityclublogo.svg"
                    alt="Logo"
                    width={241}
                    height={70}
                    className="transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] "
                />
            </Link>

            {navLinks.slice(2).map(({ href, label }) => (
                <Link
                    key={href}
                    href={href}
                    className="relative group"
                >
                    <span className="transition-all duration-300 hover:text-red-200 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:scale-105 nav-glow">
                        {label}
                    </span>
                </Link>
            ))}
        </div>
    );
}

export default Navbar