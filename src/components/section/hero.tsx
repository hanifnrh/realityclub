"use client"

import React, { useEffect, useRef } from 'react'
import { MorphingText } from '../ui/morphing-text'

interface HeroSectionProps {
    date?: string
    description?: string
    primaryButtonText?: string
    secondaryButtonText?: string
    videoSrc?: string
    overlayOpacity?: number
    showScrollIndicator?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({
    date = "27.08.25",
    videoSrc = "/assets/hero.mp4",
    overlayOpacity = 0.4,
}) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Auto-play was prevented:", error)
            })
        }
    }, [])

    const texts = [
        "WHO KNOWS WHERE LIFE WILL TAKE YOU?",
        "I'LL DO IT MYSELF",
        "LOST MYSELF IN REVERIES",
        "ENOUGH FOR YOU",
        "DOES IT HAPPEN?",
        "SHUT UP, BEHAVE",
        "FINDING A CATHOLIC MAN TO LOVE THE LOVE OF MY LIFE",
        "MUTED SIRENS",
        "CLOSE TO YOU/JAUH",
        "QUICK! LOVE!",
        "NOW I'M A DIPLOMAT",
        "THANK YOU FOR HIJACKING MY EXISTENTIAL CRISIS",
        "YOU'LL FIND LOVERS LIKE YOU AND ME",
        "MAMA'S COMING HOME",
    ];


    return (
        <section className="w-full relative h-screen 2xl:h-[720px] flex items-end justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black"
                    style={{ opacity: overlayOpacity }}
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mx-auto p-10 text-center">
                <div className="space-y-1 px-0 lg:px-40">
                    {/* Main Title */}
                    <MorphingText texts={texts} />
                    <p className="text-lg sm:text-xl font-helvetica-bold text-neutral-200 max-w-2xl mx-auto leading-16 tracking-tighter">
                        {date}
                    </p>
                </div>
            </div>

        </section>
    )
}

export default HeroSection
