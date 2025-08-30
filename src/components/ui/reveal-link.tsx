"use client";
import { motion } from "framer-motion";

const scheduleData = [
    { city: "BANDUNG", date: "01.08" },
    { city: "SURABAYA", date: "02.08" },
    { city: "JAKARTA", date: "09.08" },
    { city: "YOGYAKARTA", date: "10.08" },
    { city: "PALEMBANG", date: "24.08" },
    { city: "JAKARTA", date: "30.08" },
];

export const RevealLinks = () => {
    return (
        <section className="grid place-content-center font-helvetiva-bold gap-2 px-8 py-16 text-red-600">
            <div className="flex flex-col w-full items-center gap-[30px]">
                {scheduleData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start justify-center relative w-full"
                    >
                        <div className="relative w-fit mt-[-1.00px] font-helvetica-bold font-bold text-red-600 text-7xl text-center tracking-[-3.60px] leading-[normal] whitespace-nowrap">
                            <FlipLink href="#">{item.city}</FlipLink>
                        </div>
                        <div className="relative w-fit mt-[-1.00px] font-helvetica-bold text-red-600 text-xl sm:text-2xl text-center tracking-[-1.20px] leading-[normal]">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipLinkProps = {
    children: string;
    href: string;
};

const FlipLink = ({ children, href }: FlipLinkProps) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap font-bold uppercase text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            style={{
                lineHeight: 0.75,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};